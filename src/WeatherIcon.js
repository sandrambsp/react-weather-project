import React from "react";

export default function WeatherIcon(props) {
  const codeMapping = {
    "01d": "clear-day",
    "01n": "clear-night",
    "02d": "partly-cloudy-day",
    "02n": "partly-cloudy-night",
    "03d": "cloudy",
    "03n": "cloudy",
    "04d": "overcast",
    "04n": "overcast-night",
    "09d": "drizzle",
    "09n": "drizzle",
    "10d": "rain",
    "10n": "rain",
    "11d": "thunderstorms",
    "11n": "thunderstorms-night",
    "13d": "snow",
    "13n": "snow",
    "50d": "mist",
    "50n": "mist",
  };

  let icon = codeMapping[props.code];
  let iconUrl = `https://basmilius.github.io/weather-icons/production/fill/all/${icon}.svg`;

  return <img src={iconUrl} alt={props.alt} width="180px" />;
}
