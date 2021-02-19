import React, { useState, useEffect } from "react";
import { Row, Image, Col } from "react-bootstrap";
import Flippy, { FrontSide, BackSide } from "react-flippy";
import { SwiperSlide } from "swiper/react";
import { IMAGE_URL } from "../../config";
import showAlert from "../../utils/alert";

const SlideSentCardItem = ({ slideSentPost, userInfo }) => {
  const [audio, setAudio] = useState(null);
  const [playing, setPlaying] = useState(true);

  useEffect(() => {
    if (slideSentPost.poRecord !== "null") {
      setAudio(new Audio(IMAGE_URL + "/" + slideSentPost.poRecord));
    }
  }, [slideSentPost]);

  const soundHandler = () => {
    setPlaying(!playing);
    if (playing) {
      audio.play();
    } else {
      audio.pause();
      audio.currentTime = 0;
    }
  };

  const removeHandler = (e) => {
    e.stopPropagation();
    showAlert.error("", "삭제하시겠어요?", true, "Yes");
  };

  return (
    <SwiperSlide className="pl-1 pr-1">
      <Col sm={11} md={12} lg={12} className="mt-3 mb-3">
        <div id="flipCardTitle">
          <button className="btn btn-block pr-4 pl-4 ml-2">
            <Row className="justify-content-between align-items-center">
              <Row className="align-items-center">
                <Image
                  src={IMAGE_URL + "/" + userInfo.usPhoto}
                  width="25px"
                  height="25px"
                  roundedCircle
                />
                <span className="ml-2">{userInfo.usName}</span>
              </Row>
              <span>{slideSentPost.createdAt.slice(0, 10)}</span>
            </Row>
          </button>
        </div>
        <Flippy
          flipOnHover={false}
          flipOnClick={true}
          flipDirection="horizontal"
          style={{ width: "100%", height: "700px" }}
        >
          <FrontSide className="d-flex align-items-center">
            <i
              onClick={removeHandler}
              className="fas fa-times"
              style={{
                position: "absolute",
                top: 0,
                right: 0,
                padding: 10,
                color: "grey",
              }}
            ></i>
            <Image
              src={IMAGE_URL + "/" + slideSentPost.poPhoto}
              width="100%"
              height="100%"
            />
          </FrontSide>
          <BackSide className="d-flex align-items-center">
            <Image
              src={IMAGE_URL + "/" + slideSentPost.poContentPhoto}
              width="100%"
              height="100%"
            />
          </BackSide>
        </Flippy>
        <div>
          <button
            className="btn btn-block btn-light mt-3"
            onClick={soundHandler}
            disabled={slideSentPost.poRecord === "null"}
          >
            <i
              className={
                slideSentPost.poRecord === "null"
                  ? "fas fa-volume-off fa-2x"
                  : playing
                  ? "fas fa-volume-up fa-2x"
                  : "fas fa-volume-mute fa-2x"
              }
            ></i>
          </button>
        </div>
      </Col>
    </SwiperSlide>
  );
};

export default SlideSentCardItem;
