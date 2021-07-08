import React from "react";

export const Forecast = ({daily}) => {

    const arrForecast = daily.map(e => {
        return (
            <div id={e.id} key={e.id} className="info__forecast__item">
                <div className="info__forecast__forecast__dataWeek">
                    <div className="info__forecast__forecast__data">
                        <p>{e.dayNumber}</p>
                    </div>
                    <div className="info__forecast__forecast__week">
                        <p>{e.dayWeek}</p>
                    </div>
                </div>
                <div className="info__forecast__forecast__icon">
                    <img src={e.iconWeather} alt="icon"/>
                </div>
                <div className="info__forecast__forecast__day">
                    <p>{e.dayTemp}°</p>
                </div>
                <div className="info__forecast__forecast__night">
                    <p>{e.nightTemp}°</p>
                </div>
            </div>
        )
    })

    return (
        <div className="info__forecast">
            {arrForecast}
        </div>
    )
}