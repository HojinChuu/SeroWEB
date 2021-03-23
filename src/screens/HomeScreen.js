import React from "react";
import { Image, Col } from "react-bootstrap";
import useWindowDimensions from "../hooks/useWindowDimensions";

const HomeScreen = () => {
  const { width } = useWindowDimensions();

  let type = navigator.userAgent.toLowerCase();
  if (type.indexOf("android") > -1) {
    type = "adroid";
  } else if (
    type.indexOf("iphone") > -1 ||
    type.indexOf("ipad") > -1 ||
    type.indexOf("ipod") > -1
  ) {
    type = "ios";
  }

  return (
    <div>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {width > 600 ? (
          <video style={{ height: "100%", width: "100%" }} autoPlay loop muted>
            <source src="/image/homeVideo.mp4" type="video/mp4"></source>
          </video>
        ) : (
          <Image
            src="/image/homeVIdeo_sm.png"
            style={{ height: "100vh", width: "100%" }}
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
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              height: "100%",
            }}
          >
            <Image
              src="/image/homeImage3.png"
              style={{
                width: "50%",
                margin: "0 auto",
              }}
            />
          </div>
          <div
            style={{
              position: "absolute",
              bottom: "4%",
              textAlign: "center",
              width: "100%",
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
                  "http://play.google.com/store/apps/details?id=com.google.android.apps.maps")
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
