import React, { Fragment } from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Navbar, Nav, Container, NavDropdown, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../actions/userActions";

const Header = () => {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo, refreshLoading } = userLogin;

  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>SERO</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              {refreshLoading ? (
                <Spinner animation="border" variant="info" />
              ) : (
                <Fragment>
                  {userInfo && userInfo.usGrant === 0 && (
                    <LinkContainer to="/register">
                      <Nav.Link>Admin</Nav.Link>
                    </LinkContainer>
                  )}
                  {userInfo ? (
                    <NavDropdown title={userInfo.usName} id="username">
                      <LinkContainer to="/profile">
                        <NavDropdown.Item>MyPage</NavDropdown.Item>
                      </LinkContainer>
                      <NavDropdown.Item onClick={() => dispatch(logout())}>
                        Logout
                      </NavDropdown.Item>
                    </NavDropdown>
                  ) : (
                    <Fragment>
                      <LinkContainer to="/login">
                        <Nav.Link>LOGIN</Nav.Link>
                      </LinkContainer>
                      <LinkContainer to="/register">
                        <Nav.Link>SIGN UP</Nav.Link>
                      </LinkContainer>
                    </Fragment>
                  )}
                </Fragment>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
