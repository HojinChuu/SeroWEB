import axios from "axios";
import { DOMAIN } from "../config";
import {
  SEND_POST_FETCH_REQUEST,
  SEND_POST_FETCH_SUCCESS,
  SEND_POST_FETCH_FAIL,
  RECEIVE_POST_FETCH_REQUEST,
  RECEIVE_POST_FETCH_SUCCESS,
  RECEIVE_POST_FETCH_FAIL,
  SEND_QA_POST_FETCH_SUCCESS,
  RECEIVE_QA_POST_FETCH_SUCCESS,
} from "../constants/mailPostConstants";

export const getSendPosts = (usId) => async (dispatch) => {
  try {
    dispatch({ type: SEND_POST_FETCH_REQUEST });

    const { data } = await axios.post(
      `${DOMAIN}/web_get_post`,
      { usId },
      { headers: { "Content-Type": "application/json" } }
    );

    dispatch({
      type: SEND_POST_FETCH_SUCCESS,
      payload: data.data,
    });
  } catch (error) {
    dispatch({ type: SEND_POST_FETCH_FAIL });
  }
};

export const getReceivePosts = (usId) => async (dispatch) => {
  try {
    dispatch({ type: RECEIVE_POST_FETCH_REQUEST });

    const { data } = await axios.post(
      `${DOMAIN}/web_get_received`,
      { usId },
      { headers: { "Content-Type": "application/json" } }
    );

    dispatch({
      type: RECEIVE_POST_FETCH_SUCCESS,
      payload: data.data,
    });
  } catch (error) {
    dispatch({ type: RECEIVE_POST_FETCH_FAIL });
  }
};

export const getQASendPosts = (usId) => async (dispatch) => {
  try {
    dispatch({ type: SEND_POST_FETCH_REQUEST });
    const { data } = await axios.post(
      `${DOMAIN}/web_get_send`,
      { usId },
      { headers: { "Content-Type": "application/json" } }
    );

    dispatch({
      type: SEND_QA_POST_FETCH_SUCCESS,
      payload: data.data,
    });
  } catch (error) {
    dispatch({ type: SEND_POST_FETCH_FAIL });
  }
};

export const getQAReceivePosts = (usId) => async (dispatch) => {
  try {
    dispatch({ type: RECEIVE_POST_FETCH_REQUEST });

    const { data } = await axios.post(
      `${DOMAIN}/web_get_received`,
      { usId },
      { headers: { "Content-Type": "application/json" } }
    );

    dispatch({
      type: RECEIVE_QA_POST_FETCH_SUCCESS,
      payload: data.data,
    });
  } catch (error) {
    dispatch({ type: RECEIVE_POST_FETCH_FAIL });
  }
};
