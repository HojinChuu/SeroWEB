import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Modal, Button, Image, Row, Col } from "react-bootstrap";
import Flippy, { FrontSide, BackSide } from "react-flippy";
import { IMAGE_URL } from "../../config";

const RefImageModal = ({ show, onHide }) => {
  return (
    <Modal centered show={show} onHide={onHide} keyboard={false}>
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body className="pl-5 pr-5">
        <Row className="justify-content-center cardContainer">
          <Col>
            <Flippy
              flipOnHover={false}
              flipOnClick={true}
              flipDirection="horizontal"
              style={{ width: "100%" }}
            >
              <FrontSide className="d-flex align-items-center">
                <Image
                  src={IMAGE_URL + "/" + "post/3/20210301140405poPhoto.png"}
                  width="100%"
                  height="100%"
                />
              </FrontSide>
              <BackSide className="d-flex align-items-center">
                {/* <button
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
              </button> */}
                <Image
                  src={IMAGE_URL + "/" + "post/3/20210301140405poPhoto.png"}
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
                    <span className="ml-1">asdfas</span>
                  </Row>
                  <span>asdf</span>
                </Row>
              </button>
            </div>
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
  );
};

export default RefImageModal;
