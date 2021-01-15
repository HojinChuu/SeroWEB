import {
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_TOKEN_CHECK_REQUEST,
  USER_TOKEN_CHECK_SUCCESS,
  USER_PHONE_MESSAGE_REQUEST,
  USER_PHONE_MESSAGE_SUCCESS,
  USER_PHONE_MESSAGE_FAIL,
  USER_PHONE_MESSAGE_CHECK_REQUEST,
  USER_PHONE_MESSAGE_CHECK_SUCCESS,
  USER_PHONE_MESSAGE_CHECK_FAIL,
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
        userInfo: action.payload.data,
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
      };
    case USER_LOGIN_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case USER_TOKEN_CHECK_REQUEST:
      return {
        refreshLoading: true,
      };
    case USER_TOKEN_CHECK_SUCCESS:
      return {
        refreshLoading: false,
        userInfo: action.payload.data,
      };
    case USER_LOGOUT:
      return {};
    default:
      return state;
  }
};

export const userMessageReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_PHONE_MESSAGE_REQUEST:
      return {
        loading: true,
      };
    case USER_PHONE_MESSAGE_SUCCESS:
      return {
        loading: false,
        code: action.payload.data,
        success: true,
      };
    case USER_PHONE_MESSAGE_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const userMessageCheckReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_PHONE_MESSAGE_CHECK_REQUEST:
      return {
        loading: true,
      };
    case USER_PHONE_MESSAGE_CHECK_SUCCESS:
      return {
        loading: false,
        success: true,
      };
    case USER_PHONE_MESSAGE_CHECK_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
