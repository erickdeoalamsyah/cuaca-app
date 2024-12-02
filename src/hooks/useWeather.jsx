import { useState, useEffect } from "react";
import { fetchWeatherData, fetchForecastData } from "../services/weatherService";

const useWeather = (defaultCity = "Jakarta") => {
  const [city, setCity] = useState(defaultCity);
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null); // Tambahkan state error

  const fetchWeather = async (selectedCity = city) => {
    setIsLoading(true);
    setError(null); // Reset error setiap kali pencarian dimulai
    try {
      const weather = await fetchWeatherData(selectedCity);
      if (weather.cod !== 200) {
        throw new Error(weather.message || "City not found");
      }
      setWeatherData(weather);

      const forecast = await fetchForecastData(selectedCity);
      setForecastData(forecast);
    } catch (error) {
      console.error("Error fetching weather data:", error.message);
      setError(error.message); // Set pesan error
      setWeatherData(null);
      setForecastData(null);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    city,
    setCity,
    weatherData,
    forecastData,
    fetchWeather,
    isLoading,
    error, // Return error state
  };
};

export default useWeather;
