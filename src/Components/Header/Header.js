import React, { useContext, useState } from "react";
import { WeatherContext } from "../../Context/WeatherContext/WeatherContext";
import SelectItem from "../../UI/SelectItem/SelectItem";
import "./Header.scss";

export default function Header() {
  const weather = useContext(WeatherContext);

  const [cityID, setCityID] = useState(328328);
  const [isSelectVisible, setIsSelectVisible] = useState(true);

  const suggestedCities = weather.Search.results.map((result) => {
    return (
      <SelectItem
        action={() => {
          setCityID(result.Key);
          weather.getCities(result.LocalizedName);
        }}
        name={result.Key}
        key={result.Key}
        header={result.LocalizedName}
        details={result.Country.LocalizedName}
      ></SelectItem>
    );
  });
  return (
    <div>
      <input
        autoComplete="off"
        type="text"
        name="city"
        list="cityname"
        value={weather.Search.string}
        onFocus={() => setIsSelectVisible(true)}
        onChange={(e) => weather.getCities(e.target.value)}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            setIsSelectVisible(false);
            console.log(weather.Search.results);
            weather.getCities(weather.Search.results[0].LocalizedName);
            weather.getWeather(weather.Search.results[0].Key);
          }
        }}
      />
      {isSelectVisible ? (
        <div className="header_selectContainer">{suggestedCities}</div>
      ) : null}
      <button
        onClick={() => {
          setIsSelectVisible(false);
          weather.getWeather(cityID);
        }}
      >
        search
      </button>
      {/* Header {weather.name}{" "}
      {weather.getCelsiusFromKelvin(weather.main.temp, true)} */}
    </div>
  );
}
