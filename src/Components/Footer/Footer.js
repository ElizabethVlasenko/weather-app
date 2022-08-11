import React from "react";
import "./Footer.scss";
import AccuWeather from "../../assets/AW_REGISTERED_Horiz_Transparent_Logo.png";

export default function Footer() {
  return (
    <div>
      <p>Weather API</p>
      <a href="http://www.accuweather.com" target="_blank" rel="noreferrer">
        <img src={AccuWeather} width="120px" alt="AccuWeather logo" />
      </a>
    </div>
  );
}
