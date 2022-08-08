import React, { useReducer } from "react";
import axios from "axios";
import { WeatherReducer } from "./WeatherReducer";
import { WeatherContext } from "./WeatherContext";
import { GET_WEATHER } from "../types";

const API_KEY = process.env.REACT_APP_API_KEY;

export const WeatherState = ({ children }) => {
  const initialState = {
    coord: {
      lon: 0,
      lat: 0,
    },
    weather: [
      {
        id: 800,
        main: "",
        description: "",
        icon: "",
      },
    ],
    base: "stations",
    main: {
      temp: 0,
      feels_like: 0,
      temp_min: 0,
      temp_max: 0,
      pressure: 0,
      humidity: 0,
    },
    visibility: 1,
    wind: {
      speed: 0,
      deg: 0,
    },
    clouds: {
      all: 1,
    },
    dt: 0,
    sys: {
      type: 1,
      id: 1,
      message: 0,
      country: "",
      sunrise: 0,
      sunset: 0,
    },
    timezone: 0,
    id: 0,
    name: "",
    cod: 200,
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
        "https://api.openweathermap.org/data/2.5/weather?q=London&appid=" +
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

  const getCelsiusFromKelvin = (temp) => {
    return temp - 273.15;
  };
  const getFahrenheitFromKelvin = (temp) => {
    return ((temp - 273.15) * 9) / 5 + 32;
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
