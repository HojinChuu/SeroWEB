import React, { Fragment } from "react";

const Footer = () => {
  return (
    <Fragment>
      {window.location.pathname !== "/qrcode" && (
        <footer>
          <div className="row">
            <div className="col text-center py-3">Copyright &copy; SERO</div>
          </div>
        </footer>
      )}
    </Fragment>
  );
};

export default Footer;
