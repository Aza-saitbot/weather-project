import React from "react";
import sunsetImg from "../../../../image/sun.svg";
import sunsetSunriseImg from "../../../../image/sunrizeSunset.svg";
import {Forecast} from "./forecast/forecast";

const Info = ({setActiveCity, activeCity, activeCurrentCity}) => {

    const deactiveSelectCity = () => {
        setActiveCity(!activeCity)
    }

    return (
        <div
            className={activeCity ? "info__wrapper active" : "info__wrapper"}
            onClick={deactiveSelectCity}
        >
            <div className="info__blur">
                <div key={activeCurrentCity.id} id={activeCurrentCity.id} className="info__content"
                     onClick={(e) => e.stopPropagation()}>
                    <div className="info__close" onClick={deactiveSelectCity}>
                        <i className=" material-icons ">close</i>
                    </div>
                    <div className="info__currentCity">
                        <div className="info__currentCity__nameCity">
                            <h1>{activeCurrentCity.name}</h1>
                        </div>
                        <div className="info__currentCity__iconTemp">
                            <div className="info__currentCity__iconTemp_icon">
                                <img src={activeCurrentCity.icon} alt="icon"/>
                            </div>
                            <div className="info__currentCity__iconTemp_temp">
                                <h1>{activeCurrentCity.temp}°</h1>
                            </div>
                        </div>
                        <div className="info__currentCity__clarity">
                            <h4>{activeCurrentCity.clarity}</h4>
                        </div>
                    </div>

                    <Forecast daily={activeCurrentCity.newArrDaily}/>

                    <div className="info__sunriseSunset__wrapper">
                        <div className="info__sunriseSunset__item">
                            <div className="info__sunriseSunset__grafity">
                                <img src={sunsetSunriseImg}/>
                            </div>
                            <div className="info__sunriseSunset__dataSun">
                                <div className="info__sunriseSunset__dataSun__sun">
                                    <div>
                                        <img src={sunsetImg}/>
                                    </div>
                                    <div>
                                        <p>Восход</p>
                                    </div>
                                    <div>{activeCurrentCity.sunriseNumber}</div>
                                </div>
                                <div className="info__sunriseSunset__dataSun__data">
                                    <div className="info__sunriseSunset__dataSun__data__day">
                                        <p>Световой день</p>
                                    </div>
                                    <div>{activeCurrentCity.daylightHours} часов</div>
                                </div>
                                <div className="info__sunriseSunset__dataSun__sun">
                                    <div>
                                        <img src={sunsetImg}/>
                                    </div>
                                    <div>
                                        <p>Закат</p>
                                    </div>
                                    <div>{activeCurrentCity.sunsetNumber}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Info;
