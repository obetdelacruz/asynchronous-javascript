export default async function fetchCurrentWeather(city) {
  const API_KEY = "2d4ab55d9ce8c6cfc182a9c0fb18b653";
  const CURRENT_WEATHER_API = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;

  const response = await fetch(CURRENT_WEATHER_API);
  const weatherData = await response.json();

  return weatherData;
}
