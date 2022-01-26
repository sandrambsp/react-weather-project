import React, { useState, useEffect, useLayoutEffect } from "react";
import ReactLoading from "react-loading";
import WeatherForecastDay from "./WeatherForecastDay";
import axios from "axios";

import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecastData, setForecastData] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  function handleResponse(response) {
    setForecastData(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast container ">
        <div className="row">
          {forecastData.map(function (dailyForecast, index) {
            if (index > 0 && index < 7) {
              return (
                <div className="col-sm-2 days" key={index}>
                  <WeatherForecastDay data={dailyForecast} />
                </div>
              );
            }
          })}
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
