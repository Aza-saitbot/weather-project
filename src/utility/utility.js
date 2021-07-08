let days = [
    "Воскресенье",
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
];
let months = [
    "Январь",
    "Февраль",
    "Март",
    "Апрель",
    "Май",
    "Июнь",
    "Июль",
    "Август",
    "Сентябрь",
    "Октябрь",
    "Ноябрь",
    "Декабрь",
];

export const getNumberMonth = (dt) => {
    let date = new Date(dt * 1000);
    let fullDate = months[date.getMonth()] + " " + date.getDate();
    return fullDate;
};
export const getDayWeek = (dt) => {
    let date = new Date(dt * 1000);
    let dayWeek = days[date.getDay()];
    return dayWeek;
};

export const getSunriseSunset = (data) => {
    let date = new Date(data * 1000);
    let minuteHours = date.getHours() + ":" + date.getMinutes();
    return minuteHours;
};
export const getDaylightHours = (a, b) => {
    let dateSunrise = new Date(a * 1000);
    let dateSunset = new Date(b * 1000);
    return dateSunset.getHours() - dateSunrise.getHours();
};

export const getWeatherMyLocation = (data) => {
    let clarity = data.weather[0].main;
    let temp = parseInt(data.main.temp);
    let sunriseNumber = getSunriseSunset(data.sys.sunrise)
    let sunsetNumber = getSunriseSunset(data.sys.sunset)
    let daylightHours = getDaylightHours(data.sys.sunrise, data.sys.sunset)
    let name = data.name;
    let id = Math.floor(Math.random() * 100000);
    let icon = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    return {id, name, temp, icon, clarity, sunriseNumber, sunsetNumber, daylightHours}
}


export const getWeatherCityConstructor = (data, daily) => {
    let clarity = data.weather[0].main;
    let temp = parseInt(data.main.temp);
    let sunriseNumber = getSunriseSunset(data.sys.sunrise)
    let sunsetNumber = getSunriseSunset(data.sys.sunset)
    let daylightHours = getDaylightHours(data.sys.sunrise, data.sys.sunset)
    let name = data.name;
    let id = Math.floor(Math.random() * 100000);
    let icon = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

    let newArrDaily = [];
    daily.forEach((item, i) => {
        let id = Math.floor(Math.random() * 100000);
        let dayNumber = getNumberMonth(daily[i].dt)
        let dayWeek = getDayWeek(daily[i].dt)
        let iconWeather = `http://openweathermap.org/img/wn/${daily[i].weather[0].icon}@2x.png`;
        let morningTemp = parseInt(daily[i].feels_like.morn)
        let dayTemp = parseInt(daily[i].feels_like.day)
        let eveningTemp = parseInt(daily[i].feels_like.eve)
        let nightTemp = parseInt(daily[i].feels_like.night)
        let sunrise = getSunriseSunset(daily[i].sunrise)
        let sunset = getSunriseSunset(daily[i].sunset)
        let daylightHours = getDaylightHours(daily[i].sunrise, daily[i].sunset)

        newArrDaily.push({
            id, dayNumber, dayWeek, iconWeather, morningTemp, dayTemp,
            eveningTemp, nightTemp, sunrise, sunset, daylightHours
        });
    })

    return {id, name, temp, icon, clarity, sunriseNumber, sunsetNumber, daylightHours, newArrDaily}
}



