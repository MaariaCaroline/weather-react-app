import React from "react";
import ConstDate from "./ConstDate";
import WeatherTemp from "./WeatherTemp";

export default function Info(props) {
    return (
    <div className ="Info">
    <h1>{props.data.city}</h1>
    <ul>
    <li><ConstDate date={props.data.date} />
    </li>
    <li className="text-capitalize">{props.data.description}  
    </li>
    </ul>

    <div className="row">
    <div className="col-6">
    <img src={props.data.iconUrl} alt={props.data.description}/>
    <WeatherTemp celsius={props.data.temperature}/>
    </div>
    <div className="col-6">
    <ul>
    <li>Humidity: {props.data.humidity}%</li>
    <li>Wind: {props.data.wind} km/h</li>
    </ul>
    </div>
    </div>
    </div>
    );
}
