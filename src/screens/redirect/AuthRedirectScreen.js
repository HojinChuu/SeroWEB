import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import Spinner from "../../components/helpers/Spinner";

const AuthRedirectScreen = ({ history }) => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userToken, success } = userLogin;

  useEffect(() => {
    if (userToken) {
      history.push("/");
    }
    if (success && localStorage.getItem("qrCode")) {
      history.push(`/qrcode?code=${localStorage.getItem("qrCode")}`);
      localStorage.removeItem("qrCode");
    }
  }, [history, userToken, success]);
  return <Spinner />;
};

export default AuthRedirectScreen;
