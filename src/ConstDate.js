import React from "react";

export default function ConstDate(props) {
    let days = ["Mon", "Tue", "Wed", "Thr", "Fri", "Sat", "Sun"]
    let day = days[props.date.getDay()];
    let hours = props.date.getHours();
    if (hours < 10) {
        hours = `0${hours}`;
    }
    let minutes = props.date.getMinutes();
    if (minutes < 10) {
        minutes = `0${minutes}`;
    }
    return <div>{day} {hours}:{minutes}</div>;
}
