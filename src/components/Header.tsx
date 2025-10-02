import React from "react";
import { Row, Col, Typography, Space } from "antd";
import a from "../assets/a.png";
import c from "../assets/c.svg";

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
          marginBottom: "clamp(0.99rem, 1vh, 0.5rem)",
          borderRadius: "8px",
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        }}
      >
        <Col>
          <Space style={{ gap: clamp(12, "2vw", 34) }}>
            <img
              src={a}
              alt="Logo"
              style={{
                height: "clamp(78px, 4vw, 38px)",
                borderRadius: 6,
                objectFit: "inherit",
              }}
            />
            <img
              src={c}
              alt="Logo"
              style={{
                width: "clamp(280px, 20vw, 298px)",

                borderRadius: 6,
                objectFit: "fill",
              }}
            />
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
