import React from "react";
import KaKaoLogin from "react-kakao-login";
import { KAKAO_CLIENT_ID, DEFAULT_PROFILE } from "../../config";
import { useDispatch } from "react-redux";
import { authRequest } from "../../actions/userActions";

const KakaoAuth = ({ history }) => {
  const dispatch = useDispatch();

  const onSuccess = ({ profile }) => {
    const authInfo = {
      id: profile.id,
      name: profile.kakao_account.profile.nickname,
      image: profile.kakao_account.profile.profile_image_url
        ? profile.kakao_account.profile.profile_image_url
        : DEFAULT_PROFILE,
      usSocialValue: 1,
    };
    dispatch(authRequest(authInfo));
    history.push("/auth");
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
  backgroundColor: "#ffeb00",
  color: "#783c00",
  fontWeight: "bold",
};

export default KakaoAuth;
