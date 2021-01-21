import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getQuestions } from "../../actions/adminAction";

import Loader from "../helpers/Loader";
import QuestionItem from "./QuestionItem";
import QuestionModal from "./QuestionModal";

const Questions = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = (state) => setShow(state);

  const dispatch = useDispatch();
  const adminQuestions = useSelector((state) => state.adminQuestions);
  const { loading, success, questions } = adminQuestions;

  useEffect(() => {
    dispatch(getQuestions());
  }, [dispatch]);

  useEffect(() => {
    if (success) {
      dispatch(getQuestions());
    }
  }, [dispatch, success]);

  return (
    <Fragment>
      <div className="row p-4">
        <div className="row mr-auto">
          <button
            onClick={() => dispatch(getQuestions())}
            className="btn btn-outline-dark rounded"
          >
            <i className="fas fa-redo-alt"></i>
          </button>
        </div>
      </div>
      <div className="table-responsive">
        <table className="table table-striped table-lg">
          <thead>
            <tr className="text-center">
              <th>문의번호</th>
              <th>회원번호</th>
              <th>카테고리</th>
              <th>문의내용</th>
              <th>문의날짜</th>
              <th>보기</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr style={{ backgroundColor: "transparent" }}>
                <td colSpan="7">
                  <Loader />
                </td>
              </tr>
            ) : (
              <>
                {questions &&
                  questions.map((question) => (
                    <QuestionItem
                      question={question}
                      key={question.quId}
                      handleShow={handleShow}
                    />
                  ))}
              </>
            )}
          </tbody>
        </table>
      </div>
      <QuestionModal show={show} onHide={handleClose} />
    </Fragment>
  );
};

export default Questions;
