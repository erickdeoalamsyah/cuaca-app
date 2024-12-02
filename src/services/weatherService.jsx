const apiKey = "f5d8c3c0b2aa8c4dd3c314e407f54e12";

export const fetchWeatherData = async (city) => {
  try {
    const weatherResponse = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
    );
    if (!weatherResponse.ok) throw new Error("Weather data not found");
    return await weatherResponse.json();
  } catch (error) {
    console.error("Error fetching weather data:", error.message);
    return null;
  }
};

export const fetchForecastData = async (city) => {
  try {
    const forecastResponse = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`
    );
    if (!forecastResponse.ok) throw new Error("Forecast data not found");
    return await forecastResponse.json();
  } catch (error) {
    console.error("Error fetching forecast data:", error.message);
    return null;
  }
};
