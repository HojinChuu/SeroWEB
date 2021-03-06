import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import Spinner from "../../components/helpers/Spinner";

const AuthRedirectScreen = ({ history }) => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userToken, success, authInfo } = userLogin;

  useEffect(() => {
    if (userToken) {
      history.push("/");
    }
    if (success && localStorage.getItem("qrCode")) {
      history.push(`/qrcode?code=${localStorage.getItem("qrCode")}`);
      localStorage.removeItem("qrCode");
    }
    if (authInfo) {
      history.push("/register");
    }
  }, [history, userToken, success, authInfo]);

  return <Spinner />;
};

export default AuthRedirectScreen;
