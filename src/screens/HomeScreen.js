import React from "react";
import { Image, Col } from "react-bootstrap";
import useWindowDimensions from "../hooks/useWindowDimensions";

const HomeScreen = () => {
  const { width } = useWindowDimensions();

  return (
    <div>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <video style={{ height: "100%", width: "100%" }} autoPlay loop muted>
          <source src="/image/homeVideo.mp4" type="video/mp4"></source>
        </video>
      </div>
      <div style={rowStyle}>
        <Col style={colStyle}>
          <Image
            src={
              width > 600 ? "/image/mainpage1.png" : "/image/mainpage_sm1.jpg"
            }
            height="100%"
            width="100%"
          />
        </Col>
      </div>
      <div style={rowStyle}>
        <Col style={colStyle}>
          <Image
            src={
              width > 600 ? "/image/mainpage2.png" : "/image/mainpage_sm1.jpg"
            }
            height="100%"
            width="100%"
          />
        </Col>
      </div>
      <div
        style={{
          backgroundColor: "#dedbdb",
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        <Image
          src="/image/homeImage3.png"
          style={{ height: "100%", width: "50%", margin: "0 auto" }}
        />
      </div>
    </div>
  );
};

const rowStyle = {
  backgroundColor: "#F5F5F5",
  display: "flex",
  flexWrap: "wrap",
};

const colStyle = {
  paddingLeft: 0,
  paddingRight: 0,
  textAlign: "center",
  fontSize: "30px",
};

export default HomeScreen;
