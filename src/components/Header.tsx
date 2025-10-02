import React from "react";
import { Row, Col, Typography, Space } from "antd";
import a from "../assets/a.png";
import b from "../assets/b.png";

const { Text } = Typography;

const Header: React.FC = () => {
  return (
    <Row
      justify="space-between"
      align="middle"
      style={{
        background: "white",
        padding: "0.8rem 1rem",
        marginBottom: "0.5rem",
      }}
    >
      <Col>
        <Space align="center" size={6}>
          <img
            src={a}
            alt="Logo"
            style={{
              width: "clamp(30px, 4vw, 40px)",
              height: "clamp(30px, 4vw, 40px)",
              borderRadius: 6,
              objectFit: "cover",
            }}
          />
          <Space align="center" size={4}>
            <img
              src={b}
              alt="Weather Icon"
              style={{
                width: "clamp(35px, 5vw, 50px)",
                height: "clamp(30px, 4vw, 40px)",
                borderRadius: 6,
                objectFit: "cover",
              }}
            />
          </Space>
          <Text
            style={{
              fontSize: "clamp(12px, 1.5vw, 15px)",
              marginLeft: 6,
              color: "black",
              fontWeight: "bold",
            }}
          >
            Weatherwalay
          </Text>
        </Space>
      </Col>
      <Col>
        <Space direction="vertical" align="end" size={0} style={{ lineHeight: 1 }}>
          <Text style={{ fontSize: "clamp(11px, 1vw, 13px)", color: "black", fontWeight: 500 }}>
            11:30 AM
          </Text>
          <Text style={{ fontSize: "clamp(10px, 1vw, 12px)", color: "black", fontWeight: 500 }}>
            02 Sep
          </Text>
        </Space>
      </Col>
    </Row>
  );
};
//checking okkkk bugs coming 
export default Header;
