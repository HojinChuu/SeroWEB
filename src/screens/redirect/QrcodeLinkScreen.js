import React, { useState } from "react";
import { Card, Container, Row } from "react-bootstrap";

const QrcodeLinkScreen = () => {
  const [sound, setSound] = useState(true);

  const soundHandler = () => {
    setSound(!sound);
    console.log("sound");
  };

  const imageName = sound ? "fas fa-volume-up" : "fas fa-volume-mute";
  return (
    <Container>
      <Row className="justify-content-lg-around mt-5">
        <Card className="shadow" style={{ border: "none" }}>
          <Card.Img src="/image/no-image.png" height="700px" />
        </Card>
        <Card className="shadow" style={{ border: "none" }}>
          <Card.Img src="/image/no-image.png" height="0px" />
        </Card>
      </Row>
      <Row className="justify-content-lg-center mt-5">
        <div className="btn btn-circle btn-xl" onClick={soundHandler}>
          <i className={imageName + " fa-4x"}></i>
        </div>
      </Row>
      <Row className="justify-content-lg-center mt-4">
        <button className="btn btn-dark btn-lg rounded btn-xl">
          <span style={{ fontSize: "14px" }}>내 엽서에 추가하기</span>
        </button>
      </Row>
    </Container>
  );
};

export default QrcodeLinkScreen;
