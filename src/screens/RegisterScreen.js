import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Row, Col, Card, Image } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { register, smsMessage, smsMessageCheck } from "../actions/userActions";

import FormContainer from "../components/FormContainer";
import PostCodeSearch from "../components/PostCodeSearch";
import Message from "../components/Message";
import Loader from "../components/Loader";

const RegisterScreen = ({ history }) => {
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
  const [message, setMessage] = useState({ success: "", fail: "" });
  const [postSearch, setPostSearch] = useState(false);
  const [smsVisible, setSmsVisible] = useState(false);

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

  const messageSendHandler = () => {
    dispatch(smsMessage(phone));
    setSmsVisible(true);
  };

  const messageCheckHandler = () => {
    if (code !== smsCode) {
      setMessage({ fail: "SMS code do not match" });
    } else {
      dispatch(smsMessageCheck(phone, code));
      setMessage({ success: "SMS success" });
      setSmsVisible(false);
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
    if (password !== confirmPassword) {
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
      if (registerSuccess) {
        history.push("/");
      }
    }
  };

  return (
    <FormContainer>
      {loading ? (
        <Loader />
      ) : (
        <Card className="p-4 mt-3">
          <h1 className="text-center">Sign Up</h1>
          {message.fail && <Message variant="danger">{message.fail}</Message>}
          {message.success && (
            <Message variant="success">{message.success}</Message>
          )}
          <Form onSubmit={submitHandler} encType="multipart/form-data">
            <Form.Group controlId="phone">
              <Form.Label>Phone Number</Form.Label>
              <Row className="mb-4">
                <Col>
                  <Form.Control
                    type="text"
                    placeholder="Enter Phone Number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    readOnly={smsCheckSuccess}
                    required
                  ></Form.Control>
                </Col>
                <Col>
                  <Button
                    variant="primary"
                    className="btn btn-block"
                    disabled={smsCheckSuccess}
                    onClick={messageSendHandler}
                  >
                    Ok
                  </Button>
                </Col>
              </Row>
            </Form.Group>

            {smsVisible && (
              <Row className="mb-4">
                <Col>
                  <Form.Control
                    type="text"
                    placeholder="Number"
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    required
                  ></Form.Control>
                </Col>
                <Col>
                  <Button
                    variant="primary"
                    className="btn btn-block"
                    onClick={messageCheckHandler}
                  >
                    Ok
                  </Button>
                </Col>
              </Row>
            )}

            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              ></Form.Control>
            </Form.Group>

            <Form.Group>
              <Form.Label htmlFor="upload-button" style={{ cursor: "pointer" }}>
                Photo
                <Form.Control
                  id="upload-button"
                  type="file"
                  style={{ display: "none" }}
                  onChange={imageChangeHandler}
                ></Form.Control>
                <Col>
                  <Image
                    rounded
                    id="upload"
                    className="mt-3"
                    src={photo.preview ? photo.preview : "no-image.png"}
                    style={{
                      width: "120px",
                      height: "100px",
                    }}
                  />
                </Col>
              </Form.Label>
            </Form.Group>
            <Form.Group controlId="address">
              <Row className="justify-content-between">
                <Col xs={10} md={10}>
                  <Form.Label>Address</Form.Label>
                </Col>
                <Col xs={2} md={2}>
                  <Button
                    size="sm"
                    variant="outline-light"
                    style={{ color: "grey" }}
                    onClick={() => setPostSearch(true)}
                  >
                    Search
                  </Button>
                </Col>
              </Row>
              <Form.Control
                type="text"
                placeholder="Enter Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                readOnly
                required
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="addressDetail">
              <Row>
                <Col xs={8} md={8}>
                  <Form.Label>Address Detail</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Address Detail"
                    value={addressDetail}
                    onChange={(e) => setAddressDetail(e.target.value)}
                    required
                  ></Form.Control>
                </Col>
                <Col xs={4} md={4}>
                  <Form.Label>Post Code</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Post Code"
                    value={postCode}
                    onChange={(e) => setPostCode(e.target.value)}
                    readOnly
                    required
                  ></Form.Control>
                </Col>
              </Row>
            </Form.Group>

            {postSearch && (
              <PostCodeSearch
                visible={postSearch}
                onComplete={addressCompleteHandler}
                cancelBtn={() => setPostSearch(false)}
              />
            )}

            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="confirmPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              ></Form.Control>
            </Form.Group>

            <Button
              type="submit"
              variant="primary"
              className="btn btn-block mt-4"
            >
              Register
            </Button>
          </Form>

          <Row className="py-3">
            <Col>
              Have an Account? <Link to="/login">Login</Link>
            </Col>
          </Row>
        </Card>
      )}
    </FormContainer>
  );
};

export default RegisterScreen;
