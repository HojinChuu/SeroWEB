import axios from "axios";
import { DOMAIN } from "../config";
import {
  QRCODE_FETCH_REQUEST,
  QRCODE_FETCH_SUCCESS,
  QRCODE_FETCH_FAIL,
  ADDRESS_INPUT_REQUEST,
  ADDRESS_INPUT_SUCCESS,
  ADDRESS_INPUT_FAIL,
} from "../constants/linkConstants";

// qrcode
export const getQrcodeData = (seId, usPhoneNumber) => async (dispatch) => {
  try {
    dispatch({
      type: QRCODE_FETCH_REQUEST,
    });

    const { data } = await axios.post(
      `${DOMAIN}/web_get_qrcode`,
      { seId, usPhoneNumber },
      { headers: { "Content-Type": "application/json" } }
    );

    dispatch({
      type: QRCODE_FETCH_SUCCESS,
      payload: data.data,
    });
  } catch (error) {
    dispatch({ type: QRCODE_FETCH_FAIL });
    console.log(error);
  }
};

// input address
export const postAddress = (
  seId,
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
        seId,
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
    console.log(error);
  }
};
