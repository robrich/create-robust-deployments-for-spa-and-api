package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import java.time.*;
import java.util.*;

@RestController
public class WeatherForecastController {

	@GetMapping(path = "/api/weatherforecast")
	public List<WeatherForecast> getWeather() {

		List<WeatherForecast> forecasts = new ArrayList<WeatherForecast>();

		String[] summaries = {
			"Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
		};
		LocalDate today = LocalDate.now();
		Random ran = new Random();

		for (int i = 0; i < 5; i++) {
			int temperatureC = ran.nextInt(75) - 20;
			double dTemperatureC = (double)temperatureC;
			int temperatureF = (int)((dTemperatureC * 1.8) + 32);
			String summary = summaries[ran.nextInt(summaries.length)];
			WeatherForecast w = new WeatherForecast(today.plusDays(i), temperatureC, temperatureF, summary);
			forecasts.add(w);
		}

		return forecasts;
	}

}
