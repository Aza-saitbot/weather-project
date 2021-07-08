import React from "react";

export const WeatherMyCity = ({ myLocation }) => {
  return (
    <div id={myLocation.id} className="weatherMyCity__wrapper">
      <div className="weatherMyCity__wrapper__location">
        <div className="weatherMyCity__wrapper__locationIcon">
          <i className=" material-icons ">place</i>
        </div>
        <div className="weatherMyCity__city">
          <div>
            <h2>{myLocation.name}</h2>
          </div>
          <div className="weatherMyCity__iconTemp">
            <div className="weatherMyCity__icon">
              <img src={myLocation.icon} alt="icon" />{" "}
            </div>
            <div className="weatherMyCity__temp">
              <h1>{myLocation.temp}°C</h1>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};
