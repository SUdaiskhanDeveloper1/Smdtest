import React from "react";
import { Row, Col } from "antd";
import { IoIosSunny } from "react-icons/io";
import { BsCloudRain, BsCloudFog } from "react-icons/bs";
import WeatherCard from "../components/WeatherCard";
import Header from "../components/Header";

const WeatherApp: React.FC = () => {
  return (
    <div
      style={{
        height: "100vh",

        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "16px",
      }}
    >
      <Row justify="center" style={{ width: "100%", margin: 0 }}>
        <Col
          xs={24}
          sm={20}
          md={16}
          lg={10}
          xl={8}
          style={{
            padding: "8px",

            maxHeight: "95vh",
          }}
        >
          <Header />

          <WeatherCard
            location="SIAL-M"
            distance="220 km"
            icon={<BsCloudFog style={{ fontSize: 32, color: "#fff" }} />}
            condition="Dense fog"
            visibility="Low Visibility"
            windSpeed="45-60"
          />

          <WeatherCard
            location="KLR-K"
            distance="195 km"
            icon={<BsCloudRain style={{ fontSize: 32, color: "white" }} />}
            condition="Very Heavy Rain with Winds"
            feelsLike="34°C"
            centerFeels={true}
          />

          <WeatherCard
            location="BHERA"
            distance="120 km"
            icon={<IoIosSunny style={{ fontSize: 42, color: "#faad14" }} />}
            condition="Sunny"
            feelsLike="40°C"
            centerFeels={true}
          />
        </Col>
      </Row>
    </div>
  );
};

export default WeatherApp;
