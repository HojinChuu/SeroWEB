import React from "react";
import { Image, Col } from "react-bootstrap";
import useWindowDimensions from "../hooks/useWindowDimensions";

const HomeScreen = () => {
  const { width } = useWindowDimensions();
  return (
    <div>
      <div>
        <button
          onClick={() =>
            (window.location =
              "https://apps.apple.com/kr/app/trello/id1278508951?mt=12")
          }
          className="btn rounded"
          style={{ ...buttonStyle, display: width > 414 ? "none" : "" }}
        >
          <Image src="/image/downloadBtn.png" width="100" />
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
              width > 600 ? "/image/mainpage2.png" : "/image/mainpage2_sm.png"
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
          src={
            width > 600 ? "/image/homeImage3.png" : "/image/mainpage3_sm.png"
          }
          style={
            width > 600
              ? { height: "100%", width: "50%", margin: "0 auto" }
              : { height: "100%", width: "100%" }
          }
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
  position: "absolute",
  bottom: -80,
  right: 0,
  border: "none",
  outline: "none",
  boxShadow: "none",
  zIndex: 1000,
};

export default HomeScreen;
