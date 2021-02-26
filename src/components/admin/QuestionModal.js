import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Modal, Button, Image } from "react-bootstrap";
import { answerToQuestion } from "../../actions/adminActions";
import { IMAGE_URL } from "../../config";

import AdminAnswer from "./AdminAnswer";

const QuestionAnswer = ({ show, onHide }) => {
  const [answerText, setAnswerText] = useState("");

  const dispatch = useDispatch();
  const adminQuestions = useSelector((state) => state.adminQuestions);
  const userLogin = useSelector((state) => state.userLogin);

  const { userInfo } = userLogin;
  const { question } = adminQuestions;

  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(
      answerToQuestion(
        userInfo.usId,
        question.quCaId,
        answerText,
        question.quId
      )
    );
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
      <Modal.Header
        className="m-auto"
        style={{ padding: "1rem 1rem 0.4rem 1rem" }}
      >
        <Modal.Title>
          <h5 className="text-center pb-2 pt-2">문의</h5>
          <div className="row justify-content-center">
            <div className="col" xs={6} md={6}>
              <Image
                src={
                  Object.keys(question).length !== 0 && question.User.usPhoto
                    ? IMAGE_URL + "/resized/thumbnail/" + question.User.usPhoto
                    : "/image/no-image.png"
                }
                roundedCircle
                width="100"
              />
            </div>
          </div>
          <h5 className="text-center mt-3">
            {Object.keys(question).length !== 0 && question.User.usName} 고객님
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

        {Object.keys(question).length !== 0 &&
          question.answer.map((answerItem) => (
            <AdminAnswer answerItem={answerItem} key={answerItem.quId} />
          ))}
      </Modal.Body>
      <form onSubmit={onSubmitHandler} className="questionModal">
        <div className="pl-4 pr-4 mt-3">
          <textarea
            className="form-control m-auto"
            onChange={(e) => setAnswerText(e.target.value)}
            rows="5"
            placeholder="답글하기"
          ></textarea>
        </div>
        <Modal.Footer>
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
    </Modal>
  );
};

export default QuestionAnswer;
