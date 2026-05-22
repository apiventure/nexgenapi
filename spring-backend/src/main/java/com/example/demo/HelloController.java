package com.example.demo;

import com.example.demo.model.ApiExecuteRequest;
import com.example.demo.model.ApiExecuteResponse;
import com.example.demo.service.ApiExecuteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import reactor.core.publisher.Mono;

@RestController
@RequestMapping("/api")
public class HelloController {
    private final ApiExecuteService apiExecuteService;

    @Autowired
    public HelloController(ApiExecuteService apiExecuteService) {
        this.apiExecuteService = apiExecuteService;
    }

    @PostMapping(value = "/executeCurl", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public Mono<ApiExecuteResponse> executeApi(@RequestBody ApiExecuteRequest request) {
        return apiExecuteService.execute(request);
    }
}

