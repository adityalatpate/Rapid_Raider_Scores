package com.rapidraiderscores.rapidraiderscores;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;

@SpringBootApplication
@EnableScheduling
public class RapidraiderscoresApplication {

	public static void main(String[] args) {
		SpringApplication.run(RapidraiderscoresApplication.class, args);
	}

}
