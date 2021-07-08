export const getMyLocationSelector = (state) => {
  return state.weather.myLocation;
};
export const getAddWeatherCitySelector = (state) => {
  return state.weather.weatherCites;
};
export const getNewCityBodySelector = (state) => {
  return state.weather.newCityBody;
};
export const getErrorSelector = (state) => {
  return state.weather.error;
};

export const getActiveCurrentCitySelector = (state) => {
  return state.weather.activeCurrentCity;
};
