import React, { useContext } from "react";
import { WeatherContext } from "../../Context/WeatherContext/WeatherContext";
import "./Header.scss";

export default function Header() {
  const weather = useContext(WeatherContext);
  const suggestedCities = weather.Search.results.map((result) => {
    return (
      <option name={result.Key} key={result.Key} value={result.LocalizedName}>
        {result.Country.LocalizedName}
      </option>
    );
  });
  return (
    <div>
      <input
        type="text"
        name="city"
        list="cityname"
        value={weather.Search.text}
        onChange={weather.getCities}
      />
      <datalist id="cityname">{suggestedCities}</datalist>
      <button onClick={weather.getWeather}>search</button>
      {/* Header {weather.name}{" "}
      {weather.getCelsiusFromKelvin(weather.main.temp, true)} */}
    </div>
  );
}
