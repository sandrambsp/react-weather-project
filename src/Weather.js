import React from "react";

import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="card">
        <div className="shadow-lg rounded">
          <div className="card-body">
            <div className="container-search">
              <form className="city-form">
                <input type="button" className="current-location" value="📍" />
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
                Last updated: Monday 13:00 <span className="today"></span>
              </p>
            </div>
            <div className="container-currently">
              <div className="row align-items-center">
                <div className="col-sm-4">
                  <ul>
                    <li className="city">
                      <h2 className="current-city">Porto</h2>
                    </li>
                    <li>
                      <p>
                        <span className="description">Clear Sky</span>
                      </p>
                    </li>
                    <li>
                      <h3>
                        <span className="temperature">8</span>
                        <span className="units">ºC</span>
                      </h3>
                    </li>
                  </ul>
                </div>
                <div className="col-sm-4">
                  <img className="current-icon" src="" width="120px" alt="" />
                </div>
                <div className="col-sm-4">
                  <ul className="col-right">
                    <li className="wind">
                      <img src="images/wind.svg" width="25px" alt="" />
                    </li>
                    <li className="wind">
                      <span className="wind-speed">10</span> km/h
                    </li>
                  </ul>
                  <ul className="col-right">
                    <li className="humid">
                      <img src="images/raindrop.svg" width="25px" alt="" />
                    </li>
                    <li className="humid">
                      <span className="humidity">48</span>%
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="container forecast"></div>
            <div className="signature">
              <a
                href="https://github.com/sandrambsp/Weather-App"
                target="_blank"
                rel="noreferrer"
              >
                Open-source code
              </a>{" "}
              by Sandra Pereira
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
