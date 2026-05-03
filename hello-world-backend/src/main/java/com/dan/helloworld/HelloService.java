package com.dan.helloworld;

import java.time.LocalDateTime;

import org.springframework.stereotype.Service;

@Service
public class HelloService {

    public String getHello() {
        return "Hello World!";
    }

    public TimeResponse getCurrentTime() {
        return new TimeResponse(LocalDateTime.now());
    }

    public String getGoodbye() {
        return "Goodbye!";
    }

    public String getHelloName(String name) {
        return "Hello, " + name + "!";
    }

    public int add(int a, int b) {
        return a + b;
    }

}
