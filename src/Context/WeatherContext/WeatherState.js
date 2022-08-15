import React, { useReducer } from "react";
import axios from "axios";
import { WeatherReducer } from "./WeatherReducer";
import { WeatherContext } from "./WeatherContext";
import { GET_WEATHER, GET_CITIES } from "../types";

const API_KEY = process.env.REACT_APP_ACCUWEATHER_API_KEY;

export const WeatherState = ({ children }) => {
  const initialState = {
    Search: { string: "", results: [] },
    Info: {
      City: "London",
    },
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
        LocalObservationDateTime: "2022-08-11T11:27:00+01:00",
        EpochTime: 1660213620,
        WeatherText: "Sunny",
        WeatherIcon: 1,
        HasPrecipitation: false,
        PrecipitationType: null,
        IsDayTime: true,
        Temperature: {
          Metric: {
            Value: 28,
            Unit: "C",
            UnitType: 17,
          },
          Imperial: {
            Value: 82,
            Unit: "F",
            UnitType: 18,
          },
        },
        RealFeelTemperature: {
          Metric: {
            Value: 31,
            Unit: "C",
            UnitType: 17,
            Phrase: "Very Warm",
          },
          Imperial: {
            Value: 88,
            Unit: "F",
            UnitType: 18,
            Phrase: "Very Warm",
          },
        },
        RealFeelTemperatureShade: {
          Metric: {
            Value: 26.9,
            Unit: "C",
            UnitType: 17,
            Phrase: "Very Warm",
          },
          Imperial: {
            Value: 80,
            Unit: "F",
            UnitType: 18,
            Phrase: "Pleasant",
          },
        },
        RelativeHumidity: 48,
        IndoorRelativeHumidity: 48,
        DewPoint: {
          Metric: {
            Value: 16.1,
            Unit: "C",
            UnitType: 17,
          },
          Imperial: {
            Value: 61,
            Unit: "F",
            UnitType: 18,
          },
        },
        Wind: {
          Direction: {
            Degrees: 68,
            Localized: "ENE",
            English: "ENE",
          },
          Speed: {
            Metric: {
              Value: 9.8,
              Unit: "km/h",
              UnitType: 7,
            },
            Imperial: {
              Value: 6.1,
              Unit: "mi/h",
              UnitType: 9,
            },
          },
        },
        WindGust: {
          Speed: {
            Metric: {
              Value: 20.5,
              Unit: "km/h",
              UnitType: 7,
            },
            Imperial: {
              Value: 12.7,
              Unit: "mi/h",
              UnitType: 9,
            },
          },
        },
        UVIndex: 5,
        UVIndexText: "Moderate",
        Visibility: {
          Metric: {
            Value: 16.1,
            Unit: "km",
            UnitType: 6,
          },
          Imperial: {
            Value: 10,
            Unit: "mi",
            UnitType: 2,
          },
        },
        ObstructionsToVisibility: "",
        CloudCover: 0,
        Ceiling: {
          Metric: {
            Value: 12192,
            Unit: "m",
            UnitType: 5,
          },
          Imperial: {
            Value: 40000,
            Unit: "ft",
            UnitType: 0,
          },
        },
        Pressure: {
          Metric: {
            Value: 1022,
            Unit: "mb",
            UnitType: 14,
          },
          Imperial: {
            Value: 30.18,
            Unit: "inHg",
            UnitType: 12,
          },
        },
        PressureTendency: {
          LocalizedText: "Falling",
          Code: "F",
        },
        Past24HourTemperatureDeparture: {
          Metric: {
            Value: 2.5,
            Unit: "C",
            UnitType: 17,
          },
          Imperial: {
            Value: 4,
            Unit: "F",
            UnitType: 18,
          },
        },
        ApparentTemperature: {
          Metric: {
            Value: 28.3,
            Unit: "C",
            UnitType: 17,
          },
          Imperial: {
            Value: 83,
            Unit: "F",
            UnitType: 18,
          },
        },
        WindChillTemperature: {
          Metric: {
            Value: 27.8,
            Unit: "C",
            UnitType: 17,
          },
          Imperial: {
            Value: 82,
            Unit: "F",
            UnitType: 18,
          },
        },
        WetBulbTemperature: {
          Metric: {
            Value: 20.1,
            Unit: "C",
            UnitType: 17,
          },
          Imperial: {
            Value: 68,
            Unit: "F",
            UnitType: 18,
          },
        },
        Precip1hr: {
          Metric: {
            Value: 0,
            Unit: "mm",
            UnitType: 3,
          },
          Imperial: {
            Value: 0,
            Unit: "in",
            UnitType: 1,
          },
        },
        PrecipitationSummary: {
          Precipitation: {
            Metric: {
              Value: 0,
              Unit: "mm",
              UnitType: 3,
            },
            Imperial: {
              Value: 0,
              Unit: "in",
              UnitType: 1,
            },
          },
          PastHour: {
            Metric: {
              Value: 0,
              Unit: "mm",
              UnitType: 3,
            },
            Imperial: {
              Value: 0,
              Unit: "in",
              UnitType: 1,
            },
          },
          Past3Hours: {
            Metric: {
              Value: 0,
              Unit: "mm",
              UnitType: 3,
            },
            Imperial: {
              Value: 0,
              Unit: "in",
              UnitType: 1,
            },
          },
          Past6Hours: {
            Metric: {
              Value: 0,
              Unit: "mm",
              UnitType: 3,
            },
            Imperial: {
              Value: 0,
              Unit: "in",
              UnitType: 1,
            },
          },
          Past9Hours: {
            Metric: {
              Value: 0,
              Unit: "mm",
              UnitType: 3,
            },
            Imperial: {
              Value: 0,
              Unit: "in",
              UnitType: 1,
            },
          },
          Past12Hours: {
            Metric: {
              Value: 0,
              Unit: "mm",
              UnitType: 3,
            },
            Imperial: {
              Value: 0,
              Unit: "in",
              UnitType: 1,
            },
          },
          Past18Hours: {
            Metric: {
              Value: 0,
              Unit: "mm",
              UnitType: 3,
            },
            Imperial: {
              Value: 0,
              Unit: "in",
              UnitType: 1,
            },
          },
          Past24Hours: {
            Metric: {
              Value: 0,
              Unit: "mm",
              UnitType: 3,
            },
            Imperial: {
              Value: 0,
              Unit: "in",
              UnitType: 1,
            },
          },
        },
        TemperatureSummary: {
          Past6HourRange: {
            Minimum: {
              Metric: {
                Value: 16.7,
                Unit: "C",
                UnitType: 17,
              },
              Imperial: {
                Value: 62,
                Unit: "F",
                UnitType: 18,
              },
            },
            Maximum: {
              Metric: {
                Value: 28,
                Unit: "C",
                UnitType: 17,
              },
              Imperial: {
                Value: 82,
                Unit: "F",
                UnitType: 18,
              },
            },
          },
          Past12HourRange: {
            Minimum: {
              Metric: {
                Value: 16.7,
                Unit: "C",
                UnitType: 17,
              },
              Imperial: {
                Value: 62,
                Unit: "F",
                UnitType: 18,
              },
            },
            Maximum: {
              Metric: {
                Value: 28,
                Unit: "C",
                UnitType: 17,
              },
              Imperial: {
                Value: 82,
                Unit: "F",
                UnitType: 18,
              },
            },
          },
          Past24HourRange: {
            Minimum: {
              Metric: {
                Value: 16.7,
                Unit: "C",
                UnitType: 17,
              },
              Imperial: {
                Value: 62,
                Unit: "F",
                UnitType: 18,
              },
            },
            Maximum: {
              Metric: {
                Value: 29.7,
                Unit: "C",
                UnitType: 17,
              },
              Imperial: {
                Value: 85,
                Unit: "F",
                UnitType: 18,
              },
            },
          },
        },
        MobileLink:
          "http://www.accuweather.com/en/gb/london/ec4a-2/current-weather/328328?lang=en-gb",
        Link: "http://www.accuweather.com/en/gb/london/ec4a-2/current-weather/328328?lang=en-gb",
      },
      {
        Date: "2022-08-10T07:00:00+01:00",
        EpochDate: 1660111200,
        Temperature: {
          Minimum: { Value: 15, Unit: "C", UnitType: 18 },
          Maximum: { Value: 26, Unit: "C", UnitType: 18 },
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
    console.log(state.Search.string);
    console.log(localStorage.getItem("expirationDate"), "expirationDate");
    let data5Days = {};
    let localStorageExpDate = Date.parse(
      localStorage.getItem("expirationDate")
    );
    if (isNaN(localStorageExpDate) || localStorageExpDate < new Date()) {
      console.log("new data");
      const response5Days = await axios.get(
        "http://dataservice.accuweather.com/forecasts/v1/daily/5day/328328?language=en-gb&metric=true&details=true&apikey=" +
          API_KEY
      );
      data5Days = response5Days.data;
      const responseCurrent = await axios.get(
        "http://dataservice.accuweather.com/currentconditions/v1/328328?language=en-gb&details=true&apikey=" +
          API_KEY
      );
      data5Days.DailyForecasts.unshift(responseCurrent.data[0]);
      localStorage.setItem("Weather", JSON.stringify(data5Days));
      const expiresIn = 3600000;
      const expirationDate = new Date(new Date().getTime() + expiresIn);
      localStorage.setItem("expirationDate", expirationDate);
      console.log(localStorage.getItem("expirationDate"), "expirationDate");
    } else {
      console.log("From local storage");
      data5Days = JSON.parse(localStorage.getItem("Weather"));
    }
    dispatch({
      type: GET_WEATHER,
      payload: { ...data5Days },
    });
  };

  const getCities = async (e) => {
    const searchString = e.target.value;
    if (searchString.length > 3) {
      const response = await axios.get(
        `http://dataservice.accuweather.com/locations/v1/cities/autocomplete?q=${searchString}&apikey=${API_KEY}`
      );
      console.log(response.data);
      dispatch({
        type: GET_CITIES,
        payload: { string: searchString, results: response.data },
      });
    } else {
      dispatch({
        type: GET_CITIES,
        payload: { string: searchString, results: [] },
      });
    }
  };

  return (
    <WeatherContext.Provider
      value={{
        ...state,
        getWeather,

        getCities,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};
