import React from "react";
import AppleLogin from "react-apple-signin-auth";

const AppleAuth = () => {
  const onSuccess = (response) => {
    console.log(response);
  };

  const onFailure = () => {
    console.log("error");
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
