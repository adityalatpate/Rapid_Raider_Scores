package com.rapidraiderscores.rapidraiderscores.config;

import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class SecurityConfig implements WebMvcConfigurer{
	
	@Override
    public void addCorsMappings(CorsRegistry registry) 
	{
        registry.addMapping("/**")
              .allowedOrigins("http://localhost:3000") // Allow requests from this origin
              .allowedMethods("GET", "POST", "PUT", "DELETE") // Allowed HTTP methods
              .allowedHeaders("*"); // Allowed headers
    }
	
//	@Bean
//	public FilterRegistrationBean coresFilter() {
//		UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
//		
//		CorsConfiguration corsConfiguration = new CorsConfiguration();
//		corsConfiguration.setAllowCredentials(true);
//		corsConfiguration.addAllowedOriginPattern("*");
//		corsConfiguration.addAllowedHeader("Authorization");
//		corsConfiguration.addAllowedHeader("Content-Type");
//		corsConfiguration.addAllowedHeader("Accept");
//		corsConfiguration.addAllowedHeader("Post");
//		corsConfiguration.addAllowedHeader("GET");
//		corsConfiguration.addAllowedHeader("DELETE");
//		corsConfiguration.addAllowedHeader("PUT");
//		corsConfiguration.addAllowedHeader("OPTIONS");
//		corsConfiguration.setMaxAge(3600L);
//		
//		source.registerCorsConfiguration("/**", corsConfiguration);
//		FilterRegistrationBean bean = new FilterRegistrationBean(new CorsFilter(source));
//		return bean;
//	}
}
