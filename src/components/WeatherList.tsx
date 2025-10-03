import React from "react";
import WeatherCard from "./WeatherCard";
import { BsCloudFog, BsCloudRain } from "react-icons/bs";
import { IoIosSunny } from "react-icons/io";

const WeatherList: React.FC = () => {
  return (
    <div
      style={{
        flex: "1 1 auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
      }}
    >
      <WeatherCard
        location="SIAL-M"
        distance="220 km"
        icon={
          <BsCloudFog
            style={{ fontSize: "clamp(6vh, 7vw, 9vh)", color: "#fff" }}
          />
        }
        condition="Dense fog"
        visibility="Low Visibility"
        windSpeed="45-60"
      />

      <WeatherCard
        location="KLR-K"
        distance="195 km"
        icon={
          <BsCloudRain
            style={{ fontSize: "clamp(6vh, 7vw, 9vh)", color: "white" }}
          />
        }
        condition="Very Heavy Rain with Winds"
        feelsLike="34°C"
        centerFeels={true}
      />

      <WeatherCard
        location="BHERA"
        distance="120 km"
        icon={
          <IoIosSunny
            style={{ fontSize: "clamp(7vh, 8vw, 10vh)", color: "#faad14" }}
          />
        }
        condition="Sunny"
        feelsLike="40°C"
        centerFeels={true}
      />
    </div>
  );
};

export default WeatherList;
