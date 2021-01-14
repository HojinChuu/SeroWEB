import React, { useState, Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Row, Col, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../actions/userActions";

import FormContainer from "../components/FormContainer";
import Loader from "../components/Loader";

const LoginScreen = ({ history }) => {
  const [socialValue, setSocialValue] = useState(0);
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  useEffect(() => {
    if (userInfo) {
      history.push("/");
    }
  }, [history, userInfo]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(socialValue, phone, password));
  };

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <FormContainer>
          <Card className="p-4 mt-3">
            <h1 className="text-center">Sign In</h1>
            <Form onSubmit={submitHandler}>
              <Form.Group controlId="phone">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  type="phone"
                  placeholder="Enter Phone Number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
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

              <Button
                type="submit"
                variant="primary"
                className="btn btn-block mt-4"
              >
                Sign In
              </Button>
            </Form>

            <Row className="py-3">
              <Col>
                New Customer? <Link to="/register">Register</Link>
              </Col>
            </Row>
          </Card>
        </FormContainer>
      )}
    </Fragment>
  );
};

export default LoginScreen;
