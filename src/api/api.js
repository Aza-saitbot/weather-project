import * as axios from "axios";

const API_KEY = "30401e8c74d0303c857e675a1882143f";

export const weatherAPI = {
  getLocation(Lat, Long) {
    return axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${Lat}&lon=${Long}&appid=${API_KEY}&units=metric`
      )
      .then((res) => res.data)
      .catch((error) => console.log(error));
  },
  getCity(city) {
    return axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      )
      .then((res) => res.data)
      .catch((error) => {
        console.log(error);
      });
  },
  getForecastWeather(lat, lon) {
    return axios
      .get(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=alerts,minutely,hourly&appid=${API_KEY}&units=metric`
      )
      .then((res) => res.data)
      .catch((error) => console.log(error));
  },
};
