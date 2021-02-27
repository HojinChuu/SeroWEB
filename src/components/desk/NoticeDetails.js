import React, { Fragment } from "react";
import { useLocation } from "react-router-dom";

const NoticeDetails = ({ history }) => {
  const location = useLocation();
  const notice = location.state.notice;

  return (
    <Fragment>
      <h1 id="deskTitle">NOTICE.</h1>
      <div style={headerStyle}>
        <div className="row mb-3">
          <div className="col">
            <span>제목</span>
            <span style={{ marginLeft: "40px" }}>{notice.noTitle}</span>
          </div>
        </div>
        <div className="row justify-content-between">
          <div className="col">
            <span>작성자</span>
            <span style={{ marginLeft: "28px" }}>세로엽서(SEROPOST)</span>
          </div>
          <span>
            작성일{" "}
            <span style={dateStyle}>{notice.createdAt.slice(0, 10)}</span>
          </span>
        </div>
      </div>
      <div style={bodyStyle}>
        <span>{notice.noContent}</span>
      </div>
      <div className="row justify-content-end mb-3 p-3">
        <button
          className="btn btn-sm btn-light"
          onClick={() => history.go(-1)}
          style={buttonStyle}
        >
          목록
        </button>
      </div>
    </Fragment>
  );
};

const headerStyle = {
  borderTop: "solid 2px #707070",
  padding: "15px",
};

const dateStyle = {
  color: "#8d8d8d",
  fontSize: "15px",
  letterSpacing: "-0.3px",
};

const bodyStyle = {
  borderTop: "solid 2px #b1b1b1",
  borderBottom: "solid 2px #b1b1b1",
  height: "350px",
  padding: "3% 7% 3% 7%",
  fontSize: "16px",
  wordBreak: "break-all",
  overflow: "auto",
};

const buttonStyle = {
  width: "80px",
  border: "solid 1px #b1b1b1",
};

export default NoticeDetails;
