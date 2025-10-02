import React from "react";
import WeatherCard from "./WeatherCard";
import { weatherData } from "../data/weatherData";

const WeatherList: React.FC = () => {
  return (
    <>
      {weatherData.map((data, idx) => (
        <WeatherCard
          key={idx}
          stationName={data.stationName}
          distance={data.distance}
          conditionName={data.conditionName}
          conditionIconsvg={data.conditionIconsvg}
          parameters={data.parameters}
        />
      ))}
    </>
  );
};

export default WeatherList;


