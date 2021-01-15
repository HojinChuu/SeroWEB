import axios from "axios";
import { DOMAIN } from "../config";
import {
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
  USER_TOKEN_CHECK_SUCCESS,
  USER_TOKEN_CHECK_REQUEST,
  USER_PHONE_MESSAGE_REQUEST,
  USER_PHONE_MESSAGE_SUCCESS,
  USER_PHONE_MESSAGE_FAIL,
  USER_PHONE_MESSAGE_CHECK_REQUEST,
  USER_PHONE_MESSAGE_CHECK_SUCCESS,
  USER_PHONE_MESSAGE_CHECK_FAIL,
} from "../constants/userConstants";

export const register = (formData) => async (dispatch) => {
  try {
    dispatch({
      type: USER_REGISTER_REQUEST,
    });

    const config = { headers: { "Content-Type": "application/json" } };

    const { data } = await axios.post(
      `${DOMAIN}/web_fuc_regist`,
      formData,
      config
    );

    dispatch({
      type: USER_REGISTER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({ type: USER_REGISTER_FAIL });
    console.log(error);
  }
};

export const login = (socialValue, phone, password) => async (dispatch) => {
  try {
    dispatch({ type: USER_LOGIN_REQUEST });

    const config = { headers: { "Content-Type": "application/json" } };

    const { data } = await axios.post(
      `${DOMAIN}/web_fuc_login`,
      {
        usSocialValue: socialValue,
        usPhoneNumber: phone,
        usPassword: password,
      },
      config
    );

    const userToken = {
      usId: data.data.usId,
      usJwtToken: data.data.usJwtToken,
    };

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: userToken,
    });

    localStorage.setItem("userToken", JSON.stringify(userToken));
  } catch (error) {
    dispatch({ type: USER_LOGIN_FAIL });
    console.log(error);
  }
};

export const logout = () => (dispatch) => {
  localStorage.removeItem("userToken");
  dispatch({ type: USER_LOGOUT });
};

export const smsMessage = (phone) => async (dispatch) => {
  try {
    dispatch({
      type: USER_PHONE_MESSAGE_REQUEST,
    });

    const config = { headers: { "Content-Type": "application/json" } };
    const { data } = await axios.post(
      `${DOMAIN}/web_fuc_sms`,
      {
        cePhoneNumber: phone,
      },
      config
    );

    dispatch({
      type: USER_PHONE_MESSAGE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({ type: USER_PHONE_MESSAGE_FAIL });
    console.log(error);
  }
};

export const smsMessageCheck = (phone, code) => async (dispatch) => {
  try {
    dispatch({
      type: USER_PHONE_MESSAGE_CHECK_REQUEST,
    });

    const config = { headers: { "Content-Type": "application/json" } };

    const { data } = await axios.post(
      `${DOMAIN}/web_chk_number`,
      {
        cePhoneNumber: phone,
        ceNumber: code,
      },
      config
    );

    dispatch({
      type: USER_PHONE_MESSAGE_CHECK_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({ type: USER_PHONE_MESSAGE_CHECK_FAIL });
    console.log(error);
  }
};

export const getUserInfo = () => async (dispatch) => {
  try {
    dispatch({
      type: USER_TOKEN_CHECK_REQUEST,
    });
    const storageToken = JSON.parse(localStorage.getItem("userToken"));
    const config = { headers: { "Content-Type": "application/json" } };

    const userInfo = await axios.post(
      `${DOMAIN}/web_chk_token`,
      {
        usId: storageToken.usId,
        usJwtToken: storageToken.usJwtToken,
      },
      config
    );

    dispatch({
      type: USER_TOKEN_CHECK_SUCCESS,
      payload: userInfo.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const authRequest = (authInfo) => async (dispatch) => {
  const { data } = await axios.post(`${DOMAIN}/web_chk_registed`, {
    usSocialValue: authInfo.usSocialValue,
    usSocialId: authInfo.googleId,
  });

  // 여기서 리듀서에 상태 저장하고
  // 그 로딩 컴포넌트안에서 셀렉트로 상태들고와서
  // 리퀘스트받은 auth 데이터가 널이면
  // 회원가입페이지로 이동해서 데이터 바인딩
  // 데이터가 존재할 경우에는
  // 바로 로그인

  console.log(data);
};
