import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import Spinner from "../../components/helpers/Spinner";

const AuthRedirectScreen = ({ history }) => {
  const userLogin = useSelector((state) => state.userLogin);
  const { loading, userToken } = userLogin;

  useEffect(() => {
    if (!loading) {
      userToken ? history.push("/") : history.push("/register");
    }
  }, [history, loading, userToken]);
  return <Spinner />;
};

export default AuthRedirectScreen;
