import React, { useState, useEffect } from "react";
import { Row, Image, Col } from "react-bootstrap";
import Flippy, { FrontSide, BackSide } from "react-flippy";
import { SwiperSlide } from "swiper/react";
import { IMAGE_URL } from "../../config";

const SlideSentCardItem = ({ slideSentPost, userInfo }) => {
  const [audio, setAudio] = useState(null);
  const [playing, setPlaying] = useState(true);

  useEffect(() => {
    if (slideSentPost.poRecord !== "null") {
      setAudio(new Audio(IMAGE_URL + "/" + slideSentPost.poRecord));
    }
  }, [slideSentPost]);

  const soundHandler = (e) => {
    e.stopPropagation();
    setPlaying(!playing);
    if (playing) {
      audio.play();
    } else {
      audio.pause();
      audio.currentTime = 0;
    }
  };

  return (
    <SwiperSlide className="pl-1 pr-1">
      <Col sm={11} md={12} lg={12} className="mt-3 mb-3">
        <Flippy
          flipOnHover={false}
          flipOnClick={true}
          flipDirection="horizontal"
          style={{ width: "100%" }}
        >
          <FrontSide className="d-flex align-items-center">
            <Image
              src={IMAGE_URL + "/" + slideSentPost.poPhoto}
              width="100%"
              height="100%"
            />
          </FrontSide>
          <BackSide className="d-flex align-items-center">
            <button
              id="soundBtn"
              onClick={soundHandler}
              className="btn"
              style={{ position: "absolute", bottom: 10, right: 15 }}
              disabled={slideSentPost.poRecord === "null"}
            >
              <Image
                src={
                  slideSentPost.poRecord === "null"
                    ? "/image/sound_none.png"
                    : playing
                    ? "/image/sound_on.png"
                    : "/image/sound_off.png"
                }
                width={slideSentPost.poRecord === "null" ? "20px" : "30px"}
              />
            </button>
            <Image
              src={IMAGE_URL + "/" + slideSentPost.poContentPhoto}
              width="100%"
              height="100%"
            />
          </BackSide>
        </Flippy>
        <div id="flipCardTitle">
          <button className="btn btn-block pr-4 pl-4 ml-2 mt-2">
            <Row className="justify-content-between align-items-center">
              <Row className="align-items-center">
                <span>보낸이:</span>
                <span className="ml-2">{userInfo.usName}</span>
              </Row>
              <span>{slideSentPost.createdAt.slice(0, 10)}</span>
            </Row>
          </button>
        </div>
      </Col>
    </SwiperSlide>
  );
};

export default SlideSentCardItem;
