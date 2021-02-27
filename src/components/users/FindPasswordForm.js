import React, { useEffect, useState } from "react";
import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  findPassSendSms,
  checkSms,
  updatePassword,
} from "../../actions/userActions";

import Message from "../helpers/Message";
import Spinner from "../helpers/Spinner";

const FindPasswordForm = ({ history }) => {
  const [phone, setPhone] = useState("");
  const [code, setCode] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [smsVisible, setSmsVisible] = useState(false);
  const [message, setMessage] = useState({ success: "", fail: "" });

  const dispatch = useDispatch();
  const userSms = useSelector((state) => state.userSms);
  const userSmsCheck = useSelector((state) => state.userSmsCheck);
  const userUpdatePassword = useSelector((state) => state.userUpdatePassword);

  const { code: smsCode } = userSms;
  const { success: smsCheckSuccess } = userSmsCheck;
  const { loading, success: updateSuccess } = userUpdatePassword;

  useEffect(() => {
    if (updateSuccess) {
      history.push("/login");
    }
  }, [history, updateSuccess]);

  const smsSendHandler = () => {
    if (!phone) {
      setMessage({ fail: "휴대폰번호를 입력해주세요." });
    } else {
      dispatch(findPassSendSms(phone));
      setSmsVisible(true);
    }
  };

  const smsCheckHandler = () => {
    if (parseInt(code) === smsCode) {
      dispatch(checkSms(phone, code));
      setMessage({ success: "SMS success" });
      setSmsVisible(false);
    } else {
      setMessage({ fail: "SMS code do not match" });
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword && smsCheckSuccess) {
      setMessage({ fail: "Passwords do not match" });
    } else {
      dispatch(updatePassword(phone, password));
    }
  };

  return (
    <Fragment>
      {loading ? (
        <Spinner />
      ) : (
        <div
          className="card p-4 mt-3 rounded mb-4 loginForm"
          style={{ backgroundColor: "transparent" }}
        >
          <h1 className="text-center">비밀번호 찾기</h1>
          {message.fail && <Message variant="danger">{message.fail}</Message>}
          {message.success && (
            <Message variant="success">{message.success}</Message>
          )}
          <form onSubmit={submitHandler}>
            <div className="form-group" id="phone">
              <label>Phone Number</label>
              <div className="row mb-4">
                <div className="col">
                  <input
                    type="number"
                    placeholder="Enter Phone Number"
                    className="form-control"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    readOnly={smsCheckSuccess}
                  />
                </div>
                <div className="col">
                  <button
                    type="button"
                    variant="primary"
                    className="btn btn-block btn-primary"
                    disabled={smsCheckSuccess}
                    onClick={smsSendHandler}
                  >
                    Send SMS
                  </button>
                </div>
              </div>
            </div>

            {smsVisible && (
              <div className="row mb-4">
                <div className="col">
                  <input
                    type="text"
                    placeholder="Number"
                    className="form-control"
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                  />
                </div>
                <div className="col">
                  <button
                    type="button"
                    variant="primary"
                    className="btn btn-block btn-primary"
                    disabled={code.length === 0}
                    onClick={smsCheckHandler}
                  >
                    Ok
                  </button>
                </div>
              </div>
            )}
            {smsCheckSuccess && (
              <Fragment>
                <div className="form-group" id="password">
                  <label>Password</label>
                  <input
                    type="password"
                    placeholder="Enter password"
                    className="form-control"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                <div className="form-group" id="confirmPassword">
                  <label>Confirm Password</label>
                  <input
                    type="password"
                    placeholder="Enter Confirm Password"
                    className="form-control"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-block btn-primary mt-4 btn-lg rounded"
                >
                  OK
                </button>
              </Fragment>
            )}
          </form>
        </div>
      )}
    </Fragment>
  );
};

export default FindPasswordForm;
