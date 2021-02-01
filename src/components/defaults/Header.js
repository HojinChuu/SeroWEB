import React, { Fragment } from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Navbar, Nav, NavDropdown, Spinner, Image } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../actions/userActions";

const Header = () => {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo, loading } = userLogin;

  return (
    <header>
      {window.location.pathname !== "/qrcode" && (
        <Navbar expand="lg" collapseOnSelect>
          <LinkContainer to="/">
            <Navbar.Brand>
              <Image src="/favicon.ico" />
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto navCustomRight">
              <LinkContainer to="/admin">
                <Nav.Link>ABOUT</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/admin">
                <Nav.Link>MAILBOX</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/admin">
                <Nav.Link>DESK</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto navCustomLeft">
              {loading ? (
                <Spinner animation="border" variant="light" className="mr-5" />
              ) : (
                <Fragment>
                  {userInfo && userInfo.usGrant === 1 && (
                    <LinkContainer to="/admin">
                      <Nav.Link>ADMIN</Nav.Link>
                    </LinkContainer>
                  )}
                  {userInfo ? (
                    <NavDropdown title={userInfo.usName} id="username">
                      <LinkContainer to="/mypage">
                        <NavDropdown.Item>마이페이지</NavDropdown.Item>
                      </LinkContainer>
                      <NavDropdown.Item onClick={() => dispatch(logout())}>
                        로그아웃
                      </NavDropdown.Item>
                    </NavDropdown>
                  ) : (
                    <Fragment>
                      <LinkContainer to="/login">
                        <Nav.Link>Login</Nav.Link>
                      </LinkContainer>
                      <LinkContainer to="/register">
                        <Nav.Link>Sign Up</Nav.Link>
                      </LinkContainer>
                    </Fragment>
                  )}
                </Fragment>
              )}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      )}
    </header>
  );
};

export default Header;
