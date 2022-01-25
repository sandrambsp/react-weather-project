import React from "react";

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
            <img
              className="current-icon"
              src="./images/{props.data.icon}{props.data.id}.svg"
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
                <span className="wind-speed">{props.data.wind}</span> km/h
              </li>
            </ul>
            <ul className="col-right">
              <li className="humid">
                <img src="./images/raindrop.svg" width="25px" alt="" />
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
