import React from "react";
import "./WeatherDailyForecast.scss";

export default function WeatherDailyForecast(props) {
  return (
    <div className="WeatherDailyForecast_container">
      <p className="WeatherDailyForecast_date">
        {new Date(props.date).toLocaleDateString(undefined, {
          day: "numeric",
          month: "long",
        })}
      </p>

      <span className="WeatherDailyForecast_temperature">
        {props.temperature}
      </span>
      <img src={props.imgSrc} className="WeatherDailyForecast_weatherIcon" />
    </div>
  );
}
