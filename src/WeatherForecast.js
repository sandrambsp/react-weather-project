import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon";
import ReactLoading from "react-loading";
import WeatherForecastDay from "./WeatherForecastDay";
import axios from "axios";

import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecastData, setForecastData] = useState(null);
  function handleResponse(response) {
    setForecastData(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast container ">
        <div className="col-sm-2 days">
          <WeatherForecastDay data={forecastData[0]} />
        </div>
      </div>
    );
  } else {
    const apiKey = "fc98cc0850552ccf4d2c0fb4439fee04";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

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
