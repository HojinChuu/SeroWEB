import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import QAitem from "./QAitem";

const QAs = () => {
  return (
    <Fragment>
      <Link to="/desk/qa/create" className="btn">
        문의작성
      </Link>
      <h1 id="deskTitle">Q&A.</h1>
      <div className="table-responsive">
        <table className="deskTable">
          <thead>
            <tr className="text-center">
              <th>NO.</th>
              <th>분류</th>
              <th>제목</th>
              <th>작성자</th>
              <th>작성일</th>
            </tr>
          </thead>
          <tbody>
            <QAitem />
          </tbody>
        </table>
      </div>
    </Fragment>
  );
};

export default QAs;
