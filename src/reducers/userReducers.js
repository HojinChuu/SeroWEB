import {
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_AUTH_LOGIN_REQUEST,
  USER_AUTH_LOGIN_SUCCESS,
  USER_AUTH_LOGIN_FAIL,
  USER_LOGOUT,
  USER_TOKEN_CHECK_REQUEST,
  USER_TOKEN_CHECK_SUCCESS,
  USER_PHONE_SMS_REQUEST,
  USER_PHONE_SMS_SUCCESS,
  USER_PHONE_SMS_FAIL,
  USER_PHONE_SMS_CHECK_REQUEST,
  USER_PHONE_SMS_CHECK_SUCCESS,
  USER_PHONE_SMS_CHECK_FAIL,
} from "../constants/userConstants";

export const userRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_REGISTER_REQUEST:
      return {
        loading: true,
      };
    case USER_REGISTER_SUCCESS:
      return {
        loading: false,
        success: true,
        userInfo: action.payload,
      };
    case USER_REGISTER_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case USER_LOGOUT:
      return {};
    default:
      return state;
  }
};

export const userLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return {
        loading: true,
      };
    case USER_LOGIN_SUCCESS:
      return {
        loading: false,
        userToken: action.payload,
        success: true,
      };
    case USER_LOGIN_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case USER_AUTH_LOGIN_REQUEST:
      return {
        loading: true,
      };
    case USER_AUTH_LOGIN_SUCCESS:
      return {
        loading: false,
        userToken: action.payload,
        success: true,
      };
    case USER_AUTH_LOGIN_FAIL:
      return {
        loading: false,
        authInfo: action.payload,
      };
    case USER_TOKEN_CHECK_REQUEST:
      return {
        loading: true,
      };
    case USER_TOKEN_CHECK_SUCCESS:
      return {
        loading: false,
        userInfo: action.payload,
      };
    case USER_LOGOUT:
      return {};
    default:
      return state;
  }
};

export const userSmsReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_PHONE_SMS_REQUEST:
      return {
        loading: true,
      };
    case USER_PHONE_SMS_SUCCESS:
      return {
        loading: false,
        code: action.payload,
        success: true,
      };
    case USER_PHONE_SMS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const userSmsCheckReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_PHONE_SMS_CHECK_REQUEST:
      return {
        loading: true,
      };
    case USER_PHONE_SMS_CHECK_SUCCESS:
      return {
        loading: false,
        success: true,
      };
    case USER_PHONE_SMS_CHECK_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
