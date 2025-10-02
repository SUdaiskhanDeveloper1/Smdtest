import React from "react";
import { Row, Col, Typography, Space } from "antd";
import a from "../assets/a.png";
import b from "../assets/b.png";

const { Text } = Typography;


const clamp = (min: number, preferred: string, max: number): string => {
  return `clamp(${min}px, ${preferred}, ${max}px)`;
};

const Header: React.FC = () => {
  return (
    <div
      style={{
        width: "100vw",
        maxWidth: "100%",
        padding: "0 clamp(0.5rem, 2vw, 1rem)",
      }}
    >
      <Row
        justify="space-between"
        align="middle"
        style={{
          background: "white",
          padding: "clamp(0.6rem, 1.5vh, 1rem)",
          marginBottom: "clamp(0.3rem, 1vh, 0.5rem)",
          borderRadius: "8px",
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        }}
      >
        <Col>
          <Space style={{ gap: clamp(4, "1vw", 8) }}>
            <img
              src={a}
              alt="Logo"
              style={{
                width: "clamp(28px, 4vw, 38px)",
                height: "clamp(28px, 4vw, 38px)",
                borderRadius: 6,
                objectFit: "cover",
              }}
            />
            <Space style={{ gap: clamp(3, "0.8vw", 6) }}>
              <img
                src={b}
                alt="Weather Icon"
                style={{
                  width: "clamp(32px, 5vw, 48px)",
                  height: "clamp(28px, 4vw, 38px)",
                  borderRadius: 6,
                  objectFit: "cover",
                }}
              />
            </Space>
            <Text
              style={{
                fontSize: "clamp(14px, 2vw, 18px)",
                marginLeft: "clamp(4px, 1vw, 8px)",
                color: "black",
                fontWeight: "bold",
              }}
            >
              Weatherwalay
            </Text>
          </Space>
        </Col>
        <Col>
          <Space
            direction="vertical"
            style={{
              lineHeight: 1.2,
              gap: 0,
            }}
          >
            <Text
              style={{
                fontSize: "clamp(12px, 1.5vw, 14px)",
                color: "black",
                fontWeight: 500,
              }}
            >
              11:30 AM
            </Text>
            <Text
              style={{
                fontSize: "clamp(11px, 1.3vw, 13px)",
                color: "black",
                fontWeight: 500,
              }}
            >
              02 Sep
            </Text>
          </Space>
        </Col>
      </Row>
    </div>
  );
};

export default Header;