import React, { Fragment, useEffect, useState, useRef } from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Navbar, Nav, NavDropdown, Spinner, Image } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../actions/userActions";

const Header = () => {
  const prevScrollY = useRef(0);
  const [goingUp, setGoingUp] = useState(false);

  const location = useLocation();
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo, loading } = userLogin;

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    if (prevScrollY.current < currentScrollY && goingUp) {
      setGoingUp(false);
    }
    if (prevScrollY.current > currentScrollY && !goingUp) {
      setGoingUp(true);
    }
    if (currentScrollY === 0) {
      setGoingUp(false);
    }
    prevScrollY.current = currentScrollY;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
    // eslint-disable-next-line
  }, [goingUp]);

  return (
    <header>
      {location.pathname !== "/qrcode" && (
        <Navbar
          collapseOnSelect
          expand="md"
          fixed={location.pathname === "/" ? "top" : ""}
          style={goingUp ? {} : scrollStyle}
        >
          <LinkContainer to="/">
            <Navbar.Brand>
              <Image src="/image/logo.png" width="70px" />
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto navCustomRight">
              <LinkContainer to="/about">
                <Nav.Link>ABOUT</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/mailbox">
                <Nav.Link>MAILBOX</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/admin">
                <Nav.Link>DESK</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
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
        </Navbar>
      )}
    </header>
  );
};

const scrollStyle = {
  backgroundColor: "rgb(222, 219, 219, 0.5)",
  backdropFilter: "blur(5px)",
};

export default Header;
