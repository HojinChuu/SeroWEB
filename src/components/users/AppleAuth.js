import React from "react";
import { useDispatch } from "react-redux";
import AppleLogin from "react-apple-signin-auth";
import { authRequest } from "../../actions/userActions";
import { DEFAULT_PROFILE } from "../../config";

const AppleAuth = ({ history }) => {
  const dispatch = useDispatch();

  const onSuccess = ({ authorization }) => {
    const response = JSON.parse(atob(authorization.id_token.split(".")[1]));
    const authInfo = {
      id: response.sub,
      name: "이름을 정해주세요",
      image: DEFAULT_PROFILE,
      usSocialValue: 3,
    };
    dispatch(authRequest(authInfo));
    history.push("/auth");
  };

  const onFailure = () => {
    // console.log("error");
  };

  return (
    <AppleLogin
      authOptions={{
        clientId: "seropost.com",
        scope: "email name",
        redirectURI: "https://seropost.com",
        state: "",
        nonce: "nonce",
        usePopup: true,
      }}
      onSuccess={onSuccess}
      onError={onFailure}
      render={(renderProps) => (
        <button
          className="mt-2 btn btn-lg rounded"
          onClick={renderProps.onClick}
          style={appleBtn}
        >
          Apple
        </button>
      )}
    />
  );
};

const appleBtn = {
  width: "100%",
  backgroundColor: "#333333",
  color: "white",
  fontWeight: "bold",
};

export default AppleAuth;
