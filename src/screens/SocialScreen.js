import React from "react";
import { Card, Container } from "react-bootstrap";

const SocialScreen = () => {
  return (
    <Container>
      <div style={containerStyle}>
        <Card style={titleStyle} id="socialCard">
          <p>4월 이웃이야기, Covid-19 Blue</p>
        </Card>
      </div>
      <div style={containerStyle}>
        <Card style={{ width: "40rem" }} id="socialCard">
          <Card.Header className="socialHeader">
            취업준비생, 나는 쓸모 없는 존재인 것 같아요.
          </Card.Header>
          <Card.Img src="/image/socialImage1.png" />
          <Card.Body className="socialBody">
            <Card.Title>
              20대의 70.9%는 ‘코로나 블루’를 겪고 있습니다.
            </Card.Title>
            <Card.Text>
              졸업 후 4번의 채용 시즌, 더 이상 버티기 힘들어요. 정말 씩씩하다고
              자부했는데 제 자신이 너무 불쌍해요. 훌훌 털고 다시 도전하는 것
              자체가 힘들어요. 맛있는 것을 먹어도, 친구와 노는 것도 즐겁지가
              않네요. 매일 울면서 잠드는데 끝이 안 보여요. 저는 이 세상에 필요한
              존재일까요?
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      <div style={containerStyle}>
        <Card style={{ width: "40rem" }} id="socialCard">
          <Card.Header className="socialHeader">
            의료진, 월화수목금금금.
          </Card.Header>
          <Card.Img src="/image/socialImage2.png" />
          <Card.Body className="socialBody">
            <Card.Title>
              방역 최전방 의료진 2명 중 1명 ‘자살 위험’ 상태입니다.
            </Card.Title>
            <Card.Text>
              전신 보호복에 이중 장갑, 덧신, N95 마스크, 얼굴 보호막까지 통풍이
              거의 안돼 산소공급장치도 달려있어요. 피부 곳곳이 짓무를 수 밖에
              없어요. 내 몸도 힘들지만 가장 힘든 점은 치료약도 제대로 쓰지
              못하고 사망하는 환자를 보는 거예요. 해야만 하는 일이지만, 정말
              그만두고 싶어요.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      <div style={containerStyle}>
        <Card style={{ width: "40rem" }} id="socialCard">
          <Card.Header className="socialHeader">
            소상공인, 망했습니다.
          </Card.Header>
          <Card.Img src="/image/socialImage3.png" />
          <Card.Body className="socialBody">
            <Card.Title>소상공인 72.4%는 우울감이 늘었습니다.</Card.Title>
            <Card.Text>
              코로나로 손님이 없어도 너무 없어서 대출을 받았어요. 하지만 곧바로
              사회적 거리두기가 시행됐어요. 묻지도 따지지도 않고 바로 문
              닫았어요. 돈보다 손님의 건강이 더 중요하니까요. 하지만 임대료,
              전기세, 인건비, 보험비에 고정비용… 남은 대출은 어찌 갚아야 할지
              깜깜합니다.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      <div style={containerStyle} className="pb-5">
        <Card style={{ width: "40rem" }} id="socialCard">
          <Card.Header className="socialHeader">
            함께해요, 엄지 챌린지.
          </Card.Header>
          <Card.Img src="/image/socialImage4.png" />
          <Card.Body className="socialBody">
            <Card.Title>
              COVID-19 Blue를 극복하는 가장 좋은 방법은 ‘챙김’ 입니다.
            </Card.Title>
            <Card.Text>
              힘들어하고 있는 소중한 사람들에게 엄지 챌린지와 함께 안부를
              전해주세요. 지친 일상 속 사소한 웃음으로 오늘 하루를 견딜 수 있는
              힘이 될 거예요.
            </Card.Text>
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
};

const containerStyle = {
  display: "flex",
  justifyContent: "center",
  marginBottom: "4%",
};

export default SocialScreen;
