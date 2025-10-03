import React from "react";
import { Row, Col, Typography, Space } from "antd";
import { PiEyeBold } from "react-icons/pi";
import { RiSpeedUpLine } from "react-icons/ri";

const { Text } = Typography;

interface WeatherCardProps {
  location: string;
  distance: string;
  icon: React.ReactNode;
  condition: string;
  visibility?: string;
  windSpeed?: string;
  feelsLike?: string;
  centerFeels?: boolean;
}

const WeatherCard: React.FC<WeatherCardProps> = ({
  location,
  distance,
  icon,
  condition,
  visibility,
  windSpeed,
  feelsLike,
  centerFeels = false,
}) => {
  return (
    <div
      style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        marginBottom: "2vh",
      }}
    >
      
      <div
        style={{
          background: "#000E2A",
          color: "#fff",
          padding: "3vh 3vw",
          borderRadius: "1rem 1rem 0 0",
          flex: 1,
        }}
      >
        <Row align="middle" justify="space-between" style={{ height: "100%" }}>
          <Col>
            <Space direction="vertical" size={4}>
              <Text
                strong
                style={{ fontSize: "clamp(3vh, 3.5vw, 5vh)", color: "#fff" }}
              >
                {location}
              </Text>
              <Text
                style={{ fontSize: "clamp(2.5vh, 3vw, 4.5vh)", color: "#fff" }}
              >
                {distance}
              </Text>
            </Space>
          </Col>
          <Col style={{ textAlign: "right" }}>
            <Space direction="vertical" align="end" size={2}>
              <span style={{ fontSize: "clamp(5vh, 6vw, 8vh)" }}>{icon}</span>
              <Text
                strong
                style={{
                  fontSize: "clamp(2.2vh, 2.8vw, 3.8vh)",
                  color: "#fff",
                }}
              >
                {condition}
              </Text>
            </Space>
          </Col>
        </Row>
      </div>

     
      {(visibility || windSpeed || feelsLike) && (
        <div
          style={{
            background: "#D9E6FF",
            padding: "3vh 3vw",
            borderRadius: "0 0 1rem 1rem",
          }}
        >
          <Row justify={centerFeels ? "center" : "space-between"} align="middle">
            {visibility && !centerFeels && (
              <Col>
                <Row gutter={10} align="middle">
                  <Col>
                    <PiEyeBold
                      style={{
                        color: "#ff4d4f",
                        fontSize: "clamp(4vh, 4.5vw, 6vh)",
                        display: "block",
                      }}
                    />
                  </Col>
                  <Col>
                    <Text
                      style={{
                        fontSize: "clamp(2.5vh, 3vw, 4.5vh)",
                        color: "#FF3F3F",
                        display: "block",
                      }}
                    >
                      Low Visibility
                    </Text>
                    <Text
                      style={{
                        fontSize: "clamp(2.5vh, 3vw, 4.5vh)",
                        color: "#FF3F3F",
                        display: "block",
                      }}
                    >
                      (3-broken lines)
                    </Text>
                  </Col>
                </Row>
              </Col>
            )}

            {windSpeed && !centerFeels && (
              <Col>
                <Row gutter={10} align="middle">
                  <Col>
                    <RiSpeedUpLine
                      style={{
                        fontSize: "clamp(4vh, 4.5vw, 6vh)",
                        color: "#FF3F3F",
                        display: "block",
                      }}
                    />
                  </Col>
                  <Col>
                    <Text
                      style={{
                        fontSize: "clamp(2.5vh, 3vw, 4.5vh)",
                        color: "#FF3F3F",
                        display: "block",
                      }}
                    >
                      45-60
                    </Text>
                    <Text
                      style={{
                        fontSize: "clamp(2.5vh, 3vw, 4.5vh)",
                        color: "#FF3F3F",
                      }}
                    >
                      km/h
                    </Text>
                  </Col>
                </Row>
              </Col>
            )}

            {feelsLike && (
              <Col>
                <Text
                  strong
                  style={{
                    fontSize: "clamp(2.8vh, 3.2vw, 4.8vh)",
                    color: "#000E2A",
                  }}
                >
                  Feels like: {feelsLike}
                </Text>
              </Col>
            )}
          </Row>
        </div>
      )}
    </div>
  );
};

export default WeatherCard;
