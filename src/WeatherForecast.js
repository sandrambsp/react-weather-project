import React from "react";
import WeatherIcon from "./WeatherIcon";

import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {}

  const apiKey = "fc98cc0850552ccf4d2c0fb4439fee04";
  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="WeatherForecast container ">
      <div className="col-sm-2 days">
        <h6 className="forecast-day">Tuesday</h6>
        <p className="forecast-temp">
          <span className="min-temp">5º</span>
          {"  "}
          <span className="max-temp">11º</span>
        </p>
        <WeatherIcon code="01d" width="40px" />
      </div>
    </div>
  );
}
