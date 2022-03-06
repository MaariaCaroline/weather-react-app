import React, { useState } from "react";
import Info from "./Info";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
   const [weatherData, setWeatherData] = useState({ready: false});
   const [city, setCity] = useState(props.defaultCity);

   function handleResponse(response) {
   setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      iconUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      wind: response.data.wind.speed,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
   });
}

   function handleSubmit(event){
    event.preventDefault();
    search();

 }

 function handleCityChange(event) {
    setCity(event.target.value);
  }
 

 function search() {
 const apiKey ="50f08580ddb58d03ac1e0e37f19dd297";
 let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
 axios.get(apiUrl).then(handleResponse);
}

 if (weatherData.ready) 
 {
    return  (
    <div className="Weather">
    <form onSubmit={handleSubmit}>
    <div className="row">
    <div className="col-9">
    <input type="search" placeholder="Search"
    className="form-control"
    onChange={handleCityChange}/>
 </div>
 <div className="col-3">
    <input type="submit" value="Search" className="btn btn-primary"/>
    </div>
    </div>
    </form>
    <Info data={weatherData} />
    
        </div>
    );

 } else {

  search();

 return "Loading...."
 }
}
