import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <h3 className="WeatherTemperature">
        <span className="temperature">{props.celsius}</span>
        <span className="units">
          ºC |{" "}
          <a href="/" onClick={showFahrenheit}>
            ºF
          </a>
        </span>
      </h3>
    );
  } else {
    let fahrenheitTemperature = Math.round((props.celsius * 9) / 5 + 32);
    return (
      <h3 className="WeatherTemperature">
        <span className="temperature">{fahrenheitTemperature}</span>
        <span className="units">
          ºF |{" "}
          <a href="/" onClick={showCelsius}>
            ºC
          </a>{" "}
        </span>
      </h3>
    );
  }
}
