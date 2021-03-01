import React, { Fragment, useEffect, useState } from "react";
import { DropdownButton, Dropdown } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { createQa } from "../../actions/deskActions";

import RecievedPostsModal from "./RecievedPostsModal";
import SentPostsModal from "./SentPostsModal";
import Loader from "../helpers/Loader";
import Message from "../../components/helpers/Message";

const QACreateForm = ({ history }) => {
  const [sentBtnShow, setSentBtnShow] = useState(false);
  const [receivedBtnShow, setReceivedBtnShow] = useState(false);
  const [sentShow, setSentShow] = useState(false);
  const [receivedShow, setReceivedShow] = useState(false);
  const [category, setCategory] = useState(1);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [locked, setLocked] = useState(0);
  const [postRef, setPostRef] = useState(0);
  const [message, setMessage] = useState("");

  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const fetchQas = useSelector((state) => state.fetchQas);
  const { success, loading } = fetchQas; // reducer error 삭제

  useEffect(() => {
    if (!userInfo && !localStorage.getItem("userToken")) {
      history.push("/login");
    }
  }, [history, userInfo]);

  useEffect(() => {
    if (success) {
      history.push("/desk/qa");
    }
  }, [history, success]);

  const onSentHide = () => {
    setSentShow(false);
  };

  const onReceivedHide = () => {
    setReceivedShow(false);
  };

  const sentBtnHandler = () => {
    setReceivedBtnShow(false);
    setSentBtnShow(true);
    setCategory(2);
    setPostRef(0);
  };

  const receivedBtnHandler = () => {
    setSentBtnShow(false);
    setReceivedBtnShow(true);
    setCategory(3);
    setPostRef(0);
  };

  const btnClearHandler = () => {
    setSentBtnShow(false);
    setReceivedBtnShow(false);
    setCategory(1);
    setPostRef(0);
  };

  const postRefHandler = (state) => {
    setPostRef(state);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (title === "" || content === "") {
      setMessage("빈칸을 모두 작성해주세요.");
    } else {
      dispatch(
        createQa(
          userInfo.usId,
          category,
          postRef,
          title,
          content,
          parseInt(locked)
        )
      );
    }
  };

  return (
    <Fragment>
      <h1 id="deskTitle">Q&A.</h1>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          {message && <Message variant="danger">{message}</Message>}
          <form
            onSubmit={onSubmitHandler}
            style={{
              borderTop: "1px solid black",
              padding: "40px 50px 50px 0px",
            }}
          >
            <div className="row mb-2">
              <div
                className="col col-lg-1 col-md-2 col-sm-3 col-3"
                style={{ lineHeight: "35px" }}
              >
                문의유형
              </div>
              <div className="col col-3">
                <DropdownButton
                  id="QAdropBtn"
                  title={
                    category === 1
                      ? "[기타문의]"
                      : category === 2
                      ? "[보낸상품문의]"
                      : "[받은상품문의]"
                  }
                >
                  <Dropdown.Item onClick={btnClearHandler}>
                    [기타문의]
                  </Dropdown.Item>
                  <Dropdown.Item onClick={sentBtnHandler}>
                    [보낸상품문의]
                  </Dropdown.Item>
                  <Dropdown.Item onClick={receivedBtnHandler}>
                    [받은상품문의]
                  </Dropdown.Item>
                </DropdownButton>
              </div>
            </div>
            <div className="row mb-2">
              <div
                className="col col-lg-1 col-md-2 col-sm-3 col-3"
                style={{ lineHeight: "35px" }}
              >
                제목
              </div>
              <div className="col col-5">
                <input
                  type="text"
                  placeholder="제목을 입력하세요"
                  className="form-control"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              {sentBtnShow && (
                <button
                  type="button"
                  className="btn btn-sm btn-primary rounded ml-auto mr-3 pl-3 pr-3"
                  style={{
                    backgroundColor: "#4e6f64",
                    border: "none",
                    fontWeight: 500,
                  }}
                  onClick={() => setSentShow(true)}
                >
                  보낸 엽서함
                </button>
              )}

              {receivedBtnShow && (
                <button
                  type="button"
                  className="btn btn-sm rounded ml-auto mr-3 pl-3 pr-3"
                  style={{
                    backgroundColor: "#ffc165",
                    border: "none",
                    fontWeight: 500,
                  }}
                  onClick={() => setReceivedShow(true)}
                >
                  받은 엽서함
                </button>
              )}
            </div>
            <div className="row">
              <div
                className="col col-lg-1 col-md-2 col-sm-3 col-3"
                style={{ lineHeight: "35px" }}
              >
                문의내용
              </div>
              <div className="col">
                <textarea
                  type="phone"
                  placeholder="내용을 입력하세요"
                  className="form-control"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  style={{ width: "100%", height: "300px" }}
                />
              </div>
            </div>
            <div className="row mb-4">
              <div className="col col-lg-1 col-md-2 col-sm-3 col-3"></div>
              <div className="col">
                <input
                  type="phone"
                  placeholder={`문자: ${content.length}`}
                  className="form-control"
                  style={{ backgroundColor: "white", textAlign: "right" }}
                  disabled
                />
              </div>
            </div>
            <div className="row">
              <div className="col col-lg-1 col-md-2 col-sm-3 col-3">
                비밀글설정
              </div>
              <div className="col">
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio1"
                    checked
                    value={0}
                    onChange={(e) => setLocked(e.target.value)}
                  />
                  <label className="form-check-label" htmlFor="inlineRadio1">
                    공개글
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio2"
                    value={1}
                    onChange={(e) => setLocked(e.target.value)}
                  />
                  <label className="form-check-label" htmlFor="inlineRadio2">
                    비밀글
                  </label>
                </div>
              </div>
            </div>
            {postRef !== 0 && (
              <div className="row mt-3">
                <div className="col col-lg-1 col-md-2 col-sm-3 col-3">
                  첨부엽서
                </div>
                <div className="col">{postRef}번 엽서</div>
              </div>
            )}
            <div
              className="row mb-5 mt-4"
              style={{ borderTop: "1px solid black", marginLeft: "1px" }}
            >
              <div className="col mt-3">
                <button
                  type="button"
                  className="btn btn-light btn-sm"
                  style={buttonStyle}
                  onClick={() => history.go(-1)}
                >
                  목록
                </button>
              </div>
              <div className="mr-3 mt-3">
                <button
                  type="button"
                  className="btn btn-sm btn-light mr-3"
                  style={buttonStyle}
                  onClick={() => history.go(-1)}
                >
                  취소
                </button>
                <button
                  type="submit"
                  className="btn btn-sm btn-dark"
                  style={buttonStyle}
                >
                  등록
                </button>
              </div>
            </div>
          </form>

          <SentPostsModal
            show={sentShow}
            onHide={onSentHide}
            postRefHandler={postRefHandler}
          />
          <RecievedPostsModal
            show={receivedShow}
            onHide={onReceivedHide}
            postRefHandler={postRefHandler}
          />
        </Fragment>
      )}
    </Fragment>
  );
};

const buttonStyle = {
  width: "80px",
  border: "solid 1px #b1b1b1",
};

export default QACreateForm;
