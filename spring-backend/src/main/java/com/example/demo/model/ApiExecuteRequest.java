package com.example.demo.model;

import com.fasterxml.jackson.annotation.JsonInclude;
import java.util.Map;

@JsonInclude(JsonInclude.Include.NON_NULL)
public class ApiExecuteRequest {
    private String method;
    private String url;
    private Map<String, String> headers;
    private Map<String, String> queryParams;
    private Object body;

    // Getters and setters
    public String getMethod() { return method; }
    public void setMethod(String method) { this.method = method; }
    public String getUrl() { return url; }
    public void setUrl(String url) { this.url = url; }
    public Map<String, String> getHeaders() { return headers; }
    public void setHeaders(Map<String, String> headers) { this.headers = headers; }
    public Map<String, String> getQueryParams() { return queryParams; }
    public void setQueryParams(Map<String, String> queryParams) { this.queryParams = queryParams; }
    public Object getBody() { return body; }
    public void setBody(Object body) { this.body = body; }
}

