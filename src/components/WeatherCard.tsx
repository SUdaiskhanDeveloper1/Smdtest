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


const responsiveSize = (min: number, preferred: string, max: number): string => {
  return `clamp(${min}px, ${preferred}, ${max}px)`;
};

const iconMapper: Record<string, JSX.Element> = {
  sun: (
    <IoIosSunny
      style={{ fontSize: responsiveSize(24, "3vw", 40), color: "#faad14" }}
    />
  ),
  rain: (
    <BsCloudRain
      style={{ fontSize: responsiveSize(22, "2.8vw", 36), color: "#fff" }}
    />
  ),
  fog: (
    <BsCloudFog style={{ fontSize: responsiveSize(22, "2.8vw", 36), color: "#fff" }} />
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
        width: "100vw",
        maxWidth: "100%",
        margin: "0",
        marginBottom: responsiveSize(8, "1.5vh", 16),
        boxSizing: "border-box",
        padding: `0 ${responsiveSize(8, "2vw", 16)}`,
      }}
    >
     
      <div
        style={{
          background: "#000E2A",
          color: "#fff",
          padding: responsiveSize(12, "2vh", 20),
          borderRadius: "12px 12px 0 0",
          boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
          minHeight: responsiveSize(80, "12vh", 120),
          display: "flex",
          alignItems: "center",
        }}
      >
        <Row align="middle" justify="space-between" style={{ width: "100%" }}>
          <Col xs={12} sm={14}>
            <Text
              strong
              style={{
                fontSize: responsiveSize(14, "2vw", 22),
                color: "#fff",
                display: "block",
                marginBottom: responsiveSize(4, "0.5vh", 8),
              }}
            >
              {stationName}
            </Text>
            <Text
              style={{
                fontSize: responsiveSize(12, "1.5vw", 18),
                color: "#fff",
              }}
            >
              {distance}
            </Text>
          </Col>

          <Col
            xs={12}
            sm={10}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              justifyContent: "center",
            }}
          >
            <span style={{ fontSize: responsiveSize(20, "4vw", 38) }}>
              {iconMapper[conditionIconsvg] || <IoIosSunny />}
            </span>
            <Text
              strong
              style={{
                fontSize: responsiveSize(11, "1.2vw", 15),
                color: "white",
                textAlign: "right",
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
            padding: `${responsiveSize(10, "1.5vh", 16)} ${responsiveSize(12, "2vw", 20)}`,
            borderRadius: "0 0 12px 12px",
            fontSize: responsiveSize(11, "1vw", 14),
            boxShadow: "0 2px 6px rgba(98, 50, 50, 0.1)",
            minHeight: responsiveSize(60, "8vh", 80),
            display: "flex",
            alignItems: "center",
          }}
        >
          <Row 
            justify="space-between" 
            align="middle" 
            style={{ width: "100%" }}
          >
            {parameters.map((param, i) => {
              const isFeelsLike = param.label.toLowerCase().includes("feel");

              return (
                <Col
                  key={i}
                  style={{
                    textAlign: isFeelsLike ? "center" : "left",
                    flex: isFeelsLike ? "1 0 100%" : "0 1 auto",
                    marginBottom: isFeelsLike ? responsiveSize(4, "1vh", 8) : "0",
                  }}
                >
                  <Row align="middle" gutter={6} wrap={false}>
                    <Col>
                      {param.icon === "eye" && (
                        <PiEyeBold style={{ 
                          color: "#ff4d4f", 
                          fontSize: responsiveSize(18, "2vw", 22)
                        }} />
                      )}
                      {param.icon === "wind" && (
                        <RiSpeedUpLine
                          style={{ 
                            color: "#ff4d4f", 
                            fontSize: responsiveSize(18, "2vw", 22)
                          }}
                        />
                      )}
                    </Col>
                    <Col>
                      <Text
                        style={{
                          fontSize: responsiveSize(13, "1.5vw", 18),
                          color: isFeelsLike ? "blue" : "#FF3F3F",
                          whiteSpace: "nowrap",
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