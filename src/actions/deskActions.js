import axios from "axios";
import { DOMAIN } from "../config";
import {
  DESK_NOTICE_FETCH_REQUEST,
  DESK_NOTICE_FETCH_SUCCESS,
  DESK_NOTICE_FETCH_FAIL,
  DESK_FAQ_FETCH_REQUEST,
  DESK_FAQ_FETCH_SUCCESS,
  DESK_FAQ_FETCH_FAIL,
  DESK_QA_FETCH_REQUEST,
  DESK_QA_FETCH_SUCCESS,
  DESK_QA_FETCH_FAIL,
  DESK_QA_CREATE_REQUEST,
  DESK_QA_CREATE_SUCCESS,
  DESK_QA_CREATE_FAIL,
  DESK_QA_CREATE_COMMENT_REQUEST,
  DESK_QA_CREATE_COMMENT_SUCCESS,
  DESK_QA_CREATE_COMMENT_FAIL,
  DESK_QA_FETCH_COMMENT_REQUEST,
  DESK_QA_FETCH_COMMENT_SUCCESS,
  DESK_QA_FETCH_COMMENT_FAIL,
  DESK_QA_FETCH_POST_REQUEST,
  DESK_QA_FETCH_POST_SUCCESS,
} from "../constants/deskConstants";

export const getNotices = () => async (dispatch) => {
  try {
    dispatch({ type: DESK_NOTICE_FETCH_REQUEST });

    const { data } = await axios.get(`${DOMAIN}/web_get_notice`);

    dispatch({
      type: DESK_NOTICE_FETCH_SUCCESS,
      payload: data.data,
    });
  } catch (error) {
    dispatch({ type: DESK_NOTICE_FETCH_FAIL });
  }
};

export const getFaqs = () => async (dispatch) => {
  try {
    dispatch({ type: DESK_FAQ_FETCH_REQUEST });

    const { data } = await axios.get(`${DOMAIN}/web_get_faq`);

    dispatch({
      type: DESK_FAQ_FETCH_SUCCESS,
      payload: data.data,
    });
  } catch (error) {
    dispatch({ type: DESK_FAQ_FETCH_FAIL });
  }
};

export const getQas = () => async (dispatch) => {
  try {
    dispatch({ type: DESK_QA_FETCH_REQUEST });

    const { data } = await axios.get(`${DOMAIN}/web_get_question`);

    dispatch({
      type: DESK_QA_FETCH_SUCCESS,
      payload: data.data,
    });
  } catch (error) {
    dispatch({ type: DESK_QA_FETCH_FAIL });
  }
};

export const createQa = (
  usId,
  quCaId,
  quSeId,
  quTitle,
  quContent,
  quShow
) => async (dispatch) => {
  try {
    dispatch({ type: DESK_QA_CREATE_REQUEST });

    await axios.post(
      `${DOMAIN}/web_set_question`,
      { usId, quCaId, quSeId, quTitle, quContent, quShow },
      { headers: { "Content-Type": "application/json" } }
    );

    dispatch({
      type: DESK_QA_CREATE_SUCCESS,
    });
  } catch (error) {
    dispatch({ type: DESK_QA_CREATE_FAIL });
  }
};

export const createQAComment = (usId, quId, anContent) => async (dispatch) => {
  try {
    dispatch({ type: DESK_QA_CREATE_COMMENT_REQUEST });

    await axios.post(
      `${DOMAIN}/web_set_answer`,
      { usId, quId, anContent },
      { headers: { "Content-Type": "application/json" } }
    );

    dispatch({
      type: DESK_QA_CREATE_COMMENT_SUCCESS,
    });
  } catch (error) {
    dispatch({ type: DESK_QA_CREATE_COMMENT_FAIL });
  }
};

export const getQAComments = (quId) => async (dispatch) => {
  try {
    dispatch({ type: DESK_QA_FETCH_COMMENT_REQUEST });

    const { data } = await axios.post(
      `${DOMAIN}/web_get_answer`,
      { quId },
      { headers: { "Content-Type": "application/json" } }
    );

    dispatch({
      type: DESK_QA_FETCH_COMMENT_SUCCESS,
      payload: data.data,
    });
  } catch (error) {
    dispatch({ type: DESK_QA_FETCH_COMMENT_FAIL });
  }
};

export const getQAPost = (poId, quSeId) => async (dispatch) => {
  try {
    dispatch({ type: DESK_QA_FETCH_POST_REQUEST });

    const { data } = await axios.post(
      `${DOMAIN}/web_get_detail`,
      { poId, quSeId },
      { headers: { "Content-Type": "application/json" } }
    );

    dispatch({
      type: DESK_QA_FETCH_POST_SUCCESS,
      payload: data.data,
    });
  } catch (error) {}
};
