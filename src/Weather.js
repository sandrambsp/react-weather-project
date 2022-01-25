import React, { useState } from "react";
import Footer from "./Footer";
import Today from "./Today";
import axios from "axios";

import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      date: new Date(response.data.dt * 1000),
      temperature: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      wind: Math.round(response.data.wind.speed),
      humidity: response.data.main.humidity,
      city: response.data.name,
      icon: response.data.weather[0].icon,
      id: response.data.weather[0].id,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="card">
          <div className="shadow-lg rounded">
            <div className="card-body">
              <div className="container-search">
                <form className="city-form">
                  <input
                    type="button"
                    className="current-location"
                    value="📍"
                  />
                  <input
                    type="search"
                    className="city-input"
                    placeholder="Search for a city"
                  />
                  <input type="submit" value="Search" />
                </form>
              </div>
              <div>
                <p>
                  Last updated: <Today date={weatherData.date} />
                </p>
              </div>
              <div className="container-currently">
                <div className="row align-items-center">
                  <div className="col-sm-4">
                    <ul>
                      <li className="city">
                        <h2 className="current-city">{weatherData.city}</h2>
                      </li>
                      <li>
                        <p>
                          <span className="description">
                            {weatherData.description}
                          </span>
                        </p>
                      </li>
                      <li>
                        <h3>
                          <span className="temperature">
                            {weatherData.temperature}
                          </span>
                          <span className="units">ºC</span>
                        </h3>
                      </li>
                    </ul>
                  </div>
                  <div className="col-sm-4">
                    <img
                      className="current-icon"
                      src="./images/{weatherData.icon}{weatherData.id}.svg"
                      width="120px"
                      alt=""
                    />
                  </div>
                  <div className="col-sm-4">
                    <ul className="col-right">
                      <li className="wind">
                        <img src="./images/wind.svg" width="25px" alt="" />
                      </li>
                      <li className="wind">
                        <span className="wind-speed">{weatherData.wind}</span>{" "}
                        km/h
                      </li>
                    </ul>
                    <ul className="col-right">
                      <li className="humid">
                        <img src="./images/raindrop.svg" width="25px" alt="" />
                      </li>
                      <li className="humid">
                        <span className="humidity">{weatherData.humidity}</span>
                        %
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="container forecast"></div>
              <Footer />
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "fc98cc0850552ccf4d2c0fb4439fee04";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
