import React from "react";
import { Button } from "react-bootstrap";
import DaumPostcode from "react-daum-postcode";

const PostCodeSearch = ({ visible, onComplete, cancelBtn }) => {
  return (
    <div style={{ ...postCodeStyle, display: visible ? "block" : "none" }}>
      <Button variant="dark" style={btnStyle} onClick={cancelBtn}>
        <i className="fas fa-window-close"></i>
      </Button>
      <DaumPostcode
        onComplete={onComplete}
        animation
        width={600}
        height={500}
      />
    </div>
  );
};

const postCodeStyle = {
  position: "absolute",
  top: 100,
  left: -50,
  zIndex: "100",
  border: "1px solid grey",
  overflow: "hidden",
};

const btnStyle = {
  position: "absolute",
  zIndex: "200",
  width: "100%",
  bottom: "0",
  cursor: "pointer",
};

export default PostCodeSearch;
