import React, { useRef, useState } from "react";
import { Row, Col, Image, Container } from "react-bootstrap";
import Flippy, { FrontSide, BackSide } from "react-flippy";

const MailboxScreen = () => {
  const backButton = useRef(null);
  const [playing, setPlaying] = useState(true);

  const soundHandler = (e) => {
    console.log(e.target);
    setPlaying(!playing);
  };

  return (
    <Container>
      <Row className="justify-content-center cardContainer mb-5">
        <Col sm={10} md={6} lg={4} className="pb-5 pt-5">
          <div id="flipCardTitle">
            <button className="btn btn-block pr-4 pl-4">
              <Row className="justify-content-between align-items-center">
                <Row md={2} className="align-items-center">
                  <Image src="/image/logo.png" width="30px" />
                  <span>Chuhojin</span>
                </Row>
                <span>2020-10-20</span>
              </Row>
            </button>
          </div>
          <Flippy
            flipOnHover={false}
            flipOnClick={true}
            flipDirection="horizontal"
            ref={backButton}
            style={{ width: "100%", height: "600px" }}
          >
            <FrontSide className="d-flex align-items-center">
              <Image src="/image/homeImage3.png" width="100%" />
            </FrontSide>
            <BackSide className="d-flex align-items-center">
              <Image src="/image/homeImage1.png" width="100%" />
            </BackSide>
          </Flippy>
          <div>
            <button
              className="btn btn-block btn-light mt-3"
              onClick={soundHandler}
            >
              <i
                className={
                  playing
                    ? "fas fa-volume-up fa-2x"
                    : "fas fa-volume-mute fa-2x"
                }
              ></i>
            </button>
          </div>
        </Col>
        <Col sm={10} md={6} lg={4} className="pb-5 pt-5">
          <div id="flipCardTitle">
            <button className="btn btn-block pr-4 pl-4">
              <Row className="justify-content-between align-items-center">
                <Row md={2} className="align-items-center">
                  <Image src="/image/logo.png" width="30px" />
                  <span>Chuhojin</span>
                </Row>
                <span>2020-10-20</span>
              </Row>
            </button>
          </div>
          <Flippy
            flipOnHover={false}
            flipOnClick={true}
            flipDirection="horizontal"
            ref={backButton}
            style={{ width: "100%", height: "600px" }}
          >
            <FrontSide className="d-flex align-items-center">
              <Image src="/image/homeImage3.png" width="100%" />
            </FrontSide>
            <BackSide className="d-flex align-items-center">
              <Image src="/image/homeImage1.png" width="100%" />
            </BackSide>
          </Flippy>
          <div>
            <button
              className="btn btn-block btn-light mt-3"
              onClick={soundHandler}
            >
              <i
                className={
                  playing
                    ? "fas fa-volume-up fa-2x"
                    : "fas fa-volume-mute fa-2x"
                }
              ></i>
            </button>
          </div>
        </Col>
        <Col sm={10} md={6} lg={4} className="pb-5 pt-5">
          <div id="flipCardTitle">
            <button className="btn btn-block pr-4 pl-4">
              <Row className="justify-content-between align-items-center">
                <Row md={2} className="align-items-center">
                  <Image src="/image/logo.png" width="30px" />
                  <span>Chuhojin</span>
                </Row>
                <span>2020-10-20</span>
              </Row>
            </button>
          </div>
          <Flippy
            flipOnHover={false}
            flipOnClick={true}
            flipDirection="horizontal"
            ref={backButton}
            style={{ width: "100%", height: "600px" }}
          >
            <FrontSide className="d-flex align-items-center">
              <Image src="/image/homeImage3.png" width="100%" />
            </FrontSide>
            <BackSide className="d-flex align-items-center">
              <Image src="/image/homeImage1.png" width="100%" />
            </BackSide>
          </Flippy>
          <div>
            <button
              className="btn btn-block btn-light mt-3"
              onClick={soundHandler}
            >
              <i
                className={
                  playing
                    ? "fas fa-volume-up fa-2x"
                    : "fas fa-volume-mute fa-2x"
                }
              ></i>
            </button>
          </div>
        </Col>
        <Col sm={10} md={6} lg={4} className="pb-5 pt-5">
          <div id="flipCardTitle">
            <button className="btn btn-block pr-4 pl-4">
              <Row className="justify-content-between align-items-center">
                <Row md={2} className="align-items-center">
                  <Image src="/image/logo.png" width="30px" />
                  <span>Chuhojin</span>
                </Row>
                <span>2020-10-20</span>
              </Row>
            </button>
          </div>
          <Flippy
            flipOnHover={false}
            flipOnClick={true}
            flipDirection="horizontal"
            ref={backButton}
            style={{ width: "100%", height: "600px" }}
          >
            <FrontSide className="d-flex align-items-center">
              <Image src="/image/homeImage3.png" width="100%" />
            </FrontSide>
            <BackSide className="d-flex align-items-center">
              <Image src="/image/homeImage1.png" width="100%" />
            </BackSide>
          </Flippy>
          <div>
            <button
              className="btn btn-block btn-light mt-3"
              onClick={soundHandler}
            >
              <i
                className={
                  playing
                    ? "fas fa-volume-up fa-2x"
                    : "fas fa-volume-mute fa-2x"
                }
              ></i>
            </button>
          </div>
        </Col>
        <Col sm={10} md={6} lg={4} className="pb-5 pt-5">
          <div id="flipCardTitle">
            <button className="btn btn-block pr-4 pl-4">
              <Row className="justify-content-between align-items-center">
                <Row md={2} className="align-items-center">
                  <Image src="/image/logo.png" width="30px" />
                  <span>Chuhojin</span>
                </Row>
                <span>2020-10-20</span>
              </Row>
            </button>
          </div>
          <Flippy
            flipOnHover={false}
            flipOnClick={true}
            flipDirection="horizontal"
            ref={backButton}
            style={{ width: "100%", height: "600px" }}
          >
            <FrontSide className="d-flex align-items-center">
              <Image src="/image/homeImage3.png" width="100%" />
            </FrontSide>
            <BackSide className="d-flex align-items-center">
              <Image src="/image/homeImage1.png" width="100%" />
            </BackSide>
          </Flippy>
          <div>
            <button
              className="btn btn-block btn-light mt-3"
              onClick={soundHandler}
            >
              <i
                className={
                  playing
                    ? "fas fa-volume-up fa-2x"
                    : "fas fa-volume-mute fa-2x"
                }
              ></i>
            </button>
          </div>
        </Col>
        <Col sm={10} md={6} lg={4} className="pb-5 pt-5">
          <div id="flipCardTitle">
            <button className="btn btn-block pr-4 pl-4">
              <Row className="justify-content-between align-items-center">
                <Row md={2} className="align-items-center">
                  <Image src="/image/logo.png" width="30px" />
                  <span>Chuhojin</span>
                </Row>
                <span>2020-10-20</span>
              </Row>
            </button>
          </div>
          <Flippy
            flipOnHover={false}
            flipOnClick={true}
            flipDirection="horizontal"
            ref={backButton}
            style={{ width: "100%", height: "600px" }}
          >
            <FrontSide className="d-flex align-items-center">
              <Image src="/image/homeImage3.png" width="100%" />
            </FrontSide>
            <BackSide className="d-flex align-items-center">
              <Image src="/image/homeImage1.png" width="100%" />
            </BackSide>
          </Flippy>
          <div>
            <button
              className="btn btn-block btn-light mt-3"
              onClick={soundHandler}
            >
              <i
                className={
                  playing
                    ? "fas fa-volume-up fa-2x"
                    : "fas fa-volume-mute fa-2x"
                }
              ></i>
            </button>
          </div>
        </Col>
        <Col sm={10} md={6} lg={4} className="pb-5 pt-5">
          <div id="flipCardTitle">
            <button className="btn btn-block pr-4 pl-4">
              <Row className="justify-content-between align-items-center">
                <Row md={2} className="align-items-center">
                  <Image src="/image/logo.png" width="30px" />
                  <span>Chuhojin</span>
                </Row>
                <span>2020-10-20</span>
              </Row>
            </button>
          </div>
          <Flippy
            flipOnHover={false}
            flipOnClick={true}
            flipDirection="horizontal"
            ref={backButton}
            style={{ width: "100%", height: "600px" }}
          >
            <FrontSide className="d-flex align-items-center">
              <Image src="/image/homeImage3.png" width="100%" />
            </FrontSide>
            <BackSide className="d-flex align-items-center">
              <Image src="/image/homeImage1.png" width="100%" />
            </BackSide>
          </Flippy>
          <div>
            <button
              className="btn btn-block btn-light mt-3"
              onClick={soundHandler}
            >
              <i
                className={
                  playing
                    ? "fas fa-volume-up fa-2x"
                    : "fas fa-volume-mute fa-2x"
                }
              ></i>
            </button>
          </div>
        </Col>
        <Col sm={10} md={6} lg={4} className="pb-5 pt-5">
          <div id="flipCardTitle">
            <button className="btn btn-block pr-4 pl-4">
              <Row className="justify-content-between align-items-center">
                <Row md={2} className="align-items-center">
                  <Image src="/image/logo.png" width="30px" />
                  <span>Chuhojin</span>
                </Row>
                <span>2020-10-20</span>
              </Row>
            </button>
          </div>
          <Flippy
            flipOnHover={false}
            flipOnClick={true}
            flipDirection="horizontal"
            ref={backButton}
            style={{ width: "100%", height: "600px" }}
          >
            <FrontSide className="d-flex align-items-center">
              <Image src="/image/homeImage3.png" width="100%" />
            </FrontSide>
            <BackSide className="d-flex align-items-center">
              <Image src="/image/homeImage1.png" width="100%" />
            </BackSide>
          </Flippy>
          <div>
            <button
              className="btn btn-block btn-light mt-3"
              onClick={soundHandler}
            >
              <i
                className={
                  playing
                    ? "fas fa-volume-up fa-2x"
                    : "fas fa-volume-mute fa-2x"
                }
              ></i>
            </button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default MailboxScreen;
