import axios from "axios";

const API_KEY = "fe25139f76007df55f61f827d0e63f20";
const API_BASE_URL = "https://api.openweathermap.org/data/2.5";

type WeatherData = {
  temperature: number;
  weatherCode: number;
  description: string;
  humidity: number;
  wind: number;
  weatherMain: string;
};

export const fetchWeather = async (cityName:string): Promise<WeatherData>=> {
  try {
    const { data } = await axios.get(
      `${API_BASE_URL}/weather?q=${cityName}&appid=${API_KEY}&units=metric`
    );
    const { main, weather } = data;
    const temperature = main.temp;
    const weatherCode = weather[0].id;
    const description = weather[0].description;
    const humidity = main.humidity;
    const wind = data.wind.speed;
    const weatherMain = weather[0].main;

    return { temperature, weatherCode, description, humidity, wind, weatherMain, };
  } catch (error) {
    throw error;
  };
};