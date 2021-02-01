import React, { useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUserInfo } from "./actions/userActions";

import Header from "./components/defaults/Header";
import Footer from "./components/defaults/Footer";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import MyPageScreen from "./screens/MyPageScreen";
import AdminHomeScreen from "./screens/AdminHomeScreen";
import AuthRedirect from "./screens/redirect/AuthRedirectScreen";
import InputAddress from "./screens/redirect/InputAddressScreen";
import QrcodeLinkScreen from "./screens/redirect/QrcodeLinkScreen";

const App = () => {
  const dispatch = useDispatch();
  const { userToken, loading, userInfo } = useSelector(
    (state) => state.userLogin
  );

  useEffect(() => {
    if (userToken) {
      dispatch(getUserInfo());
    }
  }, [dispatch, userToken, loading, userInfo]);

  return (
    <Router>
      <Header />
      <main>
        <Route path="/admin" component={AdminHomeScreen} />
        <Route path="/mypage" component={MyPageScreen} />
        <Route path="/login" component={LoginScreen} />
        <Route path="/register" component={RegisterScreen} />
        <Route path="/qrcode" component={QrcodeLinkScreen} exact />
        <Route path="/address" component={InputAddress} exact />
        <Route path="/auth" component={AuthRedirect} exact />
        <Route path="/" component={HomeScreen} exact />
      </main>
      <Footer />
    </Router>
  );
};

export default App;
