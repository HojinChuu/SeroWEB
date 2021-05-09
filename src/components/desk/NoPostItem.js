import React from "react";
import { Card } from "react-bootstrap";
import useWindowDimensions from "../../hooks/useWindowDimensions";

const NoPostItem = () => {
  const { width } = useWindowDimensions();

  return (
    <Card
      className={width > 990 ? "col col-4" : "col col-10"}
      style={{ border: "none", backgroundColor: "transparent" }}
    >
      <div
        className="d-flex align-items-center justify-content-center"
        style={postStyle}
      >
        <span style={{ color: "#bcbcbc", fontSize: "12px" }}>
          엽서가 없습니다.
        </span>
      </div>
    </Card>
  );
};

const postStyle = {
  backgroundColor: "white",
  width: "100%",
  height: "350px",
  border: "2px dashed #9a9a9a",
};

export default NoPostItem;
