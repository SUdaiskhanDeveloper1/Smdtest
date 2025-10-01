
import React from "react";
import Header from "./components/Header";
import WeatherList from "./components/WeatherList";

const App: React.FC = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        background: "#FFFFFF",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        boxSizing: "border-box",
        overflowY: "auto",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "white",
          padding: "1rem",
          boxSizing: "border-box",
        }}
      >
        <Header />
        <WeatherList />
      </div>
    </div>
  );
};

export default App;







