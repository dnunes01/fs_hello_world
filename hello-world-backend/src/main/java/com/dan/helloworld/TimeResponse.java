package com.dan.helloworld;

import java.time.LocalDateTime;
import com.fasterxml.jackson.annotation.JsonFormat;

public record TimeResponse(
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    LocalDateTime timestamp
) {}
