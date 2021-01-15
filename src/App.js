import React, { useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getUserInfo } from "./actions/userActions";

import Header from "./components/defaults/Header";
import Footer from "./components/defaults/Footer";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/users/LoginScreen";
import RegisterScreen from "./screens/users/RegisterScreen";

const App = () => {
  const dispatch = useDispatch();
  const { userToken, refreshLoading, userInfo } = useSelector(
    (state) => state.userLogin
  );

  useEffect(() => {
    if (userToken) {
      dispatch(getUserInfo());
    }
  }, [dispatch, userToken, refreshLoading, userInfo]);
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Route path="/login" component={LoginScreen} />
          <Route path="/register" component={RegisterScreen} />
          <Route path="/" component={HomeScreen} exact />
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
