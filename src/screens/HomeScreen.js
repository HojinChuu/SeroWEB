import React from "react";
import { Fragment } from "react";
import { Image, Col } from "react-bootstrap";
import useWindowDimensions from "../../src/hooks/useWindowDimensions";

const HomeScreen = () => {
  const { width } = useWindowDimensions();

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
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {type && type === "web" ? (
          <Fragment>
            <video
              id="mainVideo"
              style={{ height: "100%", width: "100%" }}
              autoPlay
              loop
              muted
            >
              <source src="image/homeVideo.mp4" type="video/mp4"></source>
            </video>
            <video
              id="mainSmVideo"
              style={{ height: "100%", width: "100%" }}
              autoPlay
              loop
              muted
            >
              <source
                src="image/homeVideo_mobile.mp4"
                type="video/mp4"
              ></source>
            </video>
          </Fragment>
        ) : (
          <Image
            id="mainSmVideo"
            src="image/homeVideo_sm.gif"
            style={{ height: "100%", width: "100%" }}
          />
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
      {width > 600 && (
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
              bottom: "10%",
              left: "20%",
              textAlign: "center",
              width: "80%",
              height: "80px",
            }}
          >
            <Image
              src="/image/appleStore.png"
              style={{
                width: "8%",
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
                width: "9%",
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

// const buttonStyle = {
//   position: "absolute",
//   bottom: -0,
//   right: 0,
//   border: "none",
//   outline: "none",
//   boxShadow: "none",
//   zIndex: 1000,
// };

export default HomeScreen;
