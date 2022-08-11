import React, { useReducer } from "react";
import axios from "axios";
import { WeatherReducer } from "./WeatherReducer";
import { WeatherContext } from "./WeatherContext";
import { GET_WEATHER } from "../types";

const API_KEY = process.env.REACT_APP_ACCUWEATHER_API_KEY;

export const WeatherState = ({ children }) => {
  const initialState = {
    Headline: {
      EffectiveDate: "2022-08-11T08:00:00+01:00",
      EffectiveEpochDate: 1660201200,
      Severity: 5,
      Text: "Possible danger of dehydration and heat stroke while doing strenuous activities Thursday",
      Category: "heat",
      EndDate: "2022-08-11T20:00:00+01:00",
      EndEpochDate: 1660244400,
      MobileLink:
        "http://www.accuweather.com/en/gb/london/ec4a-2/daily-weather-forecast/328328?lang=en-us",
      Link: "http://www.accuweather.com/en/gb/london/ec4a-2/daily-weather-forecast/328328?lang=en-us",
    },
    DailyForecasts: [
      {
        Date: "2022-08-10T07:00:00+01:00",
        EpochDate: 1660111200,
        Temperature: {
          Minimum: { Value: 62, Unit: "F", UnitType: 18 },
          Maximum: { Value: 83, Unit: "F", UnitType: 18 },
        },
        Day: { Icon: 1, IconPhrase: "Sunny", HasPrecipitation: false },
        Night: { Icon: 33, IconPhrase: "Clear", HasPrecipitation: false },
        Sources: ["AccuWeather"],
        MobileLink:
          "http://www.accuweather.com/en/gb/london/ec4a-2/daily-weather-forecast/328328?day=1&lang=en-us",
        Link: "http://www.accuweather.com/en/gb/london/ec4a-2/daily-weather-forecast/328328?day=1&lang=en-us",
      },
    ],
  };

  const [state, dispatch] = useReducer(WeatherReducer, initialState);
  const getWeather = async () => {
    console.log(localStorage.getItem("expirationDate"), "expirationDate");
    let data = {};
    let localStorageExpDate = Date.parse(
      localStorage.getItem("expirationDate")
    );
    if (isNaN(localStorageExpDate) || localStorageExpDate < new Date()) {
      console.log("new data");
      const response = await axios.get(
        "http://dataservice.accuweather.com/forecasts/v1/daily/5day/328328?language=en-gb&metric=true&details=true&apikey=" +
          API_KEY
      );
      data = response.data;

      localStorage.setItem("Weather", JSON.stringify(data));
      const expiresIn = 3600000;
      const expirationDate = new Date(new Date().getTime() + expiresIn);
      localStorage.setItem("expirationDate", expirationDate);
      console.log(localStorage.getItem("expirationDate"), "expirationDate");
    } else {
      console.log("From local storage");
      data = JSON.parse(localStorage.getItem("Weather"));
    }
    dispatch({
      type: GET_WEATHER,
      payload: { ...data },
    });
  };

  const getCelsiusFromKelvin = (temp, string = false) => {
    if (string) {
      return (temp - 273.15).toFixed(1) + "°C";
    } else {
      return (temp - 273.15).toFixed(1);
    }
  };
  const getFahrenheitFromKelvin = (temp) => {
    return (((temp - 273.15) * 9) / 5 + 32).toFixed(1);
  };
  return (
    <WeatherContext.Provider
      value={{
        ...state,
        getWeather,
        getCelsiusFromKelvin,
        getFahrenheitFromKelvin,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};
