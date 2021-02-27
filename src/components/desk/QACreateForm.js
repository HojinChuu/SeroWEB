import React, { Fragment } from "react";
import { DropdownButton, Dropdown } from "react-bootstrap";

const QACreateForm = () => {
  return (
    <Fragment>
      <h1 id="deskTitle">Q&A.</h1>
      <form
        style={{
          borderTop: "1px solid black",
          borderBottom: "1px solid black",
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
            <DropdownButton id="QAdropBtn" title="[환불문의]">
              <Dropdown.Item>[환불문의]</Dropdown.Item>
              <Dropdown.Item>[상품문의]</Dropdown.Item>
              <Dropdown.Item>[주소문의]</Dropdown.Item>
              <Dropdown.Item>[기타문의]</Dropdown.Item>
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
              type="phone"
              placeholder="제목을 입력하세요"
              className="form-control"
            />
          </div>
          <button
            className="btn btn-sm btn-primary rounded ml-auto mr-3 pl-3 pr-3"
            style={{ backgroundColor: "#4e6f64", border: "none" }}
          >
            보낸 엽서함
          </button>
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
              style={{ width: "100%", height: "300px" }}
            />
          </div>
        </div>
        <div className="row mb-4">
          <div className="col col-lg-1 col-md-2 col-sm-3 col-3"></div>
          <div className="col">
            <input
              type="phone"
              placeholder="문자: 8"
              className="form-control"
              style={{ backgroundColor: "white", textAlign: "right" }}
              disabled
            />
          </div>
        </div>
        <div className="row">
          <div className="col col-lg-1 col-md-2 col-sm-3 col-3">비밀글설정</div>
          <div className="col">
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio1"
                value="option1"
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
                value="option2"
              />
              <label className="form-check-label" htmlFor="inlineRadio2">
                비밀글
              </label>
            </div>
          </div>
        </div>
      </form>
      <div className="row mb-5">
        <div className="col mt-3">
          <button className="btn btn-light btn-sm" style={buttonStyle}>
            목록
          </button>
        </div>
        <div className="mr-3 mt-3">
          <button className="btn btn-sm btn-light mr-3" style={buttonStyle}>
            취소
          </button>
          <button className="btn btn-sm btn-dark" style={buttonStyle}>
            등록
          </button>
        </div>
      </div>
    </Fragment>
  );
};

const buttonStyle = {
  width: "80px",
  border: "solid 1px #b1b1b1",
};

export default QACreateForm;
