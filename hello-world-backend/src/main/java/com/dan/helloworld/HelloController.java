package com.dan.helloworld;

import java.time.LocalDateTime;
import java.util.Map;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {

    private final HelloService service;

    public HelloController(HelloService service) {
        this.service = service;
    }

    @GetMapping("/api/hello")
    public String hello() {
        return service.getHello();
    }

    @GetMapping("/api/time")
    public TimeResponse time() {
        return service.getCurrentTime();
    }

    @GetMapping("/api/goodbye")
    public String goodbye() {
        return service.getGoodbye();
    }

    @GetMapping("/api/hello/{name}")
    public String helloName(@PathVariable String name) {
        return service.getHelloName(name);
    }

    @GetMapping("/api/add")
    public int add(@RequestParam int a, @RequestParam int b) {
        return service.add(a, b);
    }

    @GetMapping("/api/user")
    public Map<String, Object> user() {
        return Map.of(
                "name", "Daniel",
                "role", "developer",
                "active", true);
    }
}