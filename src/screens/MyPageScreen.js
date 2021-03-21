import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const MyPageScreen = ({ history }) => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (!userInfo && !localStorage.getItem("userToken")) {
      history.push("/");
    }
  }, [userInfo, history]);

  return <h1 className="text-center">준비중 입니다...</h1>;
};

export default MyPageScreen;
