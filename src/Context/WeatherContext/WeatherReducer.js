import { GET_WEATHER, GET_CITIES } from "../types";

const handlers = {
  [GET_WEATHER]: (state, { payload }) => ({
    ...state,
    ...payload,
  }),
  [GET_CITIES]: (state, { payload }) => ({
    ...state,
    Search: { ...payload },
  }),
  DEFAULT: (state) => state,
};

export const WeatherReducer = (state, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT;
  return handler(state, action);
};
