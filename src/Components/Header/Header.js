import React, { useContext } from "react";
import { WeatherContext } from "../../Context/WeatherContext/WeatherContext";
import "./Header.scss";

export default function Header() {
  const weather = useContext(WeatherContext);
  return (
    <div>
      {/* Header {weather.name}{" "}
      {weather.getCelsiusFromKelvin(weather.main.temp, true)} */}
    </div>
  );
}
