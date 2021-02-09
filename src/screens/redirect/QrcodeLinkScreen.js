import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col, Image } from "react-bootstrap";
import { getQrcodeData, saveQrcodePost } from "../../actions/linkActions";
import Spinner from "../../components/helpers/Spinner";
import Flippy, { FrontSide, BackSide } from "react-flippy";
import Swal from "sweetalert2";
import { IMAGE_URL } from "../../config";

const QrcodeLinkScreen = ({ location, history }) => {
  const [audio, setAudio] = useState(null);
  const [playing, setPlaying] = useState(true);
  const [qrData] = useState(location.search.split("=")[1]);

  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const qrcodePostData = useSelector((state) => state.qrcodePostData);
  const qrcodeSavePost = useSelector((state) => state.qrcodeSavePost);

  const { userInfo, userToken } = userLogin;
  const { loading, qrcode, error } = qrcodePostData;
  const { success: postSaveSuccess, error: postSaveError } = qrcodeSavePost;

  useEffect(() => {
    if (userInfo && typeof userInfo != undefined) {
      dispatch(getQrcodeData(qrData, userInfo.usPhoneNumber));
    } else if (!userToken && typeof userInfo == undefined) {
      history.push("/login");
    }
  }, [userInfo, qrData, history, dispatch, userToken]);

  useEffect(() => {
    if (postSaveSuccess) {
      history.push("/mailbox");
    }
    if (error) {
      history.push("/");
    }
  }, [history, postSaveSuccess, error]);

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

  const addPostHandler = () => {
    if (postSaveError) {
      Swal.fire({
        // title: "",
        text: "이미 추가된 엽서입니다.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "돌아가기",
      }).then((result) => {
        if (result.isConfirmed) {
          history.push("/");
        }
      });
    } else {
      dispatch(saveQrcodePost(userInfo.usId, qrcode.sePoId));
    }
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
            <span style={{ fontSize: "14px" }}>내 엽서에 추가하기</span>
          </button>
        </Row>
      </div>
    </Container>
  );
};

export default QrcodeLinkScreen;
