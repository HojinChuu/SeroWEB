import React, { useState, Fragment, useEffect } from "react";
import { Link, Route, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUserInfo, login } from "../actions/userActions";

import FormContainer from "../components/helpers/FormContainer";
import Spinner from "../components/helpers/Spinner";
import AppleAuth from "../components/users/AppleAuth";
import GoogleAuth from "../components/users/GoogleAuth";
import KakaoAuth from "../components/users/KakaoAuth";
import Message from "../components/helpers/Message";
import FindPasswordForm from "../components/users/FindPasswordForm";

const LoginScreen = ({ history }) => {
  const location = useLocation();
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);

  const { loading, userToken, success, error } = userLogin;

  useEffect(() => {
    if (userToken) {
      history.push("/");
    }
    if (success && localStorage.getItem("qrCode")) {
      history.push(`/qrcode?code=${localStorage.getItem("qrCode")}`);
      localStorage.removeItem("qrCode");
    }
    if (localStorage.getItem("qrCode")) {
      setMessage("엽서를 확인하시려면 로그인이 필요합니다.");
    }
  }, [history, userToken, success, message]);

  useEffect(() => {
    if (error) {
      setMessage("아이디 또는 비밀번호 오류입니다.");
    }
  }, [error]);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(error);
    if (!phone || !password) {
      setMessage("빈칸을 모두 입력해 주세요.");
    } else {
      dispatch(login(0, phone, password));
      dispatch(getUserInfo());
    }
  };

  return (
    <Fragment>
      {loading ? (
        <Spinner />
      ) : (
        <FormContainer>
          {location.pathname === "/login" ? (
            <div className="card p-4 mt-4 rounded mb-4 loginForm">
              <h1 className="text-center">LOGIN</h1>
              {message && <Message variant="danger">{message}</Message>}
              <form onSubmit={submitHandler}>
                <div className="form-group" id="phone">
                  <label>Phone Number</label>
                  <input
                    type="phone"
                    placeholder="Enter Phone Number"
                    className="form-control"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>

                <div className="form-group" id="password">
                  <label>Password</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    autoComplete="on"
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-block btn-primary mt-4 btn-lg rounded"
                >
                  OK
                </button>
              </form>

              <div className="row py-3">
                <div className="col">
                  <Link
                    to="/register"
                    style={{ textDecoration: "none", fontSize: "13px" }}
                  >
                    회원가입 하기
                  </Link>
                </div>
                <Link
                  to="/login/password"
                  style={{ textDecoration: "none", fontSize: "13px" }}
                  className="mr-3"
                >
                  비밀번호 찾기
                </Link>
              </div>
              <AppleAuth history={history} />
              <GoogleAuth history={history} />
              <KakaoAuth history={history} />
            </div>
          ) : (
            <Route path="/login/password" component={FindPasswordForm} exact />
          )}
        </FormContainer>
      )}
    </Fragment>
  );
};

export default LoginScreen;
