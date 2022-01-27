import React from "react";
import WeatherIcon from "./WeatherIcon";
import ReactCountryFlag from "react-country-flag";

import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  let hoursSunrise = props.data.sunrise.getHours();
  if (hoursSunrise < 10) {
    hoursSunrise = `0${hoursSunrise}`;
  }
  let minutesSunrise = props.data.sunrise.getMinutes();
  if (minutesSunrise < 10) {
    minutesSunrise = `0${minutesSunrise}`;
  }
  let hoursSunset = props.data.sunset.getHours();
  if (hoursSunset < 10) {
    hoursSunset = `0${hoursSunset}`;
  }
  let minutesSunset = props.data.sunset.getMinutes();
  if (minutesSunset < 10) {
    minutesSunset = `0${minutesSunset}`;
  }
  return (
    <div className="WeatherInfo">
      <div className="container-currently">
        <div className="row align-items-center">
          <div className="col-sm-4">
            <ul>
              <li className="city">
                <h2 className="current-city">
                  {props.data.city}{" "}
                  <ReactCountryFlag
                    countryCode={props.data.country}
                    svg
                    style={{
                      width: "35px",
                      height: "35px",
                    }}
                    className="ms-1"
                  />
                </h2>
              </li>
              <li>
                <p>
                  <span className="description">{props.data.description}</span>
                </p>
              </li>
              <li>
                <h3 className="WeatherTemperature">
                  <span className="temperature">{props.data.temperature}</span>
                  <span className="units">ºC</span>
                </h3>
              </li>
            </ul>
          </div>
          <div className="col-sm-4">
            <WeatherIcon
              code={props.data.icon}
              alt={props.data.description}
              width="150px"
            />
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
        <div className="row align-items-center">
          <div className="d-flex justify-content-center daylightTime">
            <div className="sunrise">
              <img
                src="https://basmilius.github.io/weather-icons/production/fill/all/sunrise.svg"
                width="40px"
                alt="sunrise icon"
              />
              <div>
                {hoursSunrise}:{minutesSunrise}
              </div>
            </div>
            <div className="sunset">
              <img
                src="https://basmilius.github.io/weather-icons/production/fill/all/sunset.svg"
                width="40px"
                alt="sunset icon"
              />
              <div>
                {hoursSunset}:{minutesSunset}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
