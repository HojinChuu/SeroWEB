import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Form, Button, Row, Col, Card, Image } from "react-bootstrap";
import Message from "../components/Message";
import Loader from "../components/Loader";
import FormContainer from "../components/FormContainer";
import PostCodeSearch from "../components/PostCodeSearch";
import { register, smsMessage, smsMessageCheck } from "../actions/userActions";

const RegisterScreen = () => {
  const form = useRef(null);
  const [socialValue, setSocialValue] = useState(0);
  const [phone, setPhone] = useState("");
  const [code, setCode] = useState("");
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState({ preview: "", raw: "" });
  const [address, setAddress] = useState("");
  const [addressDetail, setAddressDetail] = useState("");
  const [postCode, setPostCode] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState(null);
  const [postSearch, setPostSearch] = useState(false);

  const dispatch = useDispatch();

  const userRegister = useSelector((state) => state.userRegister);
  const { loading, error, userInfo } = userRegister;

  const userMessage = useSelector((state) => state.userMessage);
  const {
    loading: smsLoading,
    error: smsError,
    success: smsSuccess,
  } = userMessage;

  const handleImageChange = (e) => {
    if (e.target.files.length) {
      setPhoto({
        preview: URL.createObjectURL(e.target.files[0]),
        raw: e.target.files[0],
      });
    }
  };

  const handleComplete = (data) => {
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
      setMessage("Passwords do not match");
    } else {
      const profileImage = new FormData(form.current);
      profileImage.append("myImage", photo.raw);
      dispatch(
        register({
          socialValue,
          phone,
          name,
          profileImage,
          address,
          addressDetail,
          postCode,
          password,
        })
      );
    }
  };

  return (
    <FormContainer>
      {loading ? (
        <Loader />
      ) : (
        <Card className="p-4 mt-3">
          <h1 className="text-center">Sign Up</h1>
          {message && <Message variant="danger">{message}</Message>}
          <Form
            onSubmit={submitHandler}
            ref={form}
            encType="multipart/form-data"
          >
            <Form.Group controlId="phone">
              <Form.Label>Phone Number</Form.Label>
              <Row className="mb-4">
                <Col>
                  <Form.Control
                    type="text"
                    placeholder="Enter Phone Number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  ></Form.Control>
                </Col>
                <Col>
                  <Button
                    variant="primary"
                    className="btn btn-block"
                    onClick={() => dispatch(smsMessage(phone))}
                  >
                    Ok
                  </Button>
                </Col>
              </Row>
            </Form.Group>

            {smsSuccess && (
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
                    onClick={() => dispatch(smsMessageCheck(phone, code))}
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
                  onChange={handleImageChange}
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
                    required
                  ></Form.Control>
                </Col>
              </Row>
            </Form.Group>

            <PostCodeSearch visible={postSearch} onComplete={handleComplete} />

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
