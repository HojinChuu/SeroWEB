import React from "react";
import KaKaoLogin from "react-kakao-login";
import { KAKAO_CLIENT_ID } from "../../config";

const KakaoAuth = () => {
  window.Kakao.init(KAKAO_CLIENT_ID);

  const onSuccess = (res) => {
    console.log(res.profile);
  };

  const onFailure = (res) => {
    console.log(res);
  };

  return (
    <KaKaoLogin
      jsKey={KAKAO_CLIENT_ID}
      onSuccess={onSuccess}
      onFailure={onFailure}
      getProfile={true}
      render={(renderProps) => (
        <button
          className="mt-2 btn btn-lg rounded"
          onClick={renderProps.onClick}
          style={kakaoBtn}
        >
          Login With Kakao
        </button>
      )}
    />
  );
};

const kakaoBtn = {
  width: "100%",
  backgroundColor: "#EBDC35",
  color: "black",
  fontWeight: "bold",
};

export default KakaoAuth;
