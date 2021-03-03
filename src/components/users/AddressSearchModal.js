import React from "react";
import { useLocation } from "react-router-dom";
import DaumPostcode from "react-daum-postcode";
import useWindowDimensions from "../../hooks/useWindowDimensions";

const AddressSearchModal = ({ visible, onComplete, cancelBtn }) => {
  const location = useLocation();
  const { width } = useWindowDimensions();

  return (
    <div
      style={
        width > 500
          ? { ...postCodeStyle, display: visible ? "block" : "none" }
          : {
              left: location.pathname === "/register" ? 8 : 20,
              ...postCodeSmStyle,
              display: visible ? "block" : "none",
            }
      }
    >
      <button className="btn btn-dark" style={btnStyle} onClick={cancelBtn}>
        <i className="fas fa-window-close"></i>
      </button>
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
  left: -20,
  zIndex: "100",
  border: "1px solid grey",
  overflow: "hidden",
};

const postCodeSmStyle = {
  position: "absolute",
  width: "330px",
  top: 50,
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

export default AddressSearchModal;
