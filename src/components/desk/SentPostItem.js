import React from "react";
import { Fragment } from "react";
import { Card, Row } from "react-bootstrap";

const SentPostItem = () => {
  return (
    <Fragment>
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

export default SentPostItem;
