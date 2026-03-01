package com.socialapp.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HomeController {

    @GetMapping("/")
    public String home() {
        return "OpenCircle Backend is Running!";
    }

    @GetMapping("/health")
    public String health() {
        return "Status: OK";
    }
}
