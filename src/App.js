import React, {useEffect, useState} from "react";
import "./App.css";
import preloader from './image/1492.gif'
import {WeatherMyCity} from "./components/WeatherMyCity/WeatherMyCity";
import {useDispatch, useSelector} from "react-redux";
import useGeolocation from "react-hook-geolocation";
import {
    getMyLocation,
    getWeatherCity, setDeleteCityAC,
    setError,
    setNewCityBody,
    setShowSelect_City,
    setWeatherMyCity,
} from "./redux/weatherCity-reducer";
import {
    getActiveCurrentCitySelector,
    getAddWeatherCitySelector,
    getErrorSelector,
    getMyLocationSelector,
    getNewCityBodySelector,
} from "./redux/weatherCity-selector";
import {WeatherOtherCites} from "./components/WeatherOtherCites/WeatherOtherCites";
import AddCityForm from "./components/WeatherOtherCites/AddCityForm/AddCityForm";
import Info from "./components/WeatherOtherCites/Cites/Info/Info";

function App() {
    let [Lat, setLat] = useState(null);
    let [Long, setLong] = useState(null);
    const [activeForm, setActiveFrom] = useState(false);
    const [activeCity, setActiveCity] = useState(false);

    const setActiveForm = (e) => {
        e.stopPropagation();
        setActiveFrom(!activeForm);
    };


    const MyLocation = useSelector(getMyLocationSelector);
    const weatherCites = useSelector(getAddWeatherCitySelector);
    const newCityBody = useSelector(getNewCityBodySelector);
    const errorForm = useSelector(getErrorSelector);
    const activeCurrentCity = useSelector(getActiveCurrentCitySelector);


    const dispatch = useDispatch();

    const geolocation = useGeolocation({
        enableHighAccuracy: true,
        maximumAge: 50000,
        timeout: 15000,
    });

    useEffect(() => {
        if (!geolocation.error) {
            setLat(geolocation.latitude);
            setLong(geolocation.longitude);
            if (Lat) {
                dispatch(getMyLocation(Lat, Long));
            }
        } else {
            console.log({message: "No result geolocation"});
        }
    }, [geolocation]);

    return (
        <div className="container">
            {Lat ? <WeatherMyCity myLocation={MyLocation}/> :
                <div className="container__preloader"><img src={preloader}/></div>}
            <div
                onClick={setActiveForm}
                className="app_container__ButtonAddCity"
            >
                <i onClick={setActiveForm} className=" material-icons ">
                    add_circle_outline
                </i>
            </div>
            <WeatherOtherCites
                weatherCites={weatherCites}
                setActiveCity={setActiveCity}
                setShowSelect_City={setShowSelect_City}
                setDeleteCityAC={setDeleteCityAC}
            />

            {activeForm && (
                <AddCityForm
                    setActiveForm={setActiveForm}
                    getWeatherCity={getWeatherCity}
                    setNewCityBody={setNewCityBody}
                    newCityBody={newCityBody}
                    errorForm={errorForm}
                    setError={setError}
                />
            )}
            {activeCurrentCity &&
            <Info
                setActiveCity={setActiveCity}
                activeCity={activeCity}
                weatherCites={weatherCites}
                activeCurrentCity={activeCurrentCity}
            />
            }
        </div>
    );
}

export default App;
