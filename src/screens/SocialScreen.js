import React, { Fragment } from "react";
import { Card, Container, Image } from "react-bootstrap";
import useWindowDimensions from "../hooks/useWindowDimensions";

const SocialScreen = () => {
  const { width } = useWindowDimensions();

  return (
    <Container>
      <div className="row justify-content-center" style={distanceStyle}>
        <Card style={titleStyle}>
          <Image
            src="/image/socialTitle.png"
            style={width > 767 ? { width: "100%" } : { width: "80%" }}
            className="m-auto"
          />
        </Card>
      </div>
      <div className="row justify-content-center" style={distanceStyle}>
        <Card className="col-md-5 col-sm-8" id="socialCardImage">
          <Card.Img
            src="/image/socialImage1.png"
            style={width > 576 ? { width: "100%" } : { width: "80%" }}
            className="m-auto"
          />
        </Card>
        <div
          className="d-flex col-md-5 col-sm-10"
          id="socialCardText"
          style={width < 767 ? { marginTop: "30px", paddingLeft: 0 } : {}}
        >
          <Card className="align-self-center" style={{ paddingLeft: "15%" }}>
            <Card.Img src="/image/socialSubtitle1.png" />
            <Card.Body>
              <Card.Text style={width < 767 ? { fontSize: "13px" } : {}}>
                졸업 후 4번의 채용 시즌, 더 이상 버티기 힘들어요. <br></br>
                정말 씩씩하다고 자부했는데 제 자신이 너무 불쌍해요. <br></br>
                훌훌 털고 다시 도전하는 것 자체가 힘들어요. <br></br>
                맛있는 것을 먹어도, 친구와 노는것도 즐겁지가 않네요. <br></br>
                매일 울면서 잠드는데 끝이 안 보여요. <br></br>
              </Card.Text>
              <p style={width < 767 ? { fontSize: "13px" } : {}}>
                <b>저는 이 세상에 필요한 존재일까요?</b>
              </p>
            </Card.Body>
          </Card>
        </div>
      </div>
      <div className="row justify-content-center" style={distanceStyle}>
        {width > 767 ? (
          <Fragment>
            <div
              className="d-flex col-md-5 col-sm-10"
              id="socialCardText"
              style={width < 767 ? { marginTop: "30px", paddingLeft: 0 } : {}}
            >
              <Card
                className="align-self-center"
                style={{ paddingRight: "15%" }}
              >
                <Card.Img src="/image/socialSubtitle2.png" />
                <Card.Body>
                  <Card.Text>
                    전신 보호복에 이중 장갑, 덧신, N95 마스크, 얼굴 보호막{" "}
                    <br></br>
                    까지 통풍이 거의 안돼 산소공급장치도 달려있어요. <br></br>
                    피부 곳곳이 짓무를 수 밖에 없어요. 내 몸도 힘들지만{" "}
                    <br></br>
                    가장 힘든 점은 치료약도 제대로 쓰지 못하고 사망하는{" "}
                    <br></br>
                    환자를 보는 거예요. <br></br>
                  </Card.Text>
                  <p>
                    <b>해야만 하는 일이지만, 정말 그만두고 싶어요.</b>
                  </p>
                </Card.Body>
              </Card>
            </div>
            <Card className="col-md-5 col-sm-8" id="socialCardImage">
              <Card.Img src="/image/socialImage2.png" />
            </Card>
          </Fragment>
        ) : (
          <Fragment>
            <Card className="col-md-5 col-sm-8" id="socialCardImage">
              <Card.Img
                src="/image/socialImage2.png"
                style={width < 576 ? { width: "80%" } : { width: "100%" }}
                className="m-auto"
              />
            </Card>
            <div
              className="d-flex col-md-5 col-sm-10"
              id="socialCardText"
              style={width < 767 ? { marginTop: "30px", paddingLeft: 0 } : {}}
            >
              <Card
                className="align-self-center"
                style={{ paddingLeft: "15%" }}
              >
                <Card.Img src="/image/socialSubtitle2.png" />
                <Card.Body>
                  <Card.Text style={{ fontSize: "13px" }}>
                    전신 보호복에 이중 장갑, 덧신, N95 마스크, 얼굴 보호막{" "}
                    <br></br>
                    까지 통풍이 거의 안돼 산소공급장치도 달려있어요. <br></br>
                    피부 곳곳이 짓무를 수 밖에 없어요. 내 몸도 힘들지만{" "}
                    <br></br>
                    가장 힘든 점은 치료약도 제대로 쓰지 못하고 사망하는{" "}
                    <br></br>
                    환자를 보는 거예요. <br></br>
                  </Card.Text>
                  <p style={{ fontSize: "13px" }}>
                    <b>해야만 하는 일이지만, 정말 그만두고 싶어요.</b>
                  </p>
                </Card.Body>
              </Card>
            </div>
          </Fragment>
        )}
      </div>
      <div className="row justify-content-center" style={distanceStyle}>
        <Card className="col-md-5 col-sm-8" id="socialCardImage">
          <Card.Img
            src="/image/socialImage3.png"
            style={width > 576 ? { width: "100%" } : { width: "80%" }}
            className="m-auto"
          />
        </Card>
        <div
          className="d-flex col-md-5 col-sm-10"
          id="socialCardText"
          style={width < 767 ? { marginTop: "30px", paddingLeft: 0 } : {}}
        >
          <Card className="align-self-center" style={{ paddingLeft: "15%" }}>
            <Card.Img src="/image/socialSubtitle3.png" />
            <Card.Body>
              <Card.Text style={width < 767 ? { fontSize: "13px" } : {}}>
                코로나로 손님이 없어도 너무 없어서 대출을 받았어요. <br></br>
                하지만 곧바로 사회적 거리두기가 시행됐어요. 묻지도 <br></br>
                따지지도 않고 바로 문 닫았어요. <br></br>
                돈보다 손님의 건강이 더 중요하니까요. 하지만 임대료, <br></br>
                전기세, 인건비, 보험비에 고정비용… <br></br>
              </Card.Text>
              <p style={width < 767 ? { fontSize: "13px" } : {}}>
                <b>남은 대출은 어찌 갚아야 할지 깜깜합니다.</b>
              </p>
            </Card.Body>
          </Card>
        </div>
      </div>
      <div
        className={
          width > 767
            ? "row pt-5 justify-content-center"
            : "row justify-content-center"
        }
        style={distanceStyle}
      >
        <Card id="socialCardImage" style={{ width: "80%" }}>
          <Card.Img
            src={
              width > 767
                ? "/image/socialImage4.png"
                : "/image/socialImage5.png"
            }
            style={
              width > 767
                ? { width: "100%" }
                : width > 576
                ? { width: "80%" }
                : { width: "92%" }
            }
            className="m-auto"
          />
          <Card.Img
            style={
              width > 767
                ? { width: "30%", marginTop: "70px" }
                : width > 576
                ? { width: "50%", marginTop: "30px", marginLeft: "50px" }
                : { width: "65%", marginTop: "30px", marginLeft: "22px" }
            }
            src="/image/socialSubtitle4.png"
          />
          <Card.Body
            id="socialLastCard"
            style={
              width > 767
                ? {}
                : width > 576
                ? { marginLeft: "50px" }
                : { marginLeft: "22px" }
            }
          >
            <Card.Text style={width < 767 ? { fontSize: "13px" } : {}}>
              힘들어하고 있는 소중한 사람들에게 엄지 챌린지와 함께 안부를
              전해주세요. <br></br>조금은 어이없을 수도, 또 조금은 하찮을 수도
              있지만 아무렴 어때요.<br></br> 지친 일상 속 사소한 웃음으로 오늘
              하루를 견딜 수 있는 힘이 될 거예요.
            </Card.Text>
            <p style={width < 767 ? { fontSize: "13px" } : {}}>
              <b>코로나 블루를 극복하기 가장 좋은 방법은 ‘챙김’ 이거든요. </b>
            </p>
          </Card.Body>
        </Card>
      </div>
    </Container>
  );
};

const titleStyle = {
  width: "40rem",
  fontWeight: "500",
  fontSize: "28px",
  marginTop: "20px",
  backgroundColor: "transparent",
  border: "none",
};

const distanceStyle = {
  paddingBottom: "12%",
};

export default SocialScreen;
