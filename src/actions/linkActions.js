import axios from "axios";
import { DOMAIN } from "../config";
import {
  QRCODE_FETCH_REQUEST,
  QRCODE_FETCH_SUCCESS,
  QRCODE_FETCH_FAIL,
  ADDRESS_INPUT_REQUEST,
  ADDRESS_INPUT_SUCCESS,
  ADDRESS_INPUT_FAIL,
  QRCODE_SAVE_POST_REQUEST,
  QRCODE_SAVE_POST_SUCCESS,
  QRCODE_SAVE_POST_FAIL,
} from "../constants/linkConstants";

export const getQrcodeData = (qrData, usPhoneNumber) => async (dispatch) => {
  try {
    dispatch({
      type: QRCODE_FETCH_REQUEST,
    });

    const { data } = await axios.post(
      `${DOMAIN}/web_get_qrcode`,
      { qrData, usPhoneNumber },
      { headers: { "Content-Type": "application/json" } }
    );

    dispatch({
      type: QRCODE_FETCH_SUCCESS,
      payload: data.data,
    });
  } catch (error) {
    dispatch({ type: QRCODE_FETCH_FAIL });
  }
};

export const saveQrcodePost = (usId, poId) => async (dispatch) => {
  try {
    dispatch({
      type: QRCODE_SAVE_POST_REQUEST,
    });

    await axios.post(
      `${DOMAIN}/web_set_post`,
      { usId, poId },
      { headers: { "Content-Type": "application/json" } }
    );

    dispatch({
      type: QRCODE_SAVE_POST_SUCCESS,
    });
  } catch (error) {
    dispatch({ type: QRCODE_SAVE_POST_FAIL });
  }
};

export const postAddress = (
  seCode,
  phone,
  name,
  address,
  addressDeatil,
  postCode
) => async (dispatch) => {
  try {
    dispatch({
      type: ADDRESS_INPUT_REQUEST,
    });

    await axios.post(
      `${DOMAIN}/web_set_address`,
      {
        seCode,
        usPhoneNumber: phone,
        usName: name,
        usAddress: address,
        usAddressDetail: addressDeatil,
        usAddressNumber: postCode,
      },
      { headers: { "Content-Type": "application/json" } }
    );

    dispatch({
      type: ADDRESS_INPUT_SUCCESS,
    });
  } catch (error) {
    dispatch({ type: ADDRESS_INPUT_FAIL });
  }
};
