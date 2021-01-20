import React from "react";

const QuestionItem = ({ question, handleShow }) => {
  return (
    <tr className="text-center">
      <td>{question.quId}</td>
      <td>{question.quUsId}</td>
      <td>{question.Category.caContent}</td>
      <td>{question.quContent}</td>
      <td>{question.createdAt.slice(0, 10)}</td>
      <td>
        <button
          className="btn btn-outline-dark rounded"
          onClick={() => handleShow(true)}
        >
          열기
        </button>
      </td>
    </tr>
  );
};

export default QuestionItem;
