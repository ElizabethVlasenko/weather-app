import React, { useContext, useEffect, useState } from "react";
import "./WeatherForecast.scss";
import { WeatherContext } from "../../Context/WeatherContext/WeatherContext";
import { ReactComponent as Logo } from "../../assets/sun.svg";
import WeatherMain from "./WeatherMain/WeatherMain";

export default function WeatherForecast() {
  const weather = useContext(WeatherContext);
  const weatherImg =
    weather.weather[0].description !== ""
      ? weather.weather[0].description.replace(" ", "_")
      : "clear_sky";

  const UTCTime = Date.parse(new Date().toUTCString().slice(0, -4));

  const [time, setTime] = useState(new Date(UTCTime + weather.timezone));
  console.log(UTCTime, time);
  useEffect(() => {
    const interval = setInterval(() => {
      const UTCTime = Date.parse(new Date().toUTCString().slice(0, -4));
      setTime(new Date(UTCTime + weather.timezone));
    }, 60000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <div className={"weatherForecast_container " + weatherImg}>
        <p>WeatherForecast</p>
        <button onClick={weather.getWeather}>Weather</button>
        <button onClick={() => localStorage.removeItem("expirationDate")}>
          remove expirationDate
        </button>
        <p>{JSON.stringify(weather)}</p>
        <p>
          Current time{" "}
          {time.getHours() +
            ":" +
            (time.getMinutes() < 10
              ? "0" + time.getMinutes()
              : time.getMinutes())}
        </p>

        {UTCTime > weather.sys.sunrise && UTCTime < weather.sys.sunset ? (
          <Logo />
        ) : null}
        <WeatherMain
          name={weather.name}
          temp={weather.getCelsiusFromKelvin(weather.main.temp, true)}
          temp_max={weather.getCelsiusFromKelvin(weather.main.temp_max, true)}
          temp_min={weather.getCelsiusFromKelvin(weather.main.temp_min, true)}
          description={weather.weather[0].description}
        ></WeatherMain>
      </div>
    </div>
  );
}
