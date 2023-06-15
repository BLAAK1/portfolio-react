import "./WeatherApp.css";
import RenderData from "./RenderData";
import React, { useState } from "react";

import locationIcon from "../../../assets/icons/location.svg";
import searchIcon from "../../../assets/icons/search.svg";

const WeatherApp = () => {
  const [data, setData] = useState(null);
  const [city, setCity] = useState(null);

  // Function to handle the API call and update the state
  const fetchData = async (city) => {
    try {
      const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=d0b68dcb4e7148ea848112635230106&q=${city}&aqi=no`);
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Function to handle the button click event
  const handleClick = (e) => {
    e.preventDefault();
    fetchData(city);
  };

  return (
    <div className="wApp">
      <div className="cityInput">
        <img src={locationIcon} />
        <form>
          <input type="text" id="cityName" name="cityName" onInput={(e) => setCity(e.target.value)} placeholder="Enter your city"></input>
          <button onClick={handleClick}>
            <img src={searchIcon} />
          </button>
        </form>
      </div>
      {data && <RenderData data={data} />}
    </div>
  );
};

export default WeatherApp;
