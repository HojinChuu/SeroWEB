import React from "react";
import { useDispatch } from "react-redux";
import KakaoLogin from "react-kakao-login";
import { authRequest } from "../../actions/userActions";
import { KAKAO_CLIENT_ID, DEFAULT_PROFILE } from "../../config";

const KakaoAuth = ({ history }) => {
  const dispatch = useDispatch();

  const onSuccess = ({ profile }) => {
    const authInfo = {
      id: profile.googleId,
      name: profile.properties.nickname,
      image: profile.kakao_account.profile.profile_image_url
        ? DEFAULT_PROFILE
        : DEFAULT_PROFILE,
      usSocialValue: 1,
    };
    dispatch(authRequest(authInfo));
    history.push("/auth");
  };

  const onFailure = (res) => {
    // console.log(res);
  };

  return (
    <KakaoLogin
      token={KAKAO_CLIENT_ID}
      onSuccess={onSuccess}
      onFail={onFailure}
      onLogout={console.info}
      render={(renderProps) => {
        return (
          <button
            className="mt-2 btn btn-lg rounded"
            onClick={renderProps.onClick}
            style={kakaoBtn}
          >
            kakao
          </button>
        );
      }}
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
