package com.example.EMP_DETAILS;

import org.springframework.retry.annotation.EnableRetry;
import org.springframework.scheduling.annotation.EnableAsync;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@EnableAsync
@EnableRetry
public class EmpDetailsApplication {

	public static void main(String[] args) {
		SpringApplication.run(EmpDetailsApplication.class, args);
	}

}
