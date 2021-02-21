import React from "react";
import AppleLogin from "react-apple-signin-auth";
import { APPLE_CLIENT_ID } from "../../config";

const AppleAuth = ({ history }) => {
  const onSuccess = () => {
    console.log("success");
  };

  const onFailure = () => {
    console.log("error");
  };

  return (
    <AppleLogin
      authOptions={{
        clientId: { APPLE_CLIENT_ID },
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
