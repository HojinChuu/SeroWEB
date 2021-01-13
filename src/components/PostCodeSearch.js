import React from "react";
import DaumPostcode from "react-daum-postcode";

const PostCodeSearch = ({ visible, onComplete }) => {
  return (
    <DaumPostcode
      onComplete={onComplete}
      animation
      style={{ ...postCodeStyle, display: visible ? "block" : "none" }}
      height={500}
    />
  );
};

const postCodeStyle = {
  position: "absolute",
  top: 100,
  left: "0px",
  zIndex: "100",
  border: "1px solid grey",
  overflow: "hidden",
};

export default PostCodeSearch;
