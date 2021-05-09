import React, { useState, useEffect, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Modal, Button, Image } from "react-bootstrap";
import {
  answerToQuestion,
  getQAComments,
  getQAPost,
} from "../../actions/adminActions";
import { IMAGE_URL } from "../../config";

import AdminAnswer from "./AdminAnswer";
import Spinner from "../helpers/Spinner";
import RefImageModal from "../desk/RefImageModal";

const QuestionAnswer = ({ show, onHide }) => {
  const [showPost, setShowPost] = useState(false);
  const [answerText, setAnswerText] = useState("");

  const handleClose = () => setShowPost(false);

  const dispatch = useDispatch();
  const adminQuestions = useSelector((state) => state.adminQuestions);
  const userLogin = useSelector((state) => state.userLogin);

  const { userInfo } = userLogin;
  const {
    question,
    answers,
    answerLoading,
    postLoading,
    refPost,
  } = adminQuestions;

  useEffect(() => {
    if (userInfo && Object.keys(question).length !== 0) {
      dispatch(getQAComments(userInfo.usId, question.quId));
    }
  }, [dispatch, userInfo, question]);

  useEffect(() => {
    if (question.Send !== null) {
      dispatch(getQAPost(question.Send, question.quSeId));
    }
  }, [dispatch, question]);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(answerToQuestion(userInfo.usId, question.quId, answerText));
  };

  return (
    <Modal
      centered
      scrollable
      show={show}
      onHide={onHide}
      backdrop="static"
      keyboard={false}
    >
      {answerLoading ? (
        <Spinner spinnerHeight={{ height: "30vh" }} />
      ) : (
        <Fragment>
          <Modal.Header
            className="m-auto"
            style={{ padding: "1rem 1rem 0.4rem 1rem" }}
          >
            <Modal.Title>
              <h5 className="text-center pb-2 pt-2">문의</h5>
              <div className="row justify-content-center">
                <div className="col text-center" xs={6} md={6}>
                  <Image
                    src={
                      Object.keys(question).length !== 0 &&
                      question.User.usPhoto
                        ? IMAGE_URL +
                          "/resized/thumbnail/" +
                          question.User.usPhoto
                        : "/image/no-image.png"
                    }
                    roundedCircle
                    width="100"
                  />
                </div>
              </div>
              <h5 className="text-center mt-3">
                {Object.keys(question).length !== 0 && question.User.usName}{" "}
                고객님
              </h5>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="pl-5 pr-5 mt-4">
            <div className="row" style={{ alignItems: "center" }}>
              <small className="mr-auto ml-2 mb-1" style={{ color: "red" }}>
                문의사항
              </small>
              <span className="p-2">{question && question.quContent}</span>
              <small className="ml-auto mr-2">
                {Object.keys(question).length !== 0 &&
                  question.createdAt.slice(0, 10)}
              </small>
            </div>

            {answers &&
              answers.length !== 0 &&
              answers.map((answerItem, index) => (
                <AdminAnswer answerItem={answerItem} key={index} />
              ))}
          </Modal.Body>
        </Fragment>
      )}
      <form onSubmit={onSubmitHandler} className="questionModal">
        <div className="pl-4 pr-4 mt-3">
          <textarea
            className="form-control m-auto"
            onChange={(e) => setAnswerText(e.target.value)}
            rows="5"
            placeholder="답변하기"
          ></textarea>
        </div>
        <Modal.Footer>
          {question.Send !== null ? (
            postLoading ? (
              <div className="spinner-border mr-auto ml-4" role="status">
                <span className="sr-only">Loading</span>
              </div>
            ) : (
              <Button
                variant="secondary"
                className="rounded mr-auto ml-2"
                size="sm"
                onClick={() => setShowPost(true)}
              >
                첨부된 엽서
              </Button>
            )
          ) : (
            <></>
          )}
          <Button variant="secondary" className="rounded" onClick={onHide}>
            취소
          </Button>
          <Button
            type="submit"
            variant="primary"
            className="rounded"
            onClick={onHide}
            disabled={answerText.length === 0}
          >
            답변하기
          </Button>
        </Modal.Footer>
      </form>
      {refPost && (
        <RefImageModal show={showPost} onHide={handleClose} refPost={refPost} />
      )}
    </Modal>
  );
};

export default QuestionAnswer;
