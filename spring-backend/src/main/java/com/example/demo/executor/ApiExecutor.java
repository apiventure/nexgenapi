package com.example.demo.executor;

import com.example.demo.model.ApiExecuteRequest;
import com.example.demo.model.ApiExecuteResponse;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Component;
import org.springframework.web.reactive.function.client.WebClient;
import org.springframework.web.reactive.function.client.WebClientResponseException;
import reactor.core.publisher.Mono;

import java.net.URI;
import java.net.URISyntaxException;
import java.time.Duration;
import java.time.Instant;
import java.util.HashMap;
import java.util.Map;

@Component
public class ApiExecutor {
    private final WebClient webClient;
    private final ObjectMapper objectMapper;

    public ApiExecutor(WebClient.Builder webClientBuilder, ObjectMapper objectMapper) {
        this.webClient = webClientBuilder.build();
        this.objectMapper = objectMapper;
    }

    public Mono<ApiExecuteResponse> execute(ApiExecuteRequest request) {
        Instant start = Instant.now();
        // Log incoming request as JSON
        try {
            System.out.println("Incoming ApiExecuteRequest JSON: " + objectMapper.writeValueAsString(request));
        } catch (JsonProcessingException e) {
            System.out.println("Failed to log incoming request JSON: " + e.getMessage());
        }
        HttpMethod httpMethod;
        try {
            httpMethod = HttpMethod.valueOf(request.getMethod().toUpperCase());
        } catch (IllegalArgumentException e) {
            return Mono.just(errorResponse(400, "Invalid HTTP method", start));
        }

        URI uri;
        try {
            uri = buildUri(request.getUrl(), request.getQueryParams());
        } catch (URISyntaxException e) {
            return Mono.just(errorResponse(400, "Invalid URL", start));
        }

        WebClient.RequestBodySpec spec = webClient.method(httpMethod)
                .uri(uri)
                .accept(MediaType.APPLICATION_JSON);

        if (request.getHeaders() != null) {
            for (Map.Entry<String, String> entry : request.getHeaders().entrySet()) {
                spec.header(entry.getKey(), entry.getValue());
            }
        }


        if (request.getHeaders() == null || !request.getHeaders().containsKey("User-Agent")) {
            spec.header("User-Agent", "curl/7.68.0");
            System.out.println("Added User-Agent header: curl/7.68.0");
        }

        System.out.println("Outgoing headers:");
        if (request.getHeaders() != null) {
            for (Map.Entry<String, String> entry : request.getHeaders().entrySet()) {
                System.out.println(entry.getKey() + ": " + entry.getValue());
            }
        }

        // Log parsed request details
        System.out.println("Parsed method: " + request.getMethod());
        System.out.println("Parsed URL: " + uri);
        System.out.println("Parsed headers: " + request.getHeaders());
        System.out.println("Parsed queryParams: " + request.getQueryParams());
        System.out.println("Parsed body: " + request.getBody());

        Mono<ApiExecuteResponse> responseMono;
        String contentType = request.getHeaders() != null ? request.getHeaders().getOrDefault("Content-Type", "") : "";
        if (request.getBody() != null && (httpMethod == HttpMethod.POST || httpMethod == HttpMethod.PUT || httpMethod == HttpMethod.PATCH)) {
            if (contentType.equalsIgnoreCase(MediaType.APPLICATION_FORM_URLENCODED_VALUE)) {
                spec.contentType(MediaType.APPLICATION_FORM_URLENCODED);
                String formBody;
                if (request.getBody() instanceof String) {
                    formBody = (String) request.getBody();
                } else if (request.getBody() instanceof Map) {
                    // Convert Map to URL-encoded string
                    StringBuilder sb = new StringBuilder();
                    Map<?,?> map = (Map<?,?>) request.getBody();
                    for (Map.Entry<?,?> entry : map.entrySet()) {
                        sb.append(entry.getKey()).append("=").append(entry.getValue()).append("&");
                    }
                    if (sb.length() > 0) sb.deleteCharAt(sb.length() - 1);
                    formBody = sb.toString();
                } else {
                    formBody = request.getBody().toString();
                }
                System.out.println("Outgoing request as FORM (string): " + formBody);
                responseMono = spec.bodyValue(formBody)
                        .exchangeToMono(clientResponse -> buildResponse(clientResponse, start));
            } else {
                spec.contentType(MediaType.APPLICATION_JSON);
                System.out.println("Outgoing request as JSON: " + request.getBody());
                responseMono = spec.bodyValue(request.getBody())
                        .exchangeToMono(clientResponse -> buildResponse(clientResponse, start));
            }
        } else {
            System.out.println("Outgoing request with no body");
            responseMono = spec.exchangeToMono(clientResponse -> buildResponse(clientResponse, start));
        }

        return responseMono
                .timeout(Duration.ofSeconds(10))
                .doOnError(err -> {
                    System.out.println("Error: " + err.getMessage());
                    err.printStackTrace();
                })
                .doOnSuccess(resp -> {
                    System.out.println("Response status: " + resp.getStatus());
                    System.out.println("Response body: " + resp.getBody());
                })
                .onErrorResume(throwable -> handleError(throwable, start));
    }

    private URI buildUri(String url, Map<String, String> queryParams) throws URISyntaxException {
        if (queryParams == null || queryParams.isEmpty()) {
            return new URI(url);
        }
        StringBuilder sb = new StringBuilder(url);
        if (!url.contains("?")) sb.append("?");
        else if (!url.endsWith("&")) sb.append("&");
        for (Map.Entry<String, String> entry : queryParams.entrySet()) {
            sb.append(entry.getKey()).append("=").append(entry.getValue()).append("&");
        }
        sb.deleteCharAt(sb.length() - 1); // Remove trailing '&'
        return new URI(sb.toString());
    }

    private Mono<ApiExecuteResponse> buildResponse(org.springframework.web.reactive.function.client.ClientResponse clientResponse, Instant start) {
        return clientResponse.bodyToMono(String.class)
                .map(bodyStr -> {
                    Object bodyObj;
                    try {
                        bodyObj = objectMapper.readValue(bodyStr, Object.class);
                    } catch (Exception e) {
                        bodyObj = bodyStr;
                    }
                    Map<String, String> headers = new HashMap<>();
                    clientResponse.headers().asHttpHeaders().forEach((k, v) -> headers.put(k, String.join(",", v)));
                    ApiExecuteResponse resp = new ApiExecuteResponse();
                    resp.setStatus(clientResponse.statusCode().value());
                    resp.setHeaders(headers);
                    resp.setBody(bodyObj);
                    resp.setTimeMs(Duration.between(start, Instant.now()).toMillis());
                    return resp;
                });
    }

    private Mono<ApiExecuteResponse> handleError(Throwable throwable, Instant start) {
        ApiExecuteResponse resp = new ApiExecuteResponse();
        resp.setHeaders(new HashMap<>());
        resp.setTimeMs(Duration.between(start, Instant.now()).toMillis());
        if (throwable instanceof WebClientResponseException) {
            WebClientResponseException ex = (WebClientResponseException) throwable;
            resp.setStatus(ex.getStatusCode().value());
            resp.setBody(ex.getResponseBodyAsString());
        } else if (throwable instanceof java.util.concurrent.TimeoutException) {
            resp.setStatus(504);
            resp.setBody("Timeout");
        } else {
            resp.setStatus(500);
            resp.setBody("Internal error: " + throwable.getMessage());
        }
        return Mono.just(resp);
    }

    private ApiExecuteResponse errorResponse(int status, String message, Instant start) {
        ApiExecuteResponse resp = new ApiExecuteResponse();
        resp.setStatus(status);
        resp.setHeaders(new HashMap<>());
        resp.setBody(message);
        resp.setTimeMs(Duration.between(start, Instant.now()).toMillis());
        return resp;
    }
}
