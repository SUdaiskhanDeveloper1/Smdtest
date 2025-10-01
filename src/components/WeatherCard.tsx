import React from "react";
import { Row, Col, Typography } from "antd";
import { RiSpeedUpLine } from "react-icons/ri";
import { PiEyeBold } from "react-icons/pi";
import { IoIosSunny } from "react-icons/io";
import { BsCloudRain, BsCloudFog } from "react-icons/bs";

const { Text } = Typography;

interface Parameter {
  label: string;
  value: string;
  icon: string;
  unit: string;
}

interface WeatherCardProps {
  stationName: string;
  distance: string;
  conditionName: string;
  conditionIconsvg: string;
  parameters: Parameter[];
}

const iconMapper: Record<string, JSX.Element> = {
  sun: (
    <IoIosSunny
      style={{ fontSize: "clamp(32px, 5vw, 45px)", color: "#faad14" }}
    />
  ),
  rain: (
    <BsCloudRain
      style={{ fontSize: "clamp(28px, 4vw, 40px)", color: "#fff" }}
    />
  ),
  fog: (
    <BsCloudFog style={{ fontSize: "clamp(28px, 4vw, 40px)", color: "#fff" }} />
  ),
};

const WeatherCard: React.FC<WeatherCardProps> = ({
  stationName,
  distance,
  conditionName,
  conditionIconsvg,
  parameters,
}) => {
  return (
    <div
      style={{
        width: "100%",
        marginBottom: "1rem",
        boxSizing: "border-box",
      }}
    >
     
      <div
        style={{
          background: "#000E2A",
          color: "#fff",
          padding: "1rem",
          borderRadius: "12px 12px 0 0",
          boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
        }}
      >
        <Row align="middle" justify="space-between">
          <Col xs={12}>
            <Text
              strong
              style={{
                fontSize: "clamp(16px, 2vw, 25px)",
                color: "#fff",
              }}
            >
              {stationName}
            </Text>
            <br />
            <Text
              style={{
                fontSize: "clamp(14px, 1.5vw, 20px)",
                color: "#fff",
              }}
            >
              {distance}
            </Text>
          </Col>

          <Col
            xs={12}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              justifyContent: "center",
            }}
          >
            <span style={{ fontSize: "clamp(24px, 3vw, 42px)" }}>
              {iconMapper[conditionIconsvg] || <IoIosSunny />}
            </span>
            <Text
              strong
              style={{
                fontSize: "clamp(12px, 1.2vw, 16px)",
                color: "white",
              }}
            >
              {conditionName}
            </Text>
          </Col>
        </Row>
      </div>

     
      {parameters.length > 0 && (
        <div
          style={{
            background: "#D9E6FF",
            padding: "0.8rem 1rem",
            borderRadius: "0 0 12px 12px",
            fontSize: "clamp(12px, 1vw, 16px)",
            boxShadow: "0 2px 6px rgba(98, 50, 50, 0.1)",
          }}
        >
          <Row justify="space-between" align="middle">
            {parameters.map((param, i) => {
              const isFeelsLike = param.label.toLowerCase().includes("feel");

              return (
                <Col
                  key={i}
                  style={{
                    textAlign: isFeelsLike ? "center" : "left", 
                    width: isFeelsLike ? "100%" : "auto",
                  }}
                >
                 
                  <Row align="middle" gutter={6} wrap={false}>
                    <Col>
                      {param.icon === "eye" && (
                        <PiEyeBold style={{ color: "#ff4d4f", fontSize: 22 }} />
                      )}
                      {param.icon === "wind" && (
                        <RiSpeedUpLine
                          style={{ color: "#ff4d4f", fontSize: 22 }}
                        />
                      )}
                    </Col>
                    <Col>
                      <Text
                        style={{
                          fontSize: "clamp(16px, 1.5vw, 20px)",
                          color: isFeelsLike ? "blue" : "#FF3F3F",
                        }}
                      >
                        {param.label}: {param.value} {param.unit}
                      </Text>
                    </Col>
                  </Row>
                </Col>
              );
            })}
          </Row>
        </div>
      )}
    </div>
  );
};

export default WeatherCard;
