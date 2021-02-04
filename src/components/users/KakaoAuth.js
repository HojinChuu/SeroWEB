import React, { useEffect } from "react";
import { KAKAO_CLIENT_ID, DEFAULT_PROFILE } from "../../config";
import { useDispatch } from "react-redux";
import { authRequest } from "../../actions/userActions";

const KakaoAuth = ({ history }) => {
  const { Kakao } = window;
  const dispatch = useDispatch();

  useEffect(() => {
    if (!Kakao.isInitialized()) {
      Kakao.init(KAKAO_CLIENT_ID);
    }
  });

  // thumbnail_image_url
  const onSuccess = () => {
    Kakao.Auth.login({
      throughTalk: false,
      success: () => {
        Kakao.API.request({
          url: "/v2/user/me",
          success: (profile) => {
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
          },
        });
      },
      fail: (error) => {
        console.log(error);
      },
    });
  };

  return (
    <button
      id="kakao-login-btn"
      onClick={onSuccess}
      style={kakaoBtn}
      className="mt-2 btn btn-lg rounded"
    >
      kakao
    </button>
  );
};

const kakaoBtn = {
  width: "100%",
  backgroundColor: "#ffeb00",
  color: "#783c00",
  fontWeight: "bold",
};

export default KakaoAuth;
