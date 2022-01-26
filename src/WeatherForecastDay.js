import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}º`;
  }
  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}º`;
  }
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    return days[day];
  }

  return (
    <span className="WeatherForecastDay">
      <h6 className="forecast-day">{day()}</h6>
      <p className="forecast-temp">
        <span className="min-temp">{minTemperature()}</span>
        {"  "}
        <span className="max-temp">{maxTemperature()}</span>
      </p>
      <WeatherIcon code={props.data.weather[0].icon} width="40px" />
    </span>
  );
}
