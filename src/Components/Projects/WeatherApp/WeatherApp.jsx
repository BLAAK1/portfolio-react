import "./WeatherApp.css";
import { useState, useEffect } from "react";

export default function WeatherApp() {
  const xd = "d0b68dcb4e7148ea848112635230106";
  const [city, setCity] = useState("Warszawa");
  const urlPattern = `http://api.weatherapi.com/v1/current.json?key=${xd}&q=${city}&aqi=no`;

  useEffect(() => {
    fetch(urlPattern)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }, []);

  return <h1>Test</h1>;
}
