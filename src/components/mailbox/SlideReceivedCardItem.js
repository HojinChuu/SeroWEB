import React, { useState, useEffect } from "react";
import { Row, Image, Col } from "react-bootstrap";
import Flippy, { FrontSide, BackSide } from "react-flippy";
import { SwiperSlide } from "swiper/react";
import { IMAGE_URL } from "../../config";
import showAlert from "../../utils/alert";

const SlideReceivedCardItem = ({ slideReceivedPost }) => {
  const [audio, setAudio] = useState(null);
  const [playing, setPlaying] = useState(true);

  useEffect(() => {
    if (slideReceivedPost.Post.poRecord !== "null") {
      setAudio(new Audio(IMAGE_URL + "/" + slideReceivedPost.Post.poRecord));
    }
  }, [slideReceivedPost]);

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
      <Col sm={12} md={12} lg={12} className="ml-1 mr-1 mb-4 mt-4">
        <div id="flipCardTitle">
          <button className="btn btn-block pr-4 pl-4 ml-2">
            <Row className="justify-content-between align-items-center">
              <Row className="align-items-center">
                <Image
                  src={IMAGE_URL + "/" + slideReceivedPost.Post.User.usPhoto}
                  width="25px"
                  height="25px"
                  roundedCircle
                />
                <span className="ml-2">
                  {slideReceivedPost.Post.User.usName}
                </span>
              </Row>
              <span>{slideReceivedPost.createdAt.slice(0, 10)}</span>
            </Row>
          </button>
        </div>
        <Flippy
          onClick={removeHandler}
          flipOnHover={false}
          flipOnClick={true}
          flipDirection="horizontal"
          style={{ width: "100%", height: "700px" }}
        >
          <FrontSide className="d-flex align-items-center">
            <i
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
              src={IMAGE_URL + "/" + slideReceivedPost.Post.poPhoto}
              width="100%"
              height="100%"
            />
          </FrontSide>
          <BackSide className="d-flex align-items-center">
            <Image
              src={IMAGE_URL + "/" + slideReceivedPost.Post.poContentPhoto}
              width="100%"
              height="100%"
            />
          </BackSide>
        </Flippy>
        <div>
          <button
            className="btn btn-block btn-light mt-3"
            onClick={soundHandler}
            disabled={slideReceivedPost.Post.poRecord === "null"}
          >
            <i
              className={
                slideReceivedPost.Post.poRecord === "null"
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

export default SlideReceivedCardItem;
