import axios from "axios";
import { DOMAIN } from "../config";
import {
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_AUTH_LOGIN_REQUEST,
  USER_AUTH_LOGIN_SUCCESS,
  USER_AUTH_LOGIN_FAIL,
  USER_LOGOUT,
  USER_TOKEN_CHECK_SUCCESS,
  USER_TOKEN_CHECK_REQUEST,
  USER_PHONE_SMS_REQUEST,
  USER_PHONE_SMS_SUCCESS,
  USER_PHONE_SMS_FAIL,
  USER_PHONE_SMS_CHECK_REQUEST,
  USER_PHONE_SMS_CHECK_SUCCESS,
  USER_PHONE_SMS_CHECK_FAIL,
  USER_FIND_PASS_SMS_REQUEST,
  USER_FIND_PASS_SMS_SUCCESS,
  USER_FIND_PASS_SMS_FAIL,
  USER_UPDATE_PASS_REQUEST,
  USER_UPDATE_PASS_SUCCESS,
  USER_UPDATE_PASS_FAIL,
} from "../constants/userConstants";

export const register = (formData) => async (dispatch) => {
  try {
    dispatch({
      type: USER_REGISTER_REQUEST,
    });

    const { data } = await axios.post(`${DOMAIN}/web_fuc_regist`, formData, {
      headers: { "Content-Type": "application/json" },
    });

    dispatch({
      type: USER_REGISTER_SUCCESS,
      payload: data.data,
    });
  } catch (error) {
    dispatch({
      type: USER_REGISTER_FAIL,
      payload: error.response.data.data.errors,
    });
  }
};

export const login = (socialValue, phone, password) => async (dispatch) => {
  try {
    dispatch({ type: USER_LOGIN_REQUEST });

    const { data } = await axios.post(
      `${DOMAIN}/web_fuc_login`,
      {
        usSocialValue: socialValue,
        usPhoneNumber: phone,
        usPassword: password,
      },
      { headers: { "Content-Type": "application/json" } }
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
  }
};

export const authRequest = (authInfo) => async (dispatch) => {
  try {
    dispatch({
      type: USER_AUTH_LOGIN_REQUEST,
    });

    const { data } = await axios.post(
      `${DOMAIN}/web_fuc_login`,
      {
        usSocialValue: authInfo.usSocialValue,
        usSocialId: authInfo.id,
      },
      { headers: { "Content-Type": "application/json" } }
    );

    const userToken = {
      usId: data.data.usId,
      usJwtToken: data.data.usJwtToken,
    };

    dispatch({
      type: USER_AUTH_LOGIN_SUCCESS,
      payload: userToken,
    });

    localStorage.setItem("userToken", JSON.stringify(userToken));
  } catch (error) {
    dispatch({ type: USER_AUTH_LOGIN_FAIL, payload: authInfo });
  }
};

export const logout = () => (dispatch) => {
  localStorage.removeItem("userToken");
  dispatch({ type: USER_LOGOUT });
};

export const sendSms = (phone) => async (dispatch) => {
  try {
    dispatch({
      type: USER_PHONE_SMS_REQUEST,
    });

    const { data } = await axios.post(
      `${DOMAIN}/web_fuc_sms`,
      { cePhoneNumber: phone },
      { headers: { "Content-Type": "application/json" } }
    );

    dispatch({
      type: USER_PHONE_SMS_SUCCESS,
      payload: data.data,
    });
  } catch (error) {
    dispatch({ type: USER_PHONE_SMS_FAIL });
  }
};

export const findPassSendSms = (phone) => async (dispatch) => {
  try {
    dispatch({
      type: USER_FIND_PASS_SMS_REQUEST,
    });

    const { data } = await axios.post(
      `${DOMAIN}/web_upt_sms`,
      { cePhoneNumber: phone },
      { headers: { "Content-Type": "application/json" } }
    );

    dispatch({
      type: USER_FIND_PASS_SMS_SUCCESS,
      payload: data.data,
    });
  } catch (error) {
    dispatch({ type: USER_FIND_PASS_SMS_FAIL });
  }
};

export const checkSms = (phone, code) => async (dispatch) => {
  try {
    dispatch({
      type: USER_PHONE_SMS_CHECK_REQUEST,
    });

    const { data } = await axios.post(
      `${DOMAIN}/web_chk_number`,
      { cePhoneNumber: phone, ceNumber: code },
      { headers: { "Content-Type": "application/json" } }
    );

    dispatch({
      type: USER_PHONE_SMS_CHECK_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({ type: USER_PHONE_SMS_CHECK_FAIL });
  }
};

export const updatePassword = (phone, password) => async (dispatch) => {
  try {
    dispatch({
      type: USER_UPDATE_PASS_REQUEST,
    });

    await axios.post(
      `${DOMAIN}/web_upt_password`,
      { usPhoneNumber: phone, usPassword: password },
      { headers: { "Content-Type": "application/json" } }
    );

    dispatch({
      type: USER_UPDATE_PASS_SUCCESS,
    });
  } catch (error) {
    dispatch({ type: USER_UPDATE_PASS_FAIL });
  }
};

export const getUserInfo = () => async (dispatch) => {
  try {
    dispatch({
      type: USER_TOKEN_CHECK_REQUEST,
    });
    const storageToken = JSON.parse(localStorage.getItem("userToken"));

    const userInfo = await axios.post(
      `${DOMAIN}/web_chk_token`,
      { usId: storageToken.usId, usJwtToken: storageToken.usJwtToken },
      { headers: { "Content-Type": "application/json" } }
    );

    dispatch({
      type: USER_TOKEN_CHECK_SUCCESS,
      payload: userInfo.data.data,
    });
  } catch (error) {}
};
