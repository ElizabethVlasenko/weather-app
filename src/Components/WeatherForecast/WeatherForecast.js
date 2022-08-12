import React, { useContext, useEffect, useState } from "react";
import "./WeatherForecast.scss";
import { WeatherContext } from "../../Context/WeatherContext/WeatherContext";
//import { ReactComponent as Logo } from "../../assets/sun.svg";
import WeatherMain from "./WeatherMain/WeatherMain";
import WeatherDailyForecast from "./WeatherDailyForecast/WeatherDailyForecast";

export default function WeatherForecast() {
  const weather = useContext(WeatherContext);

  let weatherFor5Days = [];
  for (let i = 1; i < weather.DailyForecasts.length; i++) {
    weatherFor5Days.push(
      <WeatherDailyForecast
        key={i}
        date={weather.DailyForecasts[i].Date}
        temperature={
          weather.DailyForecasts[i].Temperature.Maximum.Value +
          "°" +
          weather.DailyForecasts[i].Temperature.Maximum.Unit
        }
        imgSrc={`https://developer.accuweather.com/sites/default/files/${
          weather.DailyForecasts[i].Day.Icon < 10
            ? "0" + weather.DailyForecasts[i].Day.Icon
            : weather.DailyForecasts[i].Day.Icon
        }-s.png`}
      />
    );
  }
  console.log(weatherFor5Days);
  // const weatherImg =
  //   weather.weather[0].description !== ""
  //     ? weather.weather[0].description.replace(" ", "_")
  //     : "clear_sky";

  // const UTCTime = Date.parse(new Date().toUTCString().slice(0, -4));

  // const [time, setTime] = useState(new Date(UTCTime + weather.timezone));
  // console.log(UTCTime, time);
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     const UTCTime = Date.parse(new Date().toUTCString().slice(0, -4));
  //     setTime(new Date(UTCTime + weather.timezone));
  //   }, 60000);
  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, []);

  return (
    <div>
      <div className={"weatherForecast_container "}>
        <p>WeatherForecast</p>
        <button onClick={weather.getWeather}>Weather</button>
        <button onClick={() => localStorage.removeItem("expirationDate")}>
          remove expirationDate
        </button>

        {/* <pre>{JSON.stringify(weather, null, "\t")}</pre> */}
        {/* <p>
          Current time{" "}
          {time.getHours() +
            ":" +
            (time.getMinutes() < 10
              ? "0" + time.getMinutes()
              : time.getMinutes())}
        </p> */}
        {/* 
        {UTCTime > weather.sys.sunrise && UTCTime < weather.sys.sunset ? (
          <Logo />
        ) : null} */}
        <div className="weatherForecast_5daysContainer">
          <WeatherMain
            name={weather.Search}
            temp={
              weather.DailyForecasts[0].Temperature.Metric.Value +
              "°" +
              weather.DailyForecasts[0].Temperature.Metric.Unit
            }
            temp_max={
              weather.DailyForecasts[1].Temperature.Maximum.Value +
              "°" +
              weather.DailyForecasts[1].Temperature.Maximum.Unit
            }
            temp_min={
              weather.DailyForecasts[1].Temperature.Minimum.Value +
              "°" +
              weather.DailyForecasts[1].Temperature.Minimum.Unit
            }
            description={weather.DailyForecasts[0].WeatherText}
            imgSrc={`https://developer.accuweather.com/sites/default/files/${
              weather.DailyForecasts[0].WeatherIcon < 10
                ? "0" + weather.DailyForecasts[0].WeatherIcon
                : weather.DailyForecasts[0].WeatherIcon
            }-s.png`}
          ></WeatherMain>
          {weatherFor5Days}
        </div>
      </div>
    </div>
  );
}
