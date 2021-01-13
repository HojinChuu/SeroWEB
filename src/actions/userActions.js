import axios from "axios";
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
} from "../constants/userConstants";

export const register = (registerData) => async (dispatch) => {
  try {
    dispatch({ type: USER_REGISTER_REQUEST });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      "http://dev.seropost.com/web_fuc_regist",
      {
        us_social_value: registerData.socialValue,
        us_phone_number: registerData.phone,
        us_name: registerData.name,
        us_photo: registerData.profileImage,
        us_address: registerData.address,
        us_address_detail: registerData.addressDetail,
        us_address_number: registerData.postCode,
        us_password: registerData.password,
      },
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

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      "http://dev.seropost.com/web_fuc_login",
      {
        us_social_value: socialValue,
        us_phone_number: phone,
        us_password: password,
      },
      config
    );

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({ type: USER_LOGIN_FAIL });
    console.log(error);
  }
};

export const smsMessage = (phone) => async (dispatch) => {
  try {
    dispatch({ type: USER_PHONE_MESSAGE_REQUEST });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      "http://dev.seropost.com/auth/certification",
      {
        us_phone_number: phone,
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
    dispatch({ type: USER_PHONE_MESSAGE_CHECK_REQUEST });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      "http://dev.seropost.com/auth/number_certification",
      {
        us_phone_number: phone,
        code,
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
