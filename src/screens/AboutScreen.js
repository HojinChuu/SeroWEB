import React from "react";
import { Image, Col } from "react-bootstrap";

const AboutScreen = () => {
  return (
    <div>
      <div style={rowStyle}>
        <Col style={colStyle}>
          <Image src="/image/aboutImage1.png" height="100%" width="100%" />
        </Col>
      </div>
      <div style={rowStyle}>
        <Col style={colStyle}>
          <Image src="/image/aboutImage2.png" height="100%" width="100%" />
        </Col>
      </div>
    </div>
  );
};

const rowStyle = {
  display: "flex",
  flexWrap: "wrap",
};

const colStyle = {
  textAlign: "center",
  fontSize: "30px",
};

export default AboutScreen;
