import React from "react";
import Header from "./components/Header";
import WeatherList from "./components/WeatherList";

const WeatherApp: React.FC = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        background: "#FFFFFF",
        display: "flex",
        flexDirection: "column",
        padding: "3vh 3vw",
        boxSizing: "border-box",
        overflowY: "auto",
      }}
    >
      <Header />
      <WeatherList />
    </div>
  );
};

export default WeatherApp;
