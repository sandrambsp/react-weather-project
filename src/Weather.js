import React, { useState } from "react";
import Footer from "./Footer";
import Today from "./Today";
import WeatherInfo from "./WeatherInfo";
import ReactLoading from "react-loading";
import WeatherForecast from "./WeatherForecast";
import axios from "axios";

import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      date: new Date(response.data.dt * 1000),
      temperature: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      wind: Math.round(response.data.wind.speed),
      humidity: response.data.main.humidity,
      city: response.data.name,
      icon: response.data.weather[0].icon,
    });
  }

  function search() {
    const apiKey = "fc98cc0850552ccf4d2c0fb4439fee04";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="card">
          <div className="shadow-lg rounded">
            <div className="card-body">
              <div className="container-search">
                <form className="city-form" onSubmit={handleSubmit}>
                  <input
                    type="button"
                    className="current-location"
                    value="📍"
                  />
                  <input
                    type="search"
                    className="city-input"
                    placeholder="Search for a city"
                    autoFocus="on"
                    onChange={updateCity}
                  />
                  <input type="submit" value="Search" />
                </form>
              </div>
              <div>
                <p>
                  Last updated: <Today date={weatherData.date} />
                </p>
              </div>
              <WeatherInfo data={weatherData} />
              <WeatherForecast coordinates={weatherData.coordinates} />
              <Footer />
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return (
      <ReactLoading
        type="spinningBubbles"
        color="black"
        height="50px"
        width="50px"
      />
    );
  }
}
