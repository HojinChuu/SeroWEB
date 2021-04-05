import React from "react";
import { Card, Container } from "react-bootstrap";

const AboutScreen = () => {
  return (
    <Container>
      <Card style={titleStyle} id="aboutCard">
        <p>편지 보내기 설명서</p>
      </Card>
      <div className="row" style={{ marginBottom: "5%" }}>
        <div className="col col-xs-12 col-sm-12 col-md-4 col-lg-4 col-12">
          <Card style={{ width: "100%" }} id="aboutCard">
            <Card.Header className="aboutHeader pl-4 pr-4">01</Card.Header>
            <Card.Img src="/image/aboutImage1.png" />
            <Card.Body className="aboutBody">
              <Card.Text>
                세로엽서 앱을 통해 엽서를 작성한다. <br />
                음성 녹음 기능도 사용할 수 있습니다.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col col-xs-12 col-sm-12 col-md-4 col-lg-4 col-12">
          <Card style={{ width: "100%" }} id="aboutCard">
            <Card.Header className="aboutHeader pl-4 pr-4">02</Card.Header>
            <Card.Img src="/image/aboutImage2.png" />
            <Card.Body className="aboutBody">
              <Card.Text>
                받는 이의 전화번호 또는 주소를 입력 후 결제한다. <br />
                배송은 우체국 일반등기로 배송 금액은 1,000원 입니다.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col col-xs-12 col-sm-12 col-md-4 col-lg-4 col-12">
          <Card style={{ width: "100%" }} id="aboutCard">
            <Card.Header className="aboutHeader pl-4 pr-4">03</Card.Header>
            <Card.Img src="/image/aboutImage3.png" />
            <Card.Body className="aboutBody">
              <Card.Text>받는 이에게 연락이 오길 기다린다.</Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>

      <Card style={titleStyle} id="aboutCard">
        <p>편지 받기 설명서</p>
      </Card>
      <div className="row" style={{ marginBottom: "5%" }}>
        <div className="col col-xs-12 col-sm-12 col-md-4 col-lg-4 col-12">
          <Card style={{ width: "100%" }} id="aboutCard" className="pr-4 pl-4">
            <Card.Header className="aboutHeader">01</Card.Header>
            <Card.Img src="/image/aboutImage4.png" />
            <Card.Body className="aboutBody">
              <Card.Text>
                세로엽서, 소셜 임팩트 카드를 천천히 읽는다. <br />
                발신자가 누구인지 추측해본다.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col col-xs-12 col-sm-12 col-md-4 col-lg-4 col-12">
          <Card style={{ width: "100%" }} id="aboutCard" className="pr-4 pl-4">
            <Card.Header className="aboutHeader">02</Card.Header>
            <Card.Img src="/image/aboutImage5.png" />
            <Card.Body className="aboutBody">
              <Card.Text>
                엽서 왼쪽 하단의 QR코드를 스캔하여 <br />
                발신자를 확인한다.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col col-xs-12 col-sm-12 col-md-4 col-lg-4 col-12">
          <Card style={{ width: "100%" }} id="aboutCard" className="pr-4 pl-4">
            <Card.Header className="aboutHeader">03</Card.Header>
            <Card.Img src="/image/aboutImage6.png" />
            <Card.Body className="aboutBody">
              <Card.Text>
                동봉된 세로 쿠폰을 발신자에게 전해준다. <br />
                쿠폰의 내용은 랜덤으로 발송됩니다.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </Container>
  );
};

const titleStyle = {
  fontWeight: "500",
  fontSize: "28px",
  marginTop: "20px",
  textAlign: "center",
  marginBottom: "50px",
};

export default AboutScreen;
