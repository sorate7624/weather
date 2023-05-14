import React, { FC, useState } from "react";
import { fetchWeather } from "../api/fetchWeather";
import { Wrapper, Title, Container, SearchBox, SearchInput, SearchButton, NotFound, WeatherBox, WeatherBoxTemperature, WeatherBoxDescription, WeatherDetails, WeatherDetailsHumidity, WeatherDetailsWind, } from "../weather.styles";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faMagnifyingGlass, faWater, faWind, } from '@fortawesome/free-solid-svg-icons';

import ClearImage from "../assets/images/clear.png";
import RainImage from "../assets/images/rain.png";
import SnowImage from "../assets/images/snow.png";
import CloudsImage from "../assets/images/cloud.png";
import MistImage from "../assets/images/mist.png";
import ErrorImage from "../assets/images/error.png";


export const Weather:FC = () => {
  const [cityName, setCityName] = useState("");
  const [weather, setWeather] = useState({
    temperature: 0,
    weatherCode: 0,
    description: "",
    humidity: 0,
    wind: 0,
    weatherMain: "",
  })
  const [container, setContainer] = useState("");
  const [weatherBox, setWeatherBox] = useState("");
  const [weatherDetails, setWeatherDetails] = useState("");
  const [error, setError] = useState("");

  const handleClick = async () => {
    try {
      const data = await fetchWeather(cityName);
      setWeather(data);
      setContainer("600px");
      setWeatherBox("block");
      setWeatherDetails("flex");
      setError("none");
    } catch (error) {
      setContainer("600px");
      setWeatherBox("none");
      setWeatherDetails("none");
      setError("block");
    }
  };

  return (
  <Wrapper>
    <Title>Weather App</Title>
    <Container height={container}>
      <SearchBox>
        <FontAwesomeIcon icon={faLocationDot} />
        <SearchInput 
          type="text" 
          placeholder="Enter your location" 
          value={cityName} 
          onChange={(e) => setCityName(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleClick();
            }
          }}
        />
        <SearchButton onClick={handleClick}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </SearchButton>
      </SearchBox>
      <NotFound display={error}>
        <img src={ErrorImage} alt="404" />
        <p>Oops! Invalid location.
        <br/>
        Check your location again</p>
      </NotFound>
      <WeatherBox display={weatherBox}>
        <img src={
          weather.weatherMain === "Clear" 
          ? `${ClearImage}`
          : weather.weatherMain === "Rain"
          ? `${RainImage}`
          : weather.weatherMain === "Snow"
          ? `${SnowImage}`
          : weather.weatherMain === "Clouds"
          ? `${CloudsImage}`
          : weather.weatherMain === "Mist"
          ? `${MistImage}`
          : ""
        } alt={
          weather.weatherMain === "Clear" 
          ? `${ClearImage}`
          : weather.weatherMain === "Rain"
          ? `${RainImage}`
          : weather.weatherMain === "Snow"
          ? `${SnowImage}`
          : weather.weatherMain === "Clouds"
          ? `${CloudsImage}`
          : weather.weatherMain === "Mist"
          ? `${MistImage}`
          : ""
        } />
        <WeatherBoxTemperature>{`${Math.floor(weather.temperature)}`}°C</WeatherBoxTemperature>
        <WeatherBoxDescription>{weather.description}</WeatherBoxDescription>
      </WeatherBox>
      <WeatherDetails display={weatherDetails}>
        <WeatherDetailsHumidity>
          <FontAwesomeIcon icon={faWater} />
          <div className="text">
            <span>{`${weather.humidity}%`}</span>
            <p>Humidity</p>
          </div>
        </WeatherDetailsHumidity>
        <WeatherDetailsWind>
          <i className="fa-solid fa-wind"></i>
          <FontAwesomeIcon icon={faWind} />
          <div className="text">
            <span>{`${weather.wind}Km/h`}</span>
            <p>Wind Speed</p>
          </div>
        </WeatherDetailsWind>
      </WeatherDetails>
    </Container>
  </Wrapper>
  );
};