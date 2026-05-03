package com.dan.helloworld;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import org.junit.jupiter.api.Test;

public class HelloServiceTest {

    private final HelloService service = new HelloService();

    @Test
    void testGetHello() {
        assertEquals("Hello World!", service.getHello());
    }

    @Test
    void testGetGoodbye() {
        assertEquals("Goodbye!", service.getGoodbye());
    } 

    @Test
    void testAdd() {
        assertEquals(7, service.add(3, 4));
    }

    @Test
    void testHelloName() {
        assertEquals("Hello, Daniel!", service.getHelloName("Daniel"));
    }

    @Test
    void testGetCurrentTime() {
        TimeResponse response = service.getCurrentTime();
        assertNotNull(response);
        assertNotNull(response.timestamp());
    }

}
