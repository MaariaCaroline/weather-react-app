import React from "react";
import Weather from "./Weather";
import "./Weather.css";
import "./App.css"

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <Weather defaultCity="Taipei" />
      <footer>
      <a href="https://github.com/MaariaCaroline/weather-react">Open-source code</a>
      </footer>
    </div>
    </div>
  );
}