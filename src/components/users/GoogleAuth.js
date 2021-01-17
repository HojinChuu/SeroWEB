import React from "react";
import { GoogleLogin } from "react-google-login";
import { DEFAULT_PROFILE, GOOGLE_CLIENT_ID } from "../../config";
import { useDispatch } from "react-redux";
import { authRequest } from "../../actions/userActions";

const GoogleAuth = ({ history }) => {
  const dispatch = useDispatch();

  const onSuccess = ({ profileObj }) => {
    const authInfo = {
      id: profileObj.googleId,
      name: profileObj.name,
      image: profileObj.imageUrl ? profileObj.imageUrl : DEFAULT_PROFILE,
      usSocialValue: 2,
    };
    dispatch(authRequest(authInfo));
    history.push("/auth");
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
