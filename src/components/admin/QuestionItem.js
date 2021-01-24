import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { inputQuestionModalData } from "../../actions/adminActions";

const QuestionItem = ({ question, handleShow }) => {
  const questionTarget = useRef(null);
  const dispatch = useDispatch();

  const buttonHandler = () => {
    handleShow(true);
    dispatch(inputQuestionModalData(questionTarget.current.value));
  };

  return (
    <tr className="text-center">
      <td>
        <input type="hidden" value={question.quId} ref={questionTarget} />
        {question.quId}
      </td>
      <td>{question.quUsId}</td>
      <td>{question.Category.caContent}</td>
      <td>{question.quContent.slice(0, 10) + "..."}</td>
      <td>{question.createdAt.slice(0, 10)}</td>
      <td>
        <button
          className="btn btn-outline-dark rounded"
          onClick={buttonHandler}
        >
          열기
        </button>
      </td>
    </tr>
  );
};

export default QuestionItem;
