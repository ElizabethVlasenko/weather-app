import React, { useReducer } from "react";
import axios from "axios";
import { WeatherReducer } from "./WeatherReducer";
import { WeatherContext } from "./WeatherContext";
import { GET_WEATHER } from "../types";

const API_KEY = process.env.REACT_APP_API_KEY;

export const WeatherState = ({ children }) => {
  const initialState = {};

  const [state, dispatch] = useReducer(WeatherReducer, initialState);

  const getWeather = () => {
    let data = {}
    let localStorageExpDate = Date.parse(
        localStorage.getItem("expirationDate")
      );
      if (isNaN(localStorageExpDate) || localStorageExpDate < new Date()) {
    const response = await axios.get(
        "" +
          API_KEY
      );
      data = response.data;
      localStorage.setItem("Weather", JSON.stringify(data));
      const expiresIn = 3600000;
      const expirationDate = new Date(new Date().getTime() + expiresIn);
      localStorage.setItem("expirationDate", expirationDate);
    } else {
        data = JSON.parse(localStorage.getItem("Weather"))
    }
    dispatch({
      type: GET_WEATHER,
      payload: { data },
    });
  };

  return (
    <WeatherContext.Provider
      value={{
        state,
        getWeather,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};
