import React, { useState, useEffect, Fragment, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card, Container, Row } from "react-bootstrap";
import { getQrcodeData } from "../../actions/linkActions";
import Spinner from "../../components/helpers/Spinner";
import { IMAGE_URL } from "../../config";

const QrcodeLinkScreen = ({ location, history }) => {
  const flipElement = useRef(null);
  const [audio, setAudio] = useState(null);
  const [playing, setPlaying] = useState(true);
  const [seId] = useState(location.search.split("=")[1]);

  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const qrcodePostData = useSelector((state) => state.qrcodePostData);

  const { userInfo } = userLogin;
  const { loading, qrcode, error } = qrcodePostData;

  useEffect(() => {
    if (userInfo && typeof userInfo != undefined) {
      error
        ? history.push("/login")
        : dispatch(getQrcodeData(seId, userInfo.usPhoneNumber));
    }
  }, [dispatch, userInfo, seId, history, error]);

  useEffect(() => {
    if (qrcode) {
      setAudio(new Audio(IMAGE_URL + "/" + qrcode.Post.poRecord));
    }
  }, [qrcode]);

  const soundHandler = () => {
    setPlaying(!playing);
    if (playing) {
      audio.play();
    } else {
      audio.pause();
      audio.currentTime = 0;
    }
  };

  const flipHandler = () => {
    flipElement.current.style.transform === "rotateY(180deg)"
      ? (flipElement.current.style.transform = "rotateY(0deg)")
      : (flipElement.current.style.transform = "rotateY(180deg)");
  };

  const addPostHandler = () => {
    console.log("add");
  };

  return (
    <Container>
      {loading ? (
        <Spinner />
      ) : (
        qrcode && (
          <Fragment>
            <Row className="align-items-center justify-content-center pt-2 pb-2">
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
            <div id="soundBtn">
              <Row className="justify-content-center mt-3">
                <div className="btn btn-circle btn-xl" onClick={soundHandler}>
                  <i
                    className={
                      playing
                        ? "fas fa-volume-up fa-3x"
                        : "fas fa-volume-mute fa-3x"
                    }
                  ></i>
                </div>
              </Row>
              <Row className="justify-content-center mt-3 mb-3">
                <button
                  onClick={addPostHandler}
                  className="btn btn-dark btn-lg rounded btn-xl"
                >
                  <span style={{ fontSize: "14px" }}>내 엽서에 추가하기</span>
                </button>
              </Row>
            </div>
          </Fragment>
        )
      )}
    </Container>
  );
};

export default QrcodeLinkScreen;