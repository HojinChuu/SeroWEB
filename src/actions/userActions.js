import axios from "axios";
import { DOMAIN } from "../config";
import {
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_PHONE_MESSAGE_REQUEST,
  USER_PHONE_MESSAGE_SUCCESS,
  USER_PHONE_MESSAGE_FAIL,
  USER_PHONE_MESSAGE_CHECK_REQUEST,
  USER_PHONE_MESSAGE_CHECK_SUCCESS,
  USER_PHONE_MESSAGE_CHECK_FAIL,
  USER_LOGOUT,
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

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    });

    localStorage.setItem("userInfo", JSON.stringify(data.data));
  } catch (error) {
    dispatch({ type: USER_LOGIN_FAIL });
    console.log(error);
  }
};

export const logout = () => (dispatch) => {
  localStorage.removeItem("userInfo");
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
