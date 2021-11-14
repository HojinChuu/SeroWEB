import React, { useEffect, useState, Fragment } from "react";
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
      setMessage({ success: "SMS 인증되었습니다" });
      setSmsVisible(false);
    } else {
      setMessage({ fail: "SMS 코드가 다릅니다" });
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword && smsCheckSuccess) {
      setMessage({ fail: "비밀번호를 확인해주세요" });
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
          <h1 className="text-center mb-4" style={{ fontSize: "25px" }}>
            비밀번호 찾기
          </h1>
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
                    placeholder="전화번호를 입력하세요"
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
                    className="btn btn-block btn-dark"
                    disabled={smsCheckSuccess}
                    onClick={smsSendHandler}
                    style={{ backgroundColor: "#515151" }}
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
                    placeholder="전송된 코드를 입력하세요"
                    className="form-control"
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                  />
                </div>
                <div className="col">
                  <button
                    type="button"
                    variant="primary"
                    className="btn btn-block btn-dark"
                    disabled={code.length === 0}
                    onClick={smsCheckHandler}
                    style={{ backgroundColor: "#515151" }}
                  >
                    OK
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
                    placeholder="비밀번호를 입력하세요"
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
                  className="btn btn-block btn-dark mt-4 btn-lg rounded"
                  style={{ backgroundColor: "#515151" }}
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
