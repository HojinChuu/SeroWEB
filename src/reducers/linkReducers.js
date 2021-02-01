import {
  QRCODE_FETCH_FAIL,
  QRCODE_FETCH_REQUEST,
  QRCODE_FETCH_SUCCESS,
  ADDRESS_INPUT_REQUEST,
  ADDRESS_INPUT_SUCCESS,
  ADDRESS_INPUT_FAIL,
  QRCODE_SAVE_POST_REQUEST,
  QRCODE_SAVE_POST_SUCCESS,
  QRCODE_SAVE_POST_FAIL,
} from "../constants/linkConstants";

// qrcode
export const qrcodePostDataReducer = (state = {}, action) => {
  switch (action.type) {
    case QRCODE_FETCH_REQUEST:
      return {
        loading: true,
      };
    case QRCODE_FETCH_SUCCESS:
      return {
        loading: false,
        qrcode: action.payload,
      };
    case QRCODE_FETCH_FAIL:
      return {
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};

// qrcode
export const qrcodeSavePostReducer = (state = {}, action) => {
  switch (action.type) {
    case QRCODE_SAVE_POST_REQUEST:
      return {
        loading: true,
      };
    case QRCODE_SAVE_POST_SUCCESS:
      return {
        loading: false,
        success: true,
      };
    case QRCODE_SAVE_POST_FAIL:
      return {
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};

// address input
export const addressInputReducer = (state = {}, action) => {
  switch (action.type) {
    case ADDRESS_INPUT_REQUEST:
      return {
        loading: true,
      };
    case ADDRESS_INPUT_SUCCESS:
      return {
        loading: false,
        success: true,
      };
    case ADDRESS_INPUT_FAIL:
      return {
        loading: false,
      };
    default:
      return state;
  }
};
