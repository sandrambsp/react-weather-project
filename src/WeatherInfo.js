import React from "react";
import WeatherIcon from "./WeatherIcon";

import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="container-currently">
        <div className="row align-items-center">
          <div className="col-sm-4">
            <ul>
              <li className="city">
                <h2 className="current-city">{props.data.city}</h2>
              </li>
              <li>
                <p>
                  <span className="description">{props.data.description}</span>
                </p>
              </li>
              <li>
                <h3>
                  <span className="temperature">{props.data.temperature}</span>
                  <span className="units">ºC</span>
                </h3>
              </li>
            </ul>
          </div>
          <div className="col-sm-4">
            <WeatherIcon code={props.data.icon} alt={props.data.description} />
          </div>
          <div className="col-sm-4">
            <ul className="col-right">
              <li className="wind">
                <img
                  src="https://basmilius.github.io/weather-icons/production/fill/all/wind.svg"
                  width="40px"
                  alt="wind icon"
                />
              </li>
              <li className="wind">
                <span className="wind-speed">{props.data.wind}</span> km/h
              </li>
            </ul>
            <ul className="col-right">
              <li className="humid">
                <img
                  src="https://basmilius.github.io/weather-icons/production/fill/all/raindrop.svg"
                  width="40px"
                  alt="humidity icon"
                />
              </li>
              <li className="humid">
                <span className="humidity">{props.data.humidity}</span>%
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
