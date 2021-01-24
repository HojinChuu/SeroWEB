import React, { useState, useEffect, Fragment, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card, Container, Row } from "react-bootstrap";
import { getQrcodeData } from "../../actions/linkActions";
import Spinner from "../../components/helpers/Spinner";
import { IMAGE_URL } from "../../config";

const QrcodeLinkScreen = ({ location, history }) => {
  const flipElement = useRef(null);
  const [sound, setSound] = useState(true);
  // eslint-disable-next-line
  const [seId, setSeId] = useState(location.search.split("=")[1]);

  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const qrcodePostData = useSelector((state) => state.qrcodePostData);

  const { userInfo } = userLogin;
  const { loading, qrcode, error } = qrcodePostData;

  useEffect(() => {
    if (userInfo && typeof userInfo != undefined) {
      error
        ? history.push("/")
        : dispatch(getQrcodeData(seId, userInfo.usPhoneNumber));
    }
  }, [dispatch, userInfo, seId, history, error]);

  const soundHandler = () => {
    setSound(!sound);
    console.log("sound");
  };

  const flipHandler = () => {
    flipElement.current.style.transform === "rotateY(180deg)"
      ? (flipElement.current.style.transform = "rotateY(0deg)")
      : (flipElement.current.style.transform = "rotateY(180deg)");
  };

  const imageName = sound ? "fas fa-volume-up" : "fas fa-volume-mute";
  return (
    <Container>
      {loading ? (
        <Spinner />
      ) : (
        qrcode && (
          <Fragment>
            <Row className="align-items-center justify-content-center pt-4 pb-2">
              <Card.Img
                src={IMAGE_URL + "/resized/thumbnail/" + qrcode.User.usPhoto}
                className="mr-1"
                style={{ width: "20px", borderRadius: "50%" }}
              />
              <span className="mr-2">{qrcode.User.usName}</span>
              <span className="mr-3 pr-5 mr-5">
                ( {qrcode.User.usPhoneNumber} )
              </span>
              <span>{qrcode.createdAt.slice(0, 10)}</span>
            </Row>
            <Row
              className="justify-content-lg-around mt-2 cardContainer"
              ref={flipElement}
              onClick={flipHandler}
            >
              <Card className="shadow front" style={{ border: "none" }}>
                <Card.Img
                  src={IMAGE_URL + "/" + qrcode.Post.poPhoto}
                  style={{ width: "100%" }}
                />
              </Card>
              <Card className="shadow back" style={{ border: "none" }}>
                <Card.Img src={IMAGE_URL + "/" + qrcode.Post.poContentPhoto} />
              </Card>
            </Row>
            <div style={{ position: "relative", marginTop: "48rem" }}>
              <Row className="justify-content-center mt-4">
                <div className="btn btn-circle btn-xl" onClick={soundHandler}>
                  <i className={imageName + " fa-3x"}></i>
                </div>
              </Row>
              <Row className="justify-content-center mt-4">
                <button className="btn btn-dark btn-lg rounded btn-xl">
                  <span style={{ fontSize: "14px" }}>내 엽서에 추가하기</span>
                </button>
              </Row>
            </div>
            {/* <audio id="audio" autoplay loop controls>
              <source
                src={IMAGE_URL + "/" + qrcode.Post.poRecord}
                type="audio/wav"
              />
            </audio> */}
          </Fragment>
        )
      )}
    </Container>
  );
};

export default QrcodeLinkScreen;
