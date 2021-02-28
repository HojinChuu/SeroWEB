import React, { Fragment, useEffect, useState, useRef } from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Navbar, Nav, NavDropdown, Spinner, Image } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../actions/userActions";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import showAlert from "../../utils/alert";

const Header = () => {
  const prevScrollY = useRef(0);
  const { width } = useWindowDimensions();
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

  const logoutHandler = () => {
    showAlert
      .error("", "로그아웃 하시겠어요?", true, "YES")
      .then(({ isConfirmed }) => {
        if (isConfirmed) {
          showAlert.success("", "로그아웃 되었습니다", false, "확인");
          dispatch(logout());
        }
      });
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
          expand="lg"
          fixed={location.pathname === "/" ? "top" : ""}
          style={!goingUp && location.pathname === "/" ? scrollStyle : {}}
        >
          <LinkContainer to="/">
            <Navbar.Brand>
              <Image
                src={
                  width > 767 ? "/image/seroLogo.png" : "/image/seroLogo_sm.png"
                }
                width="130px"
              />
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto navCustomRight">
              <LinkContainer to="/about">
                <Nav.Link>
                  <span>About</span>
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/social">
                <Nav.Link>
                  <span>Social</span>
                </Nav.Link>
              </LinkContainer>
              {userInfo && (
                <LinkContainer to="/mailbox">
                  <Nav.Link>
                    <span>Mailbox</span>
                  </Nav.Link>
                </LinkContainer>
              )}
              <LinkContainer to="/desk">
                <Nav.Link>
                  <span>Desk</span>
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto navCustomLeft">
              {loading ? (
                <Spinner animation="border" variant="light" className="mr-5" />
              ) : (
                <Fragment>
                  {userInfo && userInfo.usGrant === 1 && (
                    <LinkContainer to="/admin" className="mr-4">
                      <Nav.Link>
                        <span>Admin</span>
                      </Nav.Link>
                    </LinkContainer>
                  )}
                  {userInfo ? (
                    <NavDropdown title={userInfo.usName} id="username">
                      <LinkContainer to="/mypage">
                        <NavDropdown.Item>Mypage</NavDropdown.Item>
                      </LinkContainer>
                      <NavDropdown.Item onClick={logoutHandler}>
                        Logout
                      </NavDropdown.Item>
                    </NavDropdown>
                  ) : (
                    <Fragment>
                      <LinkContainer to="/login">
                        <Nav.Link>
                          <span>Login</span>
                        </Nav.Link>
                      </LinkContainer>
                      <LinkContainer to="/register">
                        <Nav.Link>
                          <span>Sign up</span>
                        </Nav.Link>
                      </LinkContainer>
                    </Fragment>
                  )}
                </Fragment>
              )}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      )}
      {location.pathname !== "/" && (
        <div
          style={{
            borderTop: "solid 1px #707070",
            width: "90%",
            margin: "auto",
          }}
          className="mb-3"
        ></div>
      )}
    </header>
  );
};

const scrollStyle = {
  backgroundColor: "rgb(222, 219, 219, 0.8)",
  backdropFilter: "blur(5px)",
};

export default Header;
