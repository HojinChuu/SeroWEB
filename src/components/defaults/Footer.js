import React, { Fragment } from "react";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();

  return (
    <Fragment>
      {location.pathname !== "/qrcode" && (
        <footer>
          <div className="row">
            <div className="col text-right p-5">Copyright &copy; SERO</div>
          </div>
        </footer>
      )}
    </Fragment>
  );
};

export default Footer;
