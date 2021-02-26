import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getQuestions } from "../../actions/adminActions";
import { paginate } from "../../utils/paginate";
import { ADMIN_QUESTION_FETCH_SUCCESS } from "../../constants/adminConstants";

import Loader from "../helpers/Loader";
import QuestionItem from "./QuestionItem";
import QuestionModal from "./QuestionModal";
import Pagination from "../helpers/Pagination";

const Questions = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = (state) => setShow(state);

  const dispatch = useDispatch();
  const adminQuestions = useSelector((state) => state.adminQuestions);
  const {
    loading,
    success,
    questions,
    questionsCount,
    pageSize,
    currentPage,
  } = adminQuestions;

  useEffect(() => {
    dispatch(getQuestions());
  }, [dispatch, success]);

  const pageChangeHandler = (page) => {
    dispatch({
      type: ADMIN_QUESTION_FETCH_SUCCESS,
      payload: questions,
      currentPage: page,
    });
  };

  const pagedQuestions = paginate(questions, currentPage, pageSize);

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
              <th>제목</th>
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
                  pagedQuestions.map((question) => (
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
      {questions && (
        <Pagination
          itemsCount={questionsCount}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={pageChangeHandler}
        />
      )}
      <QuestionModal show={show} onHide={handleClose} />
    </Fragment>
  );
};

export default Questions;
