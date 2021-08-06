import React, { useState, Fragment } from "react";
import { Image, Col, Carousel } from "react-bootstrap";
import useWindowDimensions from "../../src/hooks/useWindowDimensions";

const HomeScreen = () => {
  const { width } = useWindowDimensions();
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  let type = navigator.userAgent.toLowerCase();
  if (type.indexOf("android") > -1) {
    type = "adroid";
  } else if (type.indexOf("iphone") > -1 || type.indexOf("ipod") > -1) {
    type = "ios";
  } else {
    type = "web";
  }

  return (
    <div>
      <div>
        {type && type === "web" ? (
          <Fragment>
            <Carousel
              id="mainVideo"
              activeIndex={index}
              onSelect={handleSelect}
              fade
              keyboard
              pause={false}
            >
              <Carousel.Item interval={9000}>
                <video
                  style={{ height: "100%", width: "100%" }}
                  poster="image/homePoster.png"
                  autoPlay
                  preload="auto"
                  loop
                  muted
                >
                  <source src="image/homeVideo.mp4" type="video/mp4"></source>
                </video>
                <Carousel.Caption>
                  <h4>SEROPOST</h4>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={3000}>
                <img
                  className="d-block w-100"
                  src="/image/seroRefImage1.png"
                  alt="Second slide"
                />

                <Carousel.Caption>
                  <h4>SEROPOST</h4>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={3000}>
                <img
                  className="d-block w-100"
                  src="/image/seroRefImage2.png"
                  alt="Third slide"
                />

                <Carousel.Caption>
                  <h4>SEROPOST</h4>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={3000}>
                <img
                  className="d-block w-100"
                  src="/image/seroRefImage3.png"
                  alt="Fourth slide"
                />

                <Carousel.Caption>
                  <h4>SEROPOST</h4>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={3000}>
                <img
                  className="d-block w-100"
                  src="/image/seroRefImage4.png"
                  alt="Fifth slide"
                />

                <Carousel.Caption>
                  <h4>SEROPOST</h4>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
            <Carousel
              id="mainSmVideo"
              activeIndex={index}
              onSelect={handleSelect}
              fade
              keyboard
              pause={false}
            >
              <Carousel.Item interval={9000}>
                <video
                  style={{ height: "100%", width: "100%" }}
                  poster="image/homePoster_sm.png"
                  autoPlay
                  preload="auto"
                  playsInline
                  loop
                  muted
                >
                  <source
                    src="image/homeVideo_mobile.mp4"
                    type="video/mp4"
                  ></source>
                </video>
                <Carousel.Caption>
                  <h6>SEROPOST</h6>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={3000}>
                <img
                  className="d-block w-100"
                  src="/image/seroRefImage_sm1.png"
                  alt="Second slide"
                />
                <Carousel.Caption>
                  <h6>SEROPOST</h6>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={3000}>
                <img
                  className="d-block w-100"
                  src="/image/seroRefImage_sm2.png"
                  alt="Third slide"
                />

                <Carousel.Caption>
                  <h6>SEROPOST</h6>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={3000}>
                <img
                  className="d-block w-100"
                  src="/image/seroRefImage_sm3.png"
                  alt="Fourth slide"
                />

                <Carousel.Caption>
                  <h6>SEROPOST</h6>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={3000}>
                <img
                  className="d-block w-100"
                  src="/image/seroRefImage_sm4.png"
                  alt="Fifth slide"
                />

                <Carousel.Caption>
                  <h6>SEROPOST</h6>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={3000}>
                <img
                  className="d-block w-100"
                  src="/image/seroRefImage_sm5.png"
                  alt="Sixth slide"
                />

                <Carousel.Caption>
                  <h6>SEROPOST</h6>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Fragment>
        ) : (
          <Carousel
            id="mainSmVideo"
            activeIndex={index}
            onSelect={handleSelect}
            fade
            keyboard
            pause={false}
          >
            <Carousel.Item interval={9000}>
              <video
                style={{ height: "100%", width: "100%" }}
                poster="image/homePoster_sm.png"
                autoPlay
                preload="auto"
                playsInline
                loop
                muted
              >
                <source
                  src="image/homeVideo_mobile.mp4"
                  type="video/mp4"
                ></source>
              </video>
              <Carousel.Caption>
                <h6>SEROPOST</h6>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
              <img
                className="d-block w-100"
                src="/image/seroRefImage_sm1.png"
                alt="Second slide"
              />
              <Carousel.Caption>
                <h6>SEROPOST</h6>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
              <img
                className="d-block w-100"
                src="/image/seroRefImage_sm2.png"
                alt="Third slide"
              />

              <Carousel.Caption>
                <h6>SEROPOST</h6>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
              <img
                className="d-block w-100"
                src="/image/seroRefImage_sm3.png"
                alt="Forth slide"
              />

              <Carousel.Caption>
                <h6>SEROPOST</h6>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
              <img
                className="d-block w-100"
                src="/image/seroRefImage_sm4.png"
                alt="Fifth slide"
              />

              <Carousel.Caption>
                <h6>SEROPOST</h6>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
              <img
                className="d-block w-100"
                src="/image/seroRefImage_sm5.png"
                alt="Sixth slide"
              />

              <Carousel.Caption>
                <h6>SEROPOST</h6>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        )}
      </div>
      <div style={rowStyle}>
        <Col style={colStyle}>
          <Image
            src={
              width > 600 ? "/image/mainpage1.png" : "/image/mainpage1_sm.png"
            }
            height="100%"
            width="100%"
          />
        </Col>
      </div>
      <div style={rowStyle}>
        <Col style={colStyle}>
          <Image
            src={
              width > 600 ? "/image/mainpage2.png" : "/image/mainpage2_sm.png"
            }
            height="100%"
            width="100%"
          />
        </Col>
      </div>
      {width > 600 ? (
        <div>
          <Image
            src="/image/mainpage3.png"
            style={{
              width: "100%",
              margin: "0 auto",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: "10.5%",
              left: "36%",
              textAlign: "center",
              width: "50%",
              height: "80px",
            }}
          >
            <Image
              src="/image/appleStore.png"
              style={{
                width: "15%",
                objectFit: "contain",
                cursor: "pointer",
              }}
              className="ml-2"
              onClick={() =>
                (window.location =
                  "https://apps.apple.com/kr/app/trello/id1278508951?mt=12")
              }
            />
            <Image
              src="/image/googlePlay.png"
              style={{
                width: "17%",
                objectFit: "contain",
                cursor: "pointer",
              }}
              className="ml-2"
              onClick={() =>
                (window.location =
                  "https://play.google.com/store/apps/details?id=com.app.seropost")
              }
            />
          </div>
        </div>
      ) : (
        <div>
          <Image src="/image/mainpage3_sm.png" height="100%" width="100%" />
          <div
            style={{
              position: "absolute",
              bottom: "3.5%",
              left: "9%",
              textAlign: "center",
              width: "80%",
              height: "80px",
            }}
          >
            <Image
              src="/image/appleStore.png"
              style={{
                width: "35%",
                objectFit: "contain",
                cursor: "pointer",
              }}
              className="ml-2"
              onClick={() =>
                (window.location =
                  "https://apps.apple.com/kr/app/trello/id1278508951?mt=12")
              }
            />
            <Image
              src="/image/googlePlay.png"
              style={{
                width: "39%",
                objectFit: "contain",
                cursor: "pointer",
              }}
              className="ml-2"
              onClick={() =>
                (window.location =
                  "https://play.google.com/store/apps/details?id=com.app.seropost")
              }
            />
          </div>
        </div>
      )}
    </div>
  );
};

const rowStyle = {
  backgroundColor: "#F5F5F5",
  display: "flex",
  flexWrap: "wrap",
};

const colStyle = {
  paddingLeft: 0,
  paddingRight: 0,
  textAlign: "center",
  fontSize: "30px",
};

export default HomeScreen;
