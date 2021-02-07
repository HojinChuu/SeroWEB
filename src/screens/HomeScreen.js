import React from "react";
import { Image, Row, Col } from "react-bootstrap";

const HomeScreen = () => {
  return (
    <div>
      <Row>
        <video style={{ height: "100%", width: "100%" }} autoPlay loop muted>
          <source src="/image/homeVideo.mp4" type="video/mp4"></source>
        </video>
      </Row>

      <Row style={rowStyle}>
        <Col md={4} style={colStyle} className="mt-5 pt-5">
          <div>세로엽서 기본 소개</div>
        </Col>
        <Col md={8} style={colStyle}>
          <Image
            src="/image/homeImage1.png"
            style={{ height: "100%", width: "100%" }}
          />
        </Col>
      </Row>

      <Row style={rowStyle}>
        <Col md={8} style={colStyle}>
          <Image
            src="/image/homeImage2.png"
            style={{ height: "100%", width: "100%" }}
          />
        </Col>
        <Col md={4} style={colStyle} className="mt-5 pt-5">
          소셜임팩트 카드 소개
        </Col>
      </Row>

      <Row style={{ backgroundColor: "#dedbdb" }}>
        <Image
          src="/image/homeImage3.png"
          style={{ height: "100%", width: "50%", margin: "0 auto" }}
        />
      </Row>
    </div>
  );
};
const rowStyle = {
  backgroundColor: "#F5F5F5",
};
const colStyle = {
  paddingLeft: 0,
  paddingRight: 0,
  textAlign: "center",
  fontSize: "30px",
};

export default HomeScreen;
