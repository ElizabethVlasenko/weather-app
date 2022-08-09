import React from "react";
import "./MainInfo.scss";

export default function WeatherMain(props) {
  return (
    <div className="weatherMain_container">
      <h1 className="weatherMain_header">{props.name}</h1>
      <img
        className="weatherMain_weatherIcon"
        src="http://openweathermap.org/img/wn/10d@2x.png"
      />
      <h2 className="weatherMain_temperature">{props.temp}</h2>
      <h3 className="weatherMain_weatherDescription">{props.description}</h3>
      <div className="weatherMain_temperatureContainer">
        <span className="weatherMain_temperatureDifference weatherMain_day">
          Day {props.temp_max}
        </span>
        <span className="weatherMain_temperatureDifference weatherMain_night">
          Night {props.temp_min}
        </span>
      </div>
    </div>
  );
}
