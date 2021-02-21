import React, { Fragment } from "react";
import { useLocation } from "react-router-dom";
import useWindowDimensions from "../../hooks/useWindowDimensions";

const Footer = () => {
  const location = useLocation();
  const { width } = useWindowDimensions();

  return (
    <Fragment>
      {location.pathname !== "/qrcode" && (
        <footer>
          <div className="row">
            <div
              className={
                location.pathname === "/" && width <= 414
                  ? "col text-right p-5 mb-4"
                  : "col text-right p-5"
              }
            >
              Copyright &copy; SERO
            </div>
          </div>
        </footer>
      )}
    </Fragment>
  );
};

export default Footer;
