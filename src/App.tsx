
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










// import React from "react";
// import "./App.css";
// import WeatherApp from "./pages/WeatherApp";

// const App: React.FC = () => {
//   return (
//     <div className="weather-container">
//       <div className="weather-box">
//         <WeatherApp />
//       </div>
//     </div>
//   );
// };

// export default App;



// import React from "react";
// import { Row, Col, Typography, Space } from "antd";
// import { IoIosSunny } from "react-icons/io";
// import { BsCloudRain, BsCloudFog } from "react-icons/bs";
// import { RiSpeedUpLine } from "react-icons/ri";
// import { PiEyeBold } from "react-icons/pi";
// import a from "./assets/a.png";
// import b from "./assets/b.png";
// const { Text } = Typography;

// interface WeatherCardProps {
//   location: string;
//   distance: string;
//   icon: React.ReactNode;
//   condition: string;
//   visibility?: string;
//   windSpeed?: string;
//   feelsLike?: string;
//   centerFeels?: boolean;
// }

// const WeatherCard: React.FC<WeatherCardProps> = ({
//   location,
//   distance,
//   icon,
//   condition,
//   visibility,
//   windSpeed,
//   feelsLike,
//   centerFeels = false,
// }) => {
//   return (
//     <div style={{ width: "100%", marginBottom: "1rem", boxSizing: "border-box" }}>
//       <div
//         style={{
//           background: "#000E2A",
//           color: "#fff",
//           padding: "1rem",
//           borderRadius: "12px 12px 0 0",
//           boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
//         }}
//       >
//         <Row align="middle" justify="space-between">
//           <Col xs={12}>
//             <Space direction="vertical" size={2}>
//               <Text strong style={{ fontSize: "clamp(16px, 2vw, 25px)", color: "#fff" }}>
//                 {location}
//               </Text>
//               <Text style={{ fontSize: "clamp(14px, 1.5vw, 20px)", color: "#fff" }}>
//                 {distance}
//               </Text>
//             </Space>
//           </Col>
//           <Col xs={12} style={{ textAlign: "right" }}>
//             <Space direction="vertical" align="end" size={2}>
//               <span style={{ fontSize: "clamp(24px, 3vw, 42px)" }}>{icon}</span>
//               <Text strong style={{ fontSize: "clamp(10px, 1vw, 14px)", color: "#fff" }}>
//                 {condition}
//               </Text>
//             </Space>
//           </Col>
//         </Row>
//       </div>

//       {(visibility || windSpeed || feelsLike) && (
//         <div
//           style={{
//             background: "#D9E6FF",
//             padding: "0.8rem 1rem",
//             borderRadius: "0 0 12px 12px",
//             fontSize: "clamp(12px, 1vw, 16px)",
//             boxShadow: "0 2px 6px rgba(98, 50, 50, 0.1)",
//             textAlign: centerFeels ? "center" : "left",
//           }}
//         >
//           <Row justify={centerFeels ? "center" : "space-between"} align="top">
//             {visibility && !centerFeels && (
//               <Col>
//                 <Row gutter={6} align="top">
//                   <Col>
//                     <PiEyeBold
//                       style={{
//                         color: "#ff4d4f",
//                         marginTop: "10px",
//                         fontSize: "clamp(18px, 2vw, 25px)",
//                       }}
//                     />
//                   </Col>
//                   <Col>
//                     <Text
//                       style={{
//                         fontSize: "clamp(12px, 1vw, 16px)",
//                         color: "#FF3F3F",
//                         display: "block",
//                       }}
//                     >
//                       Low Visibility
//                     </Text>
//                     <Text style={{ fontSize: "clamp(12px, 1vw, 16px)", color: "#FF3F3F" }}>
//                       (3-broken lines)
//                     </Text>
//                   </Col>
//                 </Row>
//               </Col>
//             )}

//             {windSpeed && !centerFeels && (
//               <Col>
//                 <Row gutter={6} align="top">
//                   <Col>
//                     <RiSpeedUpLine
//                       style={{
//                         color: "#FF3F3F",
//                         marginTop: "10px",
//                         fontSize: "clamp(18px, 2vw, 25px)",
//                       }}
//                     />
//                   </Col>
//                   <Col>
//                     <Text
//                       style={{
//                         fontSize: "clamp(14px, 1.5vw, 18px)",
//                         color: "#FF3F3F",
//                         display: "block",
//                       }}
//                     >
//                       45-60
//                     </Text>
//                     <Text style={{ fontSize: "clamp(14px, 1.5vw, 18px)", color: "#FF3F3F" }}>
//                       km/h
//                     </Text>
//                   </Col>
//                 </Row>
//               </Col>
//             )}

//             {feelsLike && (
//               <Col>
//                 <Text
//                   strong
//                   style={{
//                     fontSize: "clamp(16px, 2vw, 23px)",
//                     color: "#000E2A",
//                   }}
//                 >
//                   Feels like: {feelsLike}
//                 </Text>
//               </Col>
//             )}
//           </Row>
//         </div>
//       )}
//     </div>
//   );
// };

// const WeatherApp: React.FC = () => {
//   return (
//     <div
//       style={{
//         width: "100%",
//         height: "100vh",  
//         background: "#FFFFFF",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         padding: 0,
//         margin: 0,
//         boxSizing: "border-box",
//         overflowX: "hidden",
//         overflowY: "auto",
//       }}
//     >
//       <div
//         style={{
//           width: "100%",
//           height: "100%",
//           background: "white",
//           padding: "1rem",
//           boxSizing: "border-box",
//         }}
//       >
      
//         <Row
//           justify="space-between"
//           align="middle"
//           style={{
//             background: "white",
//             padding: "0.8rem 1rem",
//             marginBottom: "0.5rem",
//           }}
//         >
//           <Col>
//             <Space align="center" size={6}>
//               <img
//                 src={a}
//                 alt="Logo"
//                 style={{
//                   width: "clamp(30px, 4vw, 40px)",
//                   height: "clamp(30px, 4vw, 40px)",
//                   borderRadius: 6,
//                   objectFit: "cover",
//                 }}
//               />
//               <Space align="center" size={4}>
//                 <img
//                   src={b}
//                   alt="Weather Icon"
//                   style={{
//                     width: "clamp(35px, 5vw, 50px)",
//                     height: "clamp(30px, 4vw, 40px)",
//                     borderRadius: 6,
//                     objectFit: "cover",
//                   }}
//                 />
//               </Space>
//               <Text
//                 style={{
//                   fontSize: "clamp(12px, 1.5vw, 15px)",
//                   marginLeft: 6,
//                   color: "black",
//                   fontWeight: "bold",
//                 }}
//               >
//                 Weatherwalay
//               </Text>
//             </Space>
//           </Col>
//           <Col>
//             <Space
//               direction="vertical"
//               align="end"
//               size={0}
//               style={{ lineHeight: 1 }}
//             >
//               <Text style={{ fontSize: "clamp(11px, 1vw, 13px)", color: "black", fontWeight: 500 }}>
//                 04:23 PM
//               </Text>
//               <Text style={{ fontSize: "clamp(10px, 1vw, 12px)", color: "black", fontWeight: 500 }}>
//                 26 Sep
//               </Text>
//             </Space>
//           </Col>
//         </Row>

       
//         <WeatherCard
//           location="SIAL-M"
//           distance="220 km"
//           icon={<BsCloudFog style={{ fontSize: "clamp(28px, 4vw, 40px)", color: "#fff" }} />}
//           condition="Dense fog"
//           visibility="Low Visibility"
//           windSpeed="45-60"
//         />
//         <WeatherCard
//           location="KLR-K"
//           distance="195 km"
//           icon={<BsCloudRain style={{ fontSize: "clamp(28px, 4vw, 40px)", color: "white" }} />}
//           condition="Very Heavy Rain with Winds"
//           feelsLike="34°C"
//           centerFeels={true}
//         />
//         <WeatherCard
//           location="BHERA"
//           distance="120 km"
//           icon={<IoIosSunny style={{ fontSize: "clamp(32px, 5vw, 45px)", color: "#faad14" }} />}
//           condition="Sunny"
//           feelsLike="40°C"
//           centerFeels={true}
//         />
//       </div>
//     </div>
//   );
// };

// export default WeatherApp;















// import React from "react";
// import { Row, Col, Typography, Space } from "antd";
// import { IoIosSunny } from "react-icons/io";
// import { BsCloudRain, BsCloudFog } from "react-icons/bs";
// import { RiSpeedUpLine } from "react-icons/ri";
// import { PiEyeBold } from "react-icons/pi";
// import a from "./a.png";
// import b from "./b.png";
// const { Text } = Typography;

// interface WeatherCardProps {
//   location: string;
//   distance: string;
//   icon: React.ReactNode;
//   condition: string;
//   visibility?: string;
//   windSpeed?: string;
//   feelsLike?: string;
//   centerFeels?: boolean;
// }

// const WeatherCard: React.FC<WeatherCardProps> = ({
//   location,
//   distance,
//   icon,
//   condition,
//   visibility,
//   windSpeed,
//   feelsLike,
//   centerFeels = false,
// }) => {
//   return (
//     <div style={{ width: "100%", marginBottom: 12, boxSizing: "border-box" }}>
//       <div
//         style={{
//           background: "#000E2A",
//           color: "#fff",
//           padding: "12px",
//           borderRadius: "12px 12px 0 0",
//           boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
//         }}
//       >
//         <Row align="middle" justify="space-between">
//           <Col xs={12}>
//             <Space direction="vertical" size={2}>
//               <Text strong style={{ fontSize: 25, color: "#fff" }}>
//                 {location}
//               </Text>
//               <Text style={{ fontSize: 20, color: "#fff" }}>{distance}</Text>
//             </Space>
//           </Col>
//           <Col xs={12} style={{ textAlign: "right" }}>
//             <Space direction="vertical" align="end" size={2}>
//               {icon}
//               <Text strong style={{ fontSize: 11, color: "#fff" }}>
//                 {condition}
//               </Text>
//             </Space>
//           </Col>
//         </Row>
//       </div>

//       {(visibility || windSpeed || feelsLike) && (
//         <div
//           style={{
//             background: "#D9E6FF",
//             padding: "8px 12px",
//             borderRadius: "0 0 12px 12px",
//             fontSize: 13,
//             boxShadow: "0 2px 6px rgba(98, 50, 50, 0.1)",
//             textAlign: centerFeels ? "center" : "left",
//           }}
//         >
//           <Row justify={centerFeels ? "center" : "space-between"} align="top">
//             {visibility && !centerFeels && (
//               <Col>
//                 <Row gutter={6} align="top">
//                   <Col>
//                     <PiEyeBold
//                       style={{
//                         color: "#ff4d4f",
//                         marginTop: "10px",
//                         fontSize: 25,
//                       }}
//                     />
//                   </Col>
//                   <Col>
//                     <Text
//                       style={{
//                         fontSize: 14,
//                         color: "#FF3F3F",
//                         display: "block",
//                       }}
//                     >
//                       Low Visibility
//                     </Text>
//                     <Text style={{ fontSize: 14, color: "#FF3F3F" }}>
//                       (3-broken lines)
//                     </Text>
//                   </Col>
//                 </Row>
//               </Col>
//             )}

//             {windSpeed && !centerFeels && (
//               <Col>
//                 <Row gutter={6} align="top">
//                   <Col>
//                     <RiSpeedUpLine
//                       style={{
//                         color: "#FF3F3F",
//                         marginTop: "10px",
//                         fontSize: 25,
//                       }}
//                     />
//                   </Col>
//                   <Col>
//                     <Text
//                       style={{
//                         fontSize: 16,
//                         color: "#FF3F3F",
//                         display: "block",
//                       }}
//                     >
//                       45-60
//                     </Text>
//                     <Text style={{ fontSize: 16, color: "#FF3F3F" }}>km/h</Text>
//                   </Col>
//                 </Row>
//               </Col>
//             )}

//             {feelsLike && (
//               <Col>
//                 <Text
//                   strong
//                   style={{
//                     fontSize: 23,
//                     color: feelsLike === "34°C" ? "#000E2A" : "#000E2A",
//                   }}
//                 >
//                   Feels like: {feelsLike}
//                 </Text>
//               </Col>
//             )}
//           </Row>
//         </div>
//       )}
//     </div>
//   );
// };

// const WeatherApp: React.FC = () => {
//   return (
//     <div
//       style={{
//         minHeight: "100vh",
//         background: "#FFFFFF",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         padding: "16px",
//         boxSizing: "border-box",
//       }}
//     >
//       <div
//         style={{
//           width: "25%",
//           maxWidth: "100%",
//           borderRadius: 16,
//           background: "white",
//           padding: "8px",
//           boxShadow: "0 4px 12px rgba(0,0,0,0.25)",
//           boxSizing: "border-box",
//         }}
//       >
//         <Row
//           justify="space-between"
//           align="middle"
//           style={{
//             background: "white",
//             borderRadius: 12,
//             padding: "8px 10px",
//             marginBottom: 1,
//           }}
//         >
//           <Col>
//             <Space align="center" size={6}>
//               <img
//                 src={a}
//                 alt="Logo"
//                 style={{
//                   width: 40,
//                   height: 40,
//                   borderRadius: 6,
//                   objectFit: "cover",
//                 }}
//               />
//               <Space align="center" size={4}>
//                 <img
//                   src={b}
//                   alt="Weather Icon"
//                   style={{
//                     width: 50,
//                     height: 40,
//                     borderRadius: 6,
//                     objectFit: "cover",
//                   }}
//                 />
//               </Space>
//               <Text
//                 style={{
//                   fontSize: 15,
//                   marginLeft: 6,
//                   color: "black",
//                   fontWeight: "bold",
//                 }}
//               >
//                 Weatherwalay
//               </Text>
//             </Space>
//           </Col>
//           <Col>
//             <Space
//               direction="vertical"
//               align="end"
//               size={0}
//               style={{ lineHeight: 1 }}
//             >
//               <Text style={{ fontSize: 13, color: "black", fontWeight: 500 }}>
//                 04:23 PM
//               </Text>
//               <Text style={{ fontSize: 12, color: "black", fontWeight: 500 }}>
//                 26 Sep
//               </Text>
//             </Space>
//           </Col>
//         </Row>

//         <WeatherCard
//           location="SIAL-M"
//           distance="220 km"
//           icon={<BsCloudFog style={{ fontSize: 32, color: "#fff" }} />}
//           condition="Dense fog"
//           visibility="Low Visibility"
//           windSpeed="45-60"
//         />
//         <WeatherCard
//           location="KLR-K"
//           distance="195 km"
//           icon={<BsCloudRain style={{ fontSize: 32, color: "white" }} />}
//           condition="Very Heavy Rain with Winds"
//           feelsLike="34°C"
//           centerFeels={true}
//         />
//         <WeatherCard
//           location="BHERA"
//           distance="120 km"
//           icon={<IoIosSunny style={{ fontSize: 42, color: "#faad14" }} />}
//           condition="Sunny"
//           feelsLike="40°C"
//           centerFeels={true}
//         />
//       </div>
//     </div>
//   );
// };

// export default WeatherApp;
























