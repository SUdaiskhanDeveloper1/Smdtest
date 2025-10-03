import React from "react";
import { Card, Row, Col, Typography } from "antd";

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
        width: "100vw",
        maxWidth: "100%",

        padding: "0 clamp(0.5rem, 2vw, 1rem)",
        marginBottom: "clamp(0.3rem, 1vh, 0.5rem)",
      }}
    >
      <Card
        style={{
          width: "100%",
          height: "100%",
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          color: "white",
          borderRadius: 12,
          // minHeight: "clamp(70px, 10vh, 100px)",
        }}
        bodyStyle={{ 
          padding: "clamp(0.6rem, 1.5vh, 1rem)",
          display: "flex",
          alignItems: "center"
        }}
      >
        <Row justify="space-between" align="middle" style={{ width: "100%", height: "100%" }}>
          <Col xs={8} sm={6}>
            <Text style={{ 
              color: "white", 
              fontSize: "clamp(14px, 2vw, 18px)", 
              fontWeight: "bold",
              display: "block",
              marginBottom: "clamp(0.1rem, 0.5vh, 0.3rem)"
            }}>
              {location}
            </Text>
            <Text style={{ 
              color: "white", 
              display: "block", 
              fontSize: "clamp(10px, 1.2vw, 12px)" 
            }}>
              {distance}
            </Text>
          </Col>
          
          <Col xs={8} sm={6} style={{ textAlign: "center" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
              {React.cloneElement(icon as React.ReactElement, {
                style: { fontSize: "clamp(20px, 3vw, 30px)" }
              })}
              <Text style={{ 
                color: "white", 
                marginLeft: "clamp(4px, 1vw, 8px)", 
                fontSize: "clamp(11px, 1.3vw, 14px)" 
              }}>
                {condition}
              </Text>
            </div>
          </Col>
          
          <Col xs={8} sm={12} style={{ textAlign: "right" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "clamp(0.1rem, 0.5vh, 0.3rem)" }}>
              {visibility && (
                <Text style={{ color: "white", fontSize: "clamp(10px, 1.2vw, 12px)" }}>
                  Visibility: {visibility}
                </Text>
              )}
              {windSpeed && (
                <Text style={{ color: "white", fontSize: "clamp(10px, 1.2vw, 12px)" }}>
                  Wind: {windSpeed} km/h
                </Text>
              )}
              {feelsLike && (
                <Text
                  style={{
                    color: "white",
                    fontSize: "clamp(10px, 1.2vw, 12px)",
                    textAlign: centerFeels ? "center" : "right",
                  }}
                >
                  Feels like: {feelsLike}
                </Text>
              )}
            </div>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default WeatherCard;