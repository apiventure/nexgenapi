package com.example.demo.service;

import com.example.demo.executor.ApiExecutor;
import com.example.demo.model.ApiExecuteRequest;
import com.example.demo.model.ApiExecuteResponse;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Mono;

@Service
public class ApiExecuteService {
    private final ApiExecutor apiExecutor;

    public ApiExecuteService(ApiExecutor apiExecutor) {
        this.apiExecutor = apiExecutor;
    }

    public Mono<ApiExecuteResponse> execute(ApiExecuteRequest request) {
        // Additional business logic can be added here if needed
        return apiExecutor.execute(request);
    }
}

