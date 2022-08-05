import { GET_WEATHER } from "../types";

const handlers = {
  [GET_WEATHER]: (state, { payload }) => ({
    ...state,
    ...payload,
  }),
  DEFAULT: (state) => state,
};

export const WeatherReducer = (state, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT;
  return handler(state, action);
};
