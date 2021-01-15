import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Image } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  register,
  smsMessage,
  smsMessageCheck,
} from "../../actions/userActions";

import FormContainer from "../../components/helpers/FormContainer";
import AddressSearchModal from "../../components/users/AddressSearchModal";
import Message from "../../components/helpers/Message";
import Loader from "../../components/helpers/Loader";

const RegisterScreen = ({ history }) => {
  // Form
  const [socialValue, setSocialValue] = useState(0);
  const [phone, setPhone] = useState("");
  const [code, setCode] = useState("");
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState({ preview: "", file: "" });
  const [address, setAddress] = useState("");
  const [addressDetail, setAddressDetail] = useState("");
  const [postCode, setPostCode] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // State
  const [message, setMessage] = useState({ success: "", fail: "" });
  const [smsVisible, setSmsVisible] = useState(false);
  const [postSearch, setPostSearch] = useState(false);
  const [validation, setValidation] = useState({
    nameErr: "",
    passwordErr: "",
    confirmPasswordErr: "",
    addressDetailErr: "",
  });

  const dispatch = useDispatch();

  const userRegister = useSelector((state) => state.userRegister);
  const { loading, error, success: registerSuccess } = userRegister;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const userMessage = useSelector((state) => state.userMessage);
  const { loading: smsLoading, error: smsError, code: smsCode } = userMessage;

  const userMessageCheck = useSelector((state) => state.userMessageCheck);
  const { success: smsCheckSuccess, error: smsCheckSError } = userMessageCheck;

  useEffect(() => {
    if (userInfo) {
      history.push("/");
    }
  }, [history, userInfo]);

  useEffect(() => {
    if (registerSuccess) {
      history.push("/login");
    }
  }, [history, registerSuccess]);

  const messageSendHandler = () => {
    dispatch(smsMessage(phone));
    setSmsVisible(true);
  };

  const messageCheckHandler = () => {
    if (code == smsCode) {
      dispatch(smsMessageCheck(phone, code));
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
    let fullAddress = data.address;
    let extraAddress = "";
    let zoneCodes = data.zonecode;

    if (data.addressType === "R") {
      if (data.bname !== "") {
        extraAddress += data.bname;
      }
      if (data.buildingName !== "") {
        extraAddress +=
          extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
    }

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
      formData.append("usSocialValue", socialValue);
      formData.append("usPhoneNumber", phone);
      formData.append("usName", name);
      formData.append("usAddress", address);
      formData.append("usAddressDetail", addressDetail);
      formData.append("usAddressNumber", postCode);
      formData.append("usPassword", password);
      formData.append("usPhoto", photo.file);
      dispatch(register(formData));
    }
  };

  return (
    <FormContainer>
      {loading ? (
        <Loader />
      ) : (
        <div className="card p-4 mt-3 rounded">
          <h1 className="text-center">Sign Up</h1>
          {message.fail && <Message variant="danger">{message.fail}</Message>}
          {message.success && (
            <Message variant="success">{message.success}</Message>
          )}
          <form onSubmit={submitHandler} encType="multipart/form-data">
            <div className="form-group" id="phone">
              <label>Phone Number</label>
              <div className="row mb-4">
                <div className="col">
                  <input
                    type="text"
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
                    onClick={messageSendHandler}
                  >
                    Ok
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
                    disabled={code.length == 0}
                    onClick={messageCheckHandler}
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
                onChange={(e) => setName(e.target.value)}
              />
              {validation.nameErr && (
                <small className="validation">{validation.nameErr}</small>
              )}
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
                <div className="col-md-10 col-xs-10">
                  <label>Address</label>
                </div>
                <div className="col-md-2 col-xs-2">
                  <button
                    type="button"
                    className="btn btn-outline-light btn-sm"
                    style={{ color: "grey" }}
                    onClick={() => setPostSearch(true)}
                  >
                    Search
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
                  {validation.addressDetailErr && (
                    <small className="validation">
                      {validation.addressDetailErr}
                    </small>
                  )}
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

            <div className="form-group" id="password">
              <label>Password</label>
              <input
                type="password"
                placeholder="Enter password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {validation.passwordErr && (
                <small className="validation">{validation.passwordErr}</small>
              )}
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
              {validation.confirmPasswordErr && (
                <small className="validation">
                  {validation.confirmPasswordErr}
                </small>
              )}
            </div>

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
