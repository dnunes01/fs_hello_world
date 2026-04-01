package com.dan.helloworld;

import java.time.LocalDateTime;
import java.util.Map;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {

    @GetMapping("/api/hello")
    public String hello() {
        return "Hello World!";
    }

    @GetMapping("/api/time")
    public String time() {
        return LocalDateTime.now().toString();
    }

    @GetMapping("/api/goodbye")
    public String goodbye() {
        return "Goodbye!";
    }

    @GetMapping("/api/hello/{name}")
    public String helloName(@PathVariable String name) {
        return "Hello, " + name + "!";
    }

    @GetMapping("/api/add")
    public int add(@RequestParam int a, @RequestParam int b) {
        return a + b;
    }

    @GetMapping("/api/user")
    public Map<String, Object> user() {
        return Map.of(
                "name", "Daniel",
                "role", "developer",
                "active", true);
    }
}