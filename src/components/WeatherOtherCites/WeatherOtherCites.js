import React from "react";
import {useDispatch} from "react-redux";

export const WeatherOtherCites = ({weatherCites, setActiveCity,setShowSelect_City,setDeleteCityAC}) => {
    const dispatch = useDispatch();

    const setActiveSelectCity = (id) => {
        dispatch(setShowSelect_City(id))
        setActiveCity(true)
    }

    const setDeleteCity = (id) => {
        dispatch(setDeleteCityAC(id));
    };

    const arrWeatherCites = weatherCites.map(e => (
        <div key={e.id}
             id={e.id}
             className="weatherOtherCity__city"
             onClick={(e) => e.stopPropagation()}
        >
            <div
                className="weatherOtherCity__deleteCity"
                onClick={() => setDeleteCity(e.id)}
            >
                <i className=" material-icons ">delete</i>
            </div>
            <div onClick={() => setActiveSelectCity(e.id)}>
                <h2>{e.name}</h2>
            </div>
            <div className="weatherMyCity__iconTemp" onClick={() => setActiveSelectCity(e.id)}>
                <div className="weatherMyCity__icon">
                    <img src={e.icon} alt="icon"/>{" "}
                </div>
                <div className="weatherMyCity__temp">
                    <h1>{e.temp}°C</h1>
                </div>
            </div>
        </div>
    ));

    return (
        <div className="OtherCites__wrapper" onClick={(e) => e.stopPropagation()}>
            <div className="OtherCites__listCites">
                {arrWeatherCites}
            </div>
            <div></div>
        </div>
    );
};
