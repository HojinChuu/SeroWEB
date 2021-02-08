import React, { useRef, useState, useEffect } from "react";
import { Row, Col, Image } from "react-bootstrap";
import Flippy, { FrontSide, BackSide } from "react-flippy";
import { IMAGE_URL } from "../../config";

const ReceivedCardItem = ({ receivedPost }) => {
  const sound = useRef(null);
  const [audio, setAudio] = useState(null);
  const [playing, setPlaying] = useState(true);

  useEffect(() => {
    if (receivedPost.Post.poRecord !== "null") {
      setAudio(new Audio(IMAGE_URL + "/" + receivedPost.Post.poRecord));
    }
  }, [receivedPost]);

  const soundHandler = () => {
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
      <div id="flipCardTitle">
        <button className="btn btn-block pr-4 pl-4 ml-2">
          <Row className="justify-content-between align-items-center">
            <Row className="align-items-center">
              <Image
                src={IMAGE_URL + "/" + receivedPost.Post.User.usPhoto}
                width="25px"
                height="25px"
                roundedCircle
              />
              <span className="ml-2">{receivedPost.Post.User.usName}</span>
            </Row>
            <span>{receivedPost.createdAt.slice(0, 10)}</span>
          </Row>
        </button>
      </div>
      <Flippy
        ref={sound}
        flipOnHover={false}
        flipOnClick={true}
        flipDirection="horizontal"
        style={{ width: "100%", height: "600px" }}
      >
        <FrontSide className="d-flex align-items-center">
          <Image
            src={IMAGE_URL + "/" + receivedPost.Post.poPhoto}
            width="100%"
          />
        </FrontSide>
        <BackSide className="d-flex align-items-center">
          <Image
            src={IMAGE_URL + "/" + receivedPost.Post.poContentPhoto}
            width="100%"
          />
        </BackSide>
      </Flippy>
      <div>
        <button
          className="btn btn-block btn-light mt-3"
          onClick={soundHandler}
          disabled={receivedPost.Post.poRecord === "null"}
        >
          <i
            className={
              receivedPost.Post.poRecord === "null"
                ? "fas fa-volume-off fa-2x"
                : playing
                ? "fas fa-volume-up fa-2x"
                : "fas fa-volume-mute fa-2x"
            }
          ></i>
        </button>
      </div>
    </Col>
  );
};

export default ReceivedCardItem;
