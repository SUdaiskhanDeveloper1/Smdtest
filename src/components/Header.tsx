import React from "react";
import { Row, Col, Typography, Space } from "antd";
import a from "../assets/a.png";
import c from "../assets/c.svg";

const { Text } = Typography;

const Header: React.FC = () => {
  return (
    <Row
      justify="space-between"
      align="middle"
      style={{
        flex: "0 0 auto",
        marginBottom: "1vh",
        marginTop: "0vh",
      }}
    >
      <Col>
        <div style={{ display: "flex", gap: "3vw", alignItems: "center" }}>
          <img
            src={a}
            alt="Logo"
            style={{
              height: "clamp(8vh, 10vw, 14vh)",
              borderRadius: 8,
              objectFit: "cover",
            }}
          />
          <img
            src={c}
            alt="Logo"
            style={{
              width: "clamp(45vw, 50vw, 60vw)",
              borderRadius: 8,
              objectFit: "contain",
            }}
          />
        </div>
      </Col>
      <Col>
        <Space direction="vertical" align="end" size={0}>
          <Text
            style={{
              fontSize: "clamp(1.5vh, 2.5vw, 3vh)",
              color: "black",
              fontWeight: 600,
              whiteSpace: "normal",
              wordBreak: "break-word",
            }}
          >
            04:23 PM
          </Text>
          <Text
            style={{
              fontSize: "clamp(1.5vh, 2.5vw, 3vh)",
              color: "black",
              fontWeight: 600,
              whiteSpace: "normal",
              wordBreak: "break-word",
            }}
          >
            26 Sep
          </Text>
        </Space>
      </Col>
    </Row>
  );
};

export default Header;
