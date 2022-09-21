package com.example.demo;

import java.time.*;

public class WeatherForecast {
	public LocalDate date;
	public int temperatureC;
	public int temperatureF;
	public String summary;

	public WeatherForecast(LocalDate date, int temperatureC, int temperatureF, String summary) {
		this.date = date;
		this.temperatureC = temperatureC;
		this.temperatureF = temperatureF;
		this.summary = summary;
	}

	public LocalDate getDate() {
		return date;
	}
	public void setDate(LocalDate date) {
		this.date = date;
	}

	public int getTemperatureC() {
		return temperatureC;
	}
	public void setTemperatureC(int temperatureC) {
		this.temperatureC = temperatureC;
	}

	public int getTemperatureF() {
		return temperatureF;
	}
	public void setTemperatureF(int temperatureF) {
		this.temperatureF = temperatureF;
	}

	public String getSummary() {
		return summary;
	}
	public void setSummary(String summary) {
		this.summary = summary;
	}
}
