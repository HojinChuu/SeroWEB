import React, { useState, useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
import { Image } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { register, sendSms, checkSms } from "../actions/userActions";
import { bindAddress } from "../utils/bindAddress";
import { DEFAULT_PROFILE } from "../config";

import FormContainer from "../components/helpers/FormContainer";
import AddressSearchModal from "../components/users/AddressSearchModal";
import Message from "../components/helpers/Message";
import Spinner from "../components/helpers/Spinner";

const RegisterScreen = ({ history }) => {
  const [phone, setPhone] = useState("");
  const [code, setCode] = useState("");
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState({ preview: "", file: "" });
  const [address, setAddress] = useState("");
  const [addressDetail, setAddressDetail] = useState("");
  const [postCode, setPostCode] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState({ success: "", fail: "" });
  const [smsVisible, setSmsVisible] = useState(false);
  const [postSearch, setPostSearch] = useState(false);

  const dispatch = useDispatch();
  const userRegister = useSelector((state) => state.userRegister);
  const userLogin = useSelector((state) => state.userLogin);
  const userSms = useSelector((state) => state.userSms);
  const userSmsCheck = useSelector((state) => state.userSmsCheck);

  const { loading, success: registerSuccess, error: validation } = userRegister;
  const { userInfo, authInfo } = userLogin;
  const { code: smsCode, error: smsSameErr } = userSms;
  const { success: smsCheckSuccess } = userSmsCheck;

  useEffect(() => {
    if (userInfo) {
      history.push("/");
    }
    if (registerSuccess) {
      history.push("/login");
    }
  }, [history, userInfo, registerSuccess]);

  useEffect(() => {
    if (authInfo && authInfo.image) {
      setName(authInfo.name);
      fetch(authInfo.image).then(async (response) => {
        const contentType = response.headers.get("content-type");
        const blob = await response.blob();
        const file = new File([blob], "image.png", { contentType });
        setPhoto({
          preview: URL.createObjectURL(file),
          file: file,
        });
      });
    } else {
      fetch(DEFAULT_PROFILE).then(async (response) => {
        const contentType = response.headers.get("content-type");
        const blob = await response.blob();
        const file = new File([blob], "image.png", { contentType });
        setPhoto({
          preview: URL.createObjectURL(file),
          file: file,
        });
      });
    }
  }, [authInfo]);

  const smsSendHandler = () => {
    if (!phone) {
      setMessage({ fail: "휴대폰번호를 입력해주세요." });
    } else {
      dispatch(sendSms(phone));
    }
  };

  useEffect(() => {
    if (smsSameErr) {
      setMessage({ fail: "휴대폰번호가 이미 존재합니다." });
    }
    if (smsCode) {
      setSmsVisible(true);
    }
  }, [smsCode, smsSameErr]);

  const smsCheckHandler = () => {
    if (parseInt(code) === smsCode) {
      dispatch(checkSms(phone, code));
      setMessage({ success: "SMS success" });
      setSmsVisible(false);
    } else {
      setMessage({ fail: "SMS code do not match" });
    }
  };

  const imageChangeHandler = (e) => {
    if (e.target.files.length) {
      setPhoto({
        preview: URL.createObjectURL(e.target.files[0]),
        file: e.target.files[0],
      });
    }
  };

  const addressCompleteHandler = (data) => {
    const { fullAddress, zoneCodes } = bindAddress(data);
    setAddress(fullAddress);
    setPostCode(zoneCodes);
    setPostSearch(false);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword && smsCheckSuccess) {
      setMessage({ fail: "Passwords do not match" });
    } else {
      const formData = new FormData();
      if (!authInfo) {
        formData.append("usSocialValue", 0);
        formData.append("usPassword", password);
      } else {
        formData.append("usSocialValue", authInfo.usSocialValue);
        formData.append("usSocialId", authInfo.id);
      }
      formData.append("usPhoneNumber", phone);
      formData.append("usName", name);
      formData.append("usAddress", address);
      formData.append("usAddressDetail", addressDetail);
      formData.append("usAddressNumber", postCode);
      formData.append("usPhoto", photo.file);
      dispatch(register(formData));
    }
  };

  return (
    <FormContainer>
      {loading ? (
        <Spinner />
      ) : (
        <div
          className="card p-4 mt-4 rounded mb-5 registerForm"
          style={{ backgroundColor: "transparent" }}
        >
          <h1 className="text-center">SIGN UP</h1>
          {validation && (
            <Message variant="danger">
              {validation.map((validate, index) => (
                <div key={index} style={{ fontSize: "12px" }}>
                  {index + 1}. {validate.message}
                </div>
              ))}
            </Message>
          )}
          {message.fail && !smsCode && (
            <Message variant="danger">{message.fail}</Message>
          )}
          {message.success && (
            <Message variant="success">{message.success}</Message>
          )}
          <form onSubmit={submitHandler} encType="multipart/form-data">
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

            <div id="name" className="form-group">
              <label>Name</label>
              <input
                type="text"
                placeholder="Enter Name"
                className="form-control"
                value={name}
                readOnly={authInfo}
                onChange={(e) => setName(e.target.value)}
              />
              {/* {validation.nameErr && (
                <small className="validation">{validation.nameErr}</small>
              )} */}
            </div>

            <div className="form-group">
              <label htmlFor="upload-button" style={{ cursor: "pointer" }}>
                Photo
                <input
                  id="upload-button"
                  className="form-control"
                  type="file"
                  style={{ display: "none" }}
                  onChange={imageChangeHandler}
                ></input>
                <div className="col">
                  <Image
                    rounded
                    id="upload"
                    className="mt-3"
                    src={photo.preview ? photo.preview : "image/no-image.png"}
                    style={{
                      width: "120px",
                      height: "100px",
                    }}
                  />
                </div>
              </label>
            </div>
            <div className="form-group" id="address">
              <div className="row justify-content-between">
                <div className="col">
                  <label>Address</label>
                  <button
                    type="button"
                    className="btn btn-sm"
                    style={{ color: "grey" }}
                    onClick={() => setPostSearch(true)}
                  >
                    <i className="fas fa-search-location fa-lg"></i>
                  </button>
                </div>
              </div>
              <input
                type="text"
                placeholder="Enter Address"
                className="form-control"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                readOnly
                required
              />
            </div>

            <div className="form-group" id="addressDetail">
              <div className="row">
                <div className="col-md-8 col-xs-8">
                  <label>Address Detail</label>
                  <input
                    type="text"
                    placeholder="Enter Address Detail"
                    className="form-control"
                    value={addressDetail}
                    onChange={(e) => setAddressDetail(e.target.value)}
                  />
                  {/* {validation.addressDetailErr && (
                    <small className="validation">
                      {validation.addressDetailErr}
                    </small>
                  )} */}
                </div>
                <div className="col-md-4 col-xs-4">
                  <label>Post Code</label>
                  <input
                    type="text"
                    placeholder="Enter Post Code"
                    className="form-control"
                    value={postCode}
                    onChange={(e) => setPostCode(e.target.value)}
                    readOnly
                    required
                  />
                </div>
              </div>
            </div>

            {postSearch && (
              <AddressSearchModal
                visible={postSearch}
                onComplete={addressCompleteHandler}
                cancelBtn={() => setPostSearch(false)}
              />
            )}
            {!authInfo && (
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
                  {/* {validation.passwordErr && (
                    <small className="validation">
                      {validation.passwordErr}
                    </small>
                  )} */}
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
                  {/* {validation.confirmPasswordErr && (
                    <small className="validation">
                      {validation.confirmPasswordErr}
                    </small>
                  )} */}
                </div>
              </Fragment>
            )}

            <button type="submit" className="btn btn-block mt-4 btn-primary">
              Register
            </button>
          </form>

          <div className="row py-3">
            <div className="col">
              Have an Account? <Link to="/login">Login</Link>
            </div>
          </div>
        </div>
      )}
    </FormContainer>
  );
};

export default RegisterScreen;
