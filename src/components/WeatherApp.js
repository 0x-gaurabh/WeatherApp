import React, { useState } from "react";
import "./WeatherApp.css";
import search_icon from "../Assests/search.png";
import clear_icon from "../Assests/clear.png";
import cloud_icon from "../Assests/cloud.png";
import drizzle_icon from "../Assests/drizzle.png";
import rain_icon from "../Assests/rain.png";
import snow_icon from "../Assests/snow.png";
import wind_icon from "../Assests/wind.png";
import humidity_icon from "../Assests/humidity.png";

const WeatherApp = () => {
  const [icon, seticon] = useState(clear_icon);
  let api_key = "4398f2d928840a115a42280d9cc2ab3f";

  const search = async () => {
    const element = document.getElementsByClassName("cityInput");
    if (element[0].value === "") {
      return 0;
    }
    else{
      try {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`;
        let response = await fetch(url);
        let data = await response.json();
        console.log(data);
  
        const humidity = document.getElementsByClassName("humidity-percent");
        const wind = document.getElementsByClassName("wind-speed");
        const temperature = document.getElementsByClassName("weather-temp");
        const location = document.getElementsByClassName("weather-location");
  
        humidity[0].innerHTML = data.main.humidity + " %";
        wind[0].innerHTML = data.wind.speed + " km/h";
        temperature[0].innerHTML = data.main.temp + " c°";
        location[0].innerHTML = data.name;
  
        if (data.weather[0].icon === "01d" || data.weather[0].icon === "01n") {
          seticon(clear_icon);
        } else if (
          data.weather[0].icon === "02d" ||
          data.weather[0].icon === "02n"
        ) {
          seticon(cloud_icon);
        } else if (
          data.weather[0].icon === "03d" ||
          data.weather[0].icon === "03n"
        ) {
          seticon(drizzle_icon);
        } else if (
          data.weather[0].icon === "04d" ||
          data.weather[0].icon === "04n"
        ) {
          seticon(drizzle_icon);
        } else if (
          data.weather[0].icon === "09d" ||
          data.weather[0].icon === "09n"
        ) {
          seticon(rain_icon);
        } else if (
          data.weather[0].icon === "10d" ||
          data.weather[0].icon === "10n"
        ) {
          seticon(rain_icon);
        } else if (
          data.weather[0].icon === "13d" ||
          data.weather[0].icon === "13n"
        ) {
          seticon(snow_icon);
        } else {
          seticon(clear_icon);
        }
      } catch {
        alert("Wrong name");
      }
    }
  };

  return (
    <div className="container">
      <h1>Weather App</h1>
      <div className="top-bar">
        <input type="text" className="cityInput" placeholder="search" />
        <div className="search-icon" onClick={search}>
          <img src={search_icon} alt="Something went wrong" />
        </div>
      </div>

      <div className="weather-image">
        <img src={icon} />
      </div>
      <div className="weather-temp">24°</div>
      <div className="weather-location">London</div>

      <div className="data-container">
        <div className="element">
          <img src={humidity_icon} className="icon" />
          <div className="data">
            <div className="humidity-percent">64%</div>
            <div className="text">Humidity</div>
          </div>
        </div>
        <div className="element">
          <img src={wind_icon} className="icon" />
          <div className="data">
            <div className="wind-speed">18 km/h</div>
            <div className="text">Wind Speed</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherApp;
