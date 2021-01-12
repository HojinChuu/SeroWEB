import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Form, Button, Row, Col, Card } from "react-bootstrap";
import FormContainer from "../components/FormContainer";
import { register } from "../actions/userActions";

const RegisterScreen = () => {
  const [socialValue, setSocialValue] = useState(0);
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState();
  const [address, setAddress] = useState("");
  const [addressDetail, setAddressDetail] = useState("");
  const [postCode, setPostCode] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const dispatch = useDispatch();

  const userRegister = useSelector((state) => state.userRegister);
  const { loading, error, userInfo } = userRegister;

  const onChangeFile = (e) => {
    console.log(e);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      // Errro Alert
    } else {
      dispatch(
        register({
          socialValue,
          phone,
          name,
          photo,
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
      <Card className="p-4 mt-5">
        <h1 className="text-center">Sign Up</h1>
        <Form onSubmit={submitHandler} encType="multipart/form-data">
          <Form.Group controlId="phone">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId="photo">
            <Form.Label>Photo</Form.Label>
            <Form.Control type="file" onChange={onChangeFile}></Form.Control>
          </Form.Group>

          <Form.Group controlId="address">
            <Form.Label>Address</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId="adressDetail">
            <Form.Label>Adress Detail</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Adress Detail"
              value={addressDetail}
              onChange={(e) => setAddressDetail(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId="postCode">
            <Form.Label>Post Code</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Post Code"
              value={postCode}
              onChange={(e) => setPostCode(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId="confirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
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
    </FormContainer>
  );
};

export default RegisterScreen;
