import React, { useState } from "react";

export default function WeatherTemp(props){
    const[unit, setUnit] = useState("metrics");
    function convertToFahrenheit(event){
        event.preventDefault();
        setUnit("fahrenheit");
    }

    function convertToCelsius(event) {
        event.preventDefault();
        setUnit("celsius");
    }

    if (unit === "metrics") {
    return(
        <span>
            <span className="temperature">
             {Math.round(props.celsius)}
             </span>

             <span className="unit"> °C {" "}
             <a href="/" onClick={convertToFahrenheit}>
                 °F</a>
                 </span>
        </span>
        
    );
} else {
    let fahrenheit=(props.celsius * 9/5) + 32
    return (
    <span>
        <span className="temperature">
         {Math.round(fahrenheit)}
         </span>

         <span className="unit">
         <a href="/" onClick={convertToCelsius}>
             °C</a> {" "} °F
             </span>
    </span>)

} }
