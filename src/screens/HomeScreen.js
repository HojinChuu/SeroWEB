import React from "react";
import { Image, Col } from "react-bootstrap";
import useWindowDimensions from "../hooks/useWindowDimensions";

const HomeScreen = () => {
  const { width } = useWindowDimensions();

  return (
    <div>
      <div>
        <button
          className="btn rounded"
          style={{ ...buttonStyle, display: width > 414 ? "none" : "" }}
        >
          <small>앱 다운로드</small>
        </button>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <video style={{ height: "100%", width: "100%" }} autoPlay loop muted>
          <source src="/image/homeVideo.mp4" type="video/mp4"></source>
        </video>
      </div>
      <div style={rowStyle}>
        <Col style={colStyle}>
          <Image
            src={
              width > 600 ? "/image/mainpage1.png" : "/image/mainpage1_sm.jpg"
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
              width > 600 ? "/image/mainpage2.png" : "/image/mainpage1_sm.jpg"
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

const buttonStyle = {
  position: "fixed",
  bottom: 20,
  right: 20,
  padding: 10,
  backgroundColor: "white",
  border: "1px solid gray",
  zIndex: 1000,
};

export default HomeScreen;
