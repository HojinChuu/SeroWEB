import React from "react";
import { GoogleLogin } from "react-google-login";
import { GOOGLE_CLIENT_ID } from "../../config";
import { useDispatch, useSelector } from "react-redux";
import { authRequest } from "../../actions/userActions";

const GoogleAuth = () => {
  const dispatch = useDispatch();

  const onSuccess = (res) => {
    dispatch(authRequest({ ...res.profileObj, usSocialValue: 1 }));
  };

  const onFailure = (res) => {
    console.log(res);
  };

  return (
    <GoogleLogin
      clientId={GOOGLE_CLIENT_ID}
      onSuccess={onSuccess}
      onFailure={onFailure}
      cookiePolicy={"single_host_origin"}
      theme="dark"
      render={(renderProps) => (
        <button
          className="mt-2 btn btn-lg rounded"
          onClick={renderProps.onClick}
          style={googleBtn}
        >
          Login With Google
        </button>
      )}
    />
  );
};

const googleBtn = {
  width: "100%",
  backgroundColor: "#DA2929",
  color: "white",
  fontWeight: "bold",
};

export default GoogleAuth;
