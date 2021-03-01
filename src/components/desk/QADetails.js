import React, { Fragment } from "react";
import { useLocation } from "react-router-dom";

const QADetails = ({ history }) => {
  const location = useLocation();
  const qaItem = location.state.qaItem;

  return (
    <Fragment>
      <h1 id="deskTitle">Q&A.</h1>
      <div style={headerStyle}>
        <div className="row mb-3">
          <div className="col">
            <span>제목</span>
            <span style={{ marginLeft: "40px" }}>{qaItem.quTitle}</span>
          </div>
        </div>
        <div className="row justify-content-between">
          <div className="col">
            <span>작성자</span>
            <span style={{ marginLeft: "28px" }}>{qaItem.User.usName}</span>
          </div>
          <span>
            작성일{" "}
            <span style={dateStyle}>{qaItem.createdAt.slice(0, 10)}</span>
          </span>
        </div>
      </div>
      <div style={bodyStyle}>
        <span>{qaItem.quContent}</span>
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
      <h5
        className="mb-2"
        style={{
          color: "#404040",
          fontSize: "18px",
          fontWeight: "400",
          marginLeft: "10px",
        }}
      >
        댓글 4
      </h5>
      <form className="pr-4 pl-4">
        <div className="row">
          <div className="col" style={{ margin: 0, padding: 0 }}>
            <textarea
              type="text"
              className="form-control"
              rows="4"
              style={{ resize: "none" }}
            />
          </div>
          <input
            type="submit"
            value="댓글입력"
            className="btn btn-dark p-4"
            style={{ fontSize: "12px" }}
          />
        </div>
      </form>
      <div className="mb-3 pb-5">
        <hr
          style={{ border: "solid 1px #bab9b9" }}
          className="ml-2 mr-2 mt-4 mb-5"
        />
        {/* comment */}
        <div
          style={{ background: "#f9f8f7", border: "1px solid #b1b1b1" }}
          className="pl-3 pr-3 pt-4 rounded"
        >
          <div className="row ml-2 mr-2 p-2  rounded justify-content-between ">
            <div>추호진</div>
            <div>2021-03-02</div>
          </div>
          <div className="p-3 pb-4">
            세로엽서 시켰는데 아직도 안와요... 해외배송인가요? 두달전에 시켰는데
            제발좀 온나
          </div>
          <hr className="ml-3 mr-3" />
          <div className="row ml-2 mr-2 p-2  rounded justify-content-between ">
            <div>추호진</div>
            <div>2021-03-02</div>
          </div>
          <div className="p-3 pb-4">
            세로엽서 시켰는데 아직도 안와요... 해외배송인가요? 두달전에 시켰는데
            제발좀 온나
          </div>
          <hr className="ml-3 mr-3" />
          <div className="row ml-2 mr-2 p-2  rounded justify-content-between ">
            <div>추호진</div>
            <div>2021-03-02</div>
          </div>
          <div className="p-3 pb-4">
            세로엽서 시켰는데 아직도 안와요... 해외배송인가요? 두달전에 시켰는데
            제발좀 온나
          </div>
          <hr className="ml-3 mr-3" />
          <div className="row ml-2 mr-2 p-2  rounded justify-content-between ">
            <div>추호진</div>
            <div>2021-03-02</div>
          </div>
          <div className="p-3 pb-4">
            세로엽서 시켰는데 아직도 안와요... 해외배송인가요? 두달전에 시켰는데
            제발좀 온나
          </div>
          <hr className="ml-3 mr-3" />
          <div className="row ml-2 mr-2 p-2  rounded justify-content-between ">
            <div>추호진</div>
            <div>2021-03-02</div>
          </div>
          <div className="p-3 pb-4">
            세로엽서 시켰는데 아직도 안와요... 해외배송인가요? 두달전에 시켰는데
            제발좀 온나
          </div>
          <hr className="ml-3 mr-3" />
        </div>
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
  height: "300px",
  padding: "3% 7% 3% 7%",
  fontSize: "16px",
  wordBreak: "break-all",
  overflow: "auto",
};

const buttonStyle = {
  width: "80px",
  border: "solid 1px #b1b1b1",
};

export default QADetails;
