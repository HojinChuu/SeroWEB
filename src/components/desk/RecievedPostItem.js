import React from "react";
import { Fragment } from "react";
import { Card, Row } from "react-bootstrap";

const RecievedPostItem = () => {
  return (
    <Fragment>
      <Card
        className="col col-4"
        style={{ border: "none", backgroundColor: "transparent" }}
      >
        <input
          id="soundBtn"
          type="radio"
          className="btn"
          style={{ position: "absolute", top: 10, right: 25 }}
        />
        <div
          className="d-flex align-items-center justify-content-center"
          style={{
            backgroundColor: "white",
            width: "100%",
            height: "350px",
            border: "2px dashed #9a9a9a",
          }}
        >
          <span style={{ color: "#bcbcbc", fontSize: "12px" }}>
            받은 엽서가 없습니다.
          </span>
        </div>
      </Card>

      <Card
        className="col col-4"
        style={{ border: "none", backgroundColor: "transparent" }}
      >
        <Card.Img
          variant="top"
          src="/image/homeVideo_sm.png"
          width="100%"
          height="350px"
        />
        <div id="flipCardTitle">
          <button className="btn btn-block pr-4 pl-4 ml-2">
            <Row className="justify-content-between align-items-center">
              <Row className="align-items-center">
                <span>보낸이:</span>
                <span className="ml-1">추호진</span>
              </Row>
              <span>20.03.01</span>
            </Row>
          </button>
        </div>
      </Card>
      <Card
        className="col col-4"
        style={{ border: "none", backgroundColor: "transparent" }}
      >
        <Card.Img
          variant="top"
          src="/image/homeVideo_sm.png"
          width="100%"
          height="350px"
        />
        <div id="flipCardTitle">
          <button className="btn btn-block pr-4 pl-4 ml-2">
            <Row className="justify-content-between align-items-center">
              <Row className="align-items-center">
                <span>보낸이:</span>
                <span className="ml-1">추호진</span>
              </Row>
              <span>20.03.01</span>
            </Row>
          </button>
        </div>
      </Card>
    </Fragment>
  );
};

export default RecievedPostItem;
