import React, { useState, useEffect } from "react";
import { Row, Col, Image } from "react-bootstrap";
import Flippy, { FrontSide, BackSide } from "react-flippy";
import { IMAGE_URL } from "../../config";

const SentCardItem = ({ sentPost, userInfo }) => {
  const [audio, setAudio] = useState(null);
  const [playing, setPlaying] = useState(true);

  useEffect(() => {
    if (sentPost.poRecord !== "null") {
      setAudio(new Audio(IMAGE_URL + "/" + sentPost.poRecord));
    }
  }, [sentPost]);

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
    <Col sm={10} md={6} lg={4} className="mt-3 mb-3">
      <Flippy
        flipOnHover={false}
        flipOnClick={true}
        flipDirection="horizontal"
        style={{ width: "100%" }}
      >
        <FrontSide className="d-flex align-items-center">
          <Image
            src={IMAGE_URL + "/" + sentPost.poPhoto}
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
            disabled={sentPost.poRecord === "null"}
          >
            <Image
              src={
                sentPost.poRecord === "null"
                  ? "/image/sound_none.png"
                  : playing
                  ? "/image/sound_on.png"
                  : "/image/sound_off.png"
              }
              width={sentPost.poRecord === "null" ? "20px" : "30px"}
            />
          </button>
          <Image
            src={IMAGE_URL + "/" + sentPost.poContentPhoto}
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
              <span className="ml-1">{userInfo.usName}</span>
            </Row>
            <span>{sentPost.createdAt.slice(2, 10).replaceAll("-", ".")}</span>
          </Row>
        </button>
      </div>
    </Col>
  );
};

export default SentCardItem;
