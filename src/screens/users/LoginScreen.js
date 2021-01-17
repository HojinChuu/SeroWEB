import React, { useState, Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUserInfo, login } from "../../actions/userActions";

import FormContainer from "../../components/helpers/FormContainer";
import Spinner from "../../components/helpers/Spinner";
import GoogleAuth from "../../components/users/GoogleAuth";
import KakaoAuth from "../../components/users/KakaoAuth";

const LoginScreen = ({ history }) => {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, userToken } = userLogin;

  useEffect(() => {
    if (userToken) {
      history.push("/");
    }
  }, [history, userToken]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(0, phone, password));
    dispatch(getUserInfo());
  };

  return (
    <Fragment>
      {loading ? (
        <Spinner />
      ) : (
        <FormContainer>
          <div className="card p-4 mt-3 rounded">
            <h1 className="text-center">Sign In</h1>
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
                />
              </div>

              <button
                type="submit"
                className="btn btn-block btn-primary mt-4 btn-lg rounded"
              >
                Sign In
              </button>
            </form>

            <div className="row py-3 mb-3">
              <div className="col">
                New Customer? <Link to="/register">Register</Link>
              </div>
            </div>
            <GoogleAuth history={history} />
            <KakaoAuth history={history} />
          </div>
        </FormContainer>
      )}
    </Fragment>
  );
};

export default LoginScreen;
