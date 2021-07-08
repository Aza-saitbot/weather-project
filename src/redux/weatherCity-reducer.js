import {weatherAPI} from "../api/api";
import {getWeatherCityConstructor, getWeatherMyLocation} from "../utility/utility";

const ADD_WEATHER_MY_CITY =
    "weather-project/weatherCityReducer/ADD_WEATHER_MY_CITY";
const SET_ADD_CITY = "weather-project/weatherCityReducer/SET_ADD_CITY";
const SET_NEW_CITY_BODY =
    "weather-project/weatherCityReducer/SET_NEW_CITY_BODY";
const DELETE_CITY = "weather-project/weatherCityReducer/DELETE_CITY";
const SET_ERROR = "weather-project/weatherCityReducer/SET_ERROR";
const SET_SHOW_SELECT_CITY = "weather-project/weatherCityReducer/SET_SHOW_SELECT_CITY";

let initialState = {
    myLocation: [],
    weatherCites: [],
    newCityBody: "",
    error: false,
    activeCurrentCity: "",
    activeDailyCity: "",
};

export const weatherCityReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_WEATHER_MY_CITY:
            return {...state, myLocation: action.location};
        case SET_ADD_CITY:

            return {
                ...state,
                weatherCites: [...state.weatherCites, action.addCity]
            };
        case SET_NEW_CITY_BODY:
            return {
                ...state,
                newCityBody: action.body,
            };
        case DELETE_CITY:
            return {
                ...state,
                weatherCites: state.weatherCites.filter((c) => c.id != action.cityId),
            };
        case SET_ERROR:
            return {
                ...state,
                error: action.errorForm,
            };
        case SET_SHOW_SELECT_CITY:
            return {
                ...state,
                activeCurrentCity: state.weatherCites.find(item => item.id == action.selectId),
            };
        default:
            return state;
    }
};

const setWeatherMyCity = (location) => ({type: ADD_WEATHER_MY_CITY, location,});
const setAddCity = (addCity) => ({type: SET_ADD_CITY, addCity});
export const setNewCityBody = (body) => ({type: SET_NEW_CITY_BODY, body});
export const setDeleteCityAC = (cityId) => ({type: DELETE_CITY, cityId});
export const setError = (errorForm) => ({type: SET_ERROR, errorForm});
export const setShowSelect_City = (selectId) => ({type: SET_SHOW_SELECT_CITY, selectId});


export const getMyLocation = (Lat, Long) => async (dispatch) => {
    try {
        const data = await weatherAPI.getLocation(Lat, Long);
        let location = getWeatherMyLocation(data)
        dispatch(setWeatherMyCity(location));
    } catch (e) {
        console.log("error", e);
    }
};

export const getWeatherCity = (city) => async (dispatch) => {
    try {
        const data = await weatherAPI.getCity(city);
        let lat = data.coord.lat;
        let lon = data.coord.lon;
        let infoCity = await weatherAPI.getForecastWeather(lat, lon);
        let daily = infoCity.daily
        if (daily) {
            let addCity = getWeatherCityConstructor(data, daily)
            dispatch(setAddCity(addCity));
        }
    } catch (e) {
        dispatch(setError(true));
        console.log(e)
    }
};


