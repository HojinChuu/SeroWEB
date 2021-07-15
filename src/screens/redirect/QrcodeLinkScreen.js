import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col, Image } from "react-bootstrap";
import { getQrcodeData, saveQrcodePost } from "../../actions/linkActions";
import Flippy, { FrontSide, BackSide } from "react-flippy";
import { IMAGE_URL } from "../../config";
import showAlert from "../../utils/alert";

import Spinner from "../../components/helpers/Spinner";

const QrcodeLinkScreen = ({ location, history }) => {
  const [audio, setAudio] = useState(null);
  const [playing, setPlaying] = useState(true);
  const [qrData] = useState(location.search.split("=")[1]);

  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const qrcodePostData = useSelector((state) => state.qrcodePostData);
  const qrcodeSavePost = useSelector((state) => state.qrcodeSavePost);

  const { userInfo } = userLogin;
  const { loading, qrcode, error } = qrcodePostData;
  const { success: postSaveSuccess, error: postSaveError } = qrcodeSavePost;

  let type = navigator.userAgent.toLowerCase();
  if (type.indexOf("android") > -1) {
    type = "adroid";
  } else if (type.indexOf("iphone") > -1 || type.indexOf("ipod") > -1) {
    type = "ios";
  } else if (navigator.userAgent.toLowerCase().search("mac") !== -1) {
    type = "mac";
  } else {
    type = "window";
  }

  useEffect(() => {
    if (userInfo && localStorage.getItem("userToken")) {
      dispatch(getQrcodeData(qrData, userInfo.usPhoneNumber));
    } else if (!userInfo && !localStorage.getItem("userToken")) {
      if (qrData) {
        localStorage.setItem("qrCode", qrData);
      }
      history.push("/login");
    }
  }, [userInfo, qrData, history, dispatch]);

  useEffect(() => {
    // if (postSaveSuccess) {
    //   history.push("/mailbox");
    // }
    if (error) {
      showAlert
        .error("", "잘못된 경로의 엽서입니다.", false, "확인")
        .then(({ isConfirmed }) => {
          if (isConfirmed) history.push("/");
        });
    }
  }, [history, error]);

  useEffect(() => {
    if (postSaveSuccess) {
      showAlert
        .success(
          "",
          "엽서를 추가했습니다 !",
          true,
          "WEB에서 확인",
          "APP에서 확인",
          false
        )
        .then(({ isConfirmed }) => {
          isConfirmed
            ? history.push("/mailbox")
            : type === "ios" || type === "mac"
            ? (window.location.href =
                "https://apps.apple.com/kr/app/trello/id1278508951?mt=12")
            : (window.location.href =
                "https://play.google.com/store/apps/details?id=com.app.seropost");
        });
    }
  }, [postSaveSuccess, history, type]);

  useEffect(() => {
    if (qrcode) {
      setAudio(new Audio(IMAGE_URL + "/" + qrcode.Post.poRecord));
    }
  }, [qrcode]);

  useEffect(() => {
    if (postSaveError) {
      showAlert
        .error("", "이미 추가된 엽서입니다.", true, "돌아가기")
        .then(({ isConfirmed }) => {
          if (isConfirmed) history.push("/");
        });
    }
  }, [history, postSaveError]);

  const soundHandler = () => {
    setPlaying(!playing);
    if (playing) {
      audio.play();
    } else {
      audio.pause();
      audio.currentTime = 0;
    }
  };

  const addPostHandler = () => {
    dispatch(saveQrcodePost(userInfo.usId, qrcode.sePoId));
  };

  return (
    <Container>
      {loading ? (
        <Spinner />
      ) : (
        qrcode && (
          <Row className="justify-content-center cardContainer">
            <Col sm={10} md={6} lg={4} className="mt-3 mb-3">
              <div id="flipCardTitle">
                <button className="btn btn-block pr-4 pl-4 ml-2">
                  <Row className="justify-content-between align-items-center">
                    <Row className="align-items-center">
                      <Image
                        src={IMAGE_URL + "/" + qrcode.Post.User.usPhoto}
                        width="25px"
                        height="25px"
                        roundedCircle
                      />
                      <span className="ml-2">{qrcode.Post.User.usName}</span>
                    </Row>
                    <span>{qrcode.createdAt.slice(0, 10)}</span>
                  </Row>
                </button>
              </div>
              <Flippy
                flipOnHover={false}
                flipOnClick={true}
                flipDirection="horizontal"
                style={{ width: "100%", height: "600px" }}
              >
                <FrontSide className="d-flex align-items-center">
                  <Image
                    src={IMAGE_URL + "/" + qrcode.Post.poPhoto}
                    width="100%"
                  />
                </FrontSide>
                <BackSide className="d-flex align-items-center">
                  <Image
                    src={IMAGE_URL + "/" + qrcode.Post.poContentPhoto}
                    width="100%"
                  />
                </BackSide>
              </Flippy>
              <div>
                <button
                  className="btn btn-block btn-light mt-3 mb-3"
                  onClick={soundHandler}
                  disabled={qrcode.Post.poRecord === "null"}
                >
                  <i
                    className={
                      qrcode.Post.poRecord === "null"
                        ? "fas fa-volume-off fa-2x"
                        : playing
                        ? "fas fa-volume-up fa-2x"
                        : "fas fa-volume-mute fa-2x"
                    }
                  ></i>
                </button>
              </div>
            </Col>
          </Row>
        )
      )}
      <div id="qrpostAddBtn">
        <Row className="justify-content-center mt-4 mb-4">
          <button
            onClick={addPostHandler}
            className="btn btn-dark btn-lg rounded btn-xl"
          >
            <span style={{ fontSize: "14px" }}>받은 엽서에 추가하기</span>
          </button>
        </Row>
      </div>
    </Container>
  );
};

export default QrcodeLinkScreen;
