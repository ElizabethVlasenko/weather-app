import React from "react";
import "./MainInfo.scss";

export default function WeatherMain(props) {
  return (
    <div className="weatherMain_container">
      <h1 className="weatherMain_header">{props.name}</h1>
      <img className="weatherMain_weatherIcon" src={props.imgSrc} />
      <h2 className="weatherMain_temperature">{props.temp}</h2>
      <h3 className="weatherMain_weatherDescription">{props.description}</h3>
      <div className="weatherMain_temperatureContainer">
        <div className="weatherMain_temperatureDifference weatherMain_day">
          Day <br />
          {props.temp_max}
        </div>
        <div className="weatherMain_temperatureDifference weatherMain_night">
          Night <br />
          {props.temp_min}
        </div>
      </div>
    </div>
  );
}
