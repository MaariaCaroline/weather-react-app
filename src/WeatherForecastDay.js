import React from "react";

export default function WeatherForecastDay(props) {
    function maxTemp(){
        let temperature = Math.round(props.data.temp.max);
    return `${temperature}°C`;
    }
    function minTemp(){
        let temperature = Math.round(props.data.temp.min);
    return `${temperature}°C`; }

    function day(){
        let date = new Date(props.data.dt * 1000);
        let day = date.getDay();

        let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

        return days[day];
    }
    return (
        <div>
        <div className="WeatherDay">{day()}</div>
            <div className="WeatherTemp"></div>
            <span className="WeatherDayTemp-max">{maxTemp()}
            </span>
            <span className="WeatherDayTemp-min">{minTemp()}
            </span>
            </div>
    );
}