import React from "react";
import { Card } from "react-bootstrap";

const NoPostItem = ({ postRefHandler, onHide }) => {
  // test
  const onClickHandler = () => {
    postRefHandler(1);
    onHide();
  };
  // test

  return (
    <Card
      className="col col-4"
      style={{ border: "none", backgroundColor: "transparent" }}
      // test
      onClick={onClickHandler}
      id="modalPostCard"
      // test
    >
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
  );
};

export default NoPostItem;
