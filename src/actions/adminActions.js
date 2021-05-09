import axios from "axios";
import { DOMAIN } from "../config";
import {
  ADMIN_TASK_FETCH_REQUEST,
  ADMIN_TASK_FETCH_SUCCESS,
  ADMIN_TASK_FETCH_FAIL,
  ADMIN_TASK_UPDATE_REQUEST,
  ADMIN_TASK_UPDATE_SUCCESS,
  ADMIN_TASK_UPDATE_FAIL,
  ADMIN_TASK_REMOVE_REQUEST,
  ADMIN_TASK_REMOVE_SUCCESS,
  ADMIN_TASK_REMOVE_FAIL,
  ADMIN_QUESTION_FETCH_REQUEST,
  ADMIN_QUESTION_FETCH_SUCCESS,
  ADMIN_QUESTION_FETCH_FAIL,
  ADMIN_QUESTION_DATE_SAVE,
  ADMIN_QA_FETCH_POST_REQUEST,
  ADMIN_QA_FETCH_POST_SUCCESS,
  ADMIN_ANSWER_FETCH_REQUEST,
  ADMIN_ANSWER_FETCH_SUCCESS,
  ADMIN_ANSWER_FETCH_FAIL,
  ADMIN_ANSWER_CREATE_REQUEST,
  ADMIN_ANSWER_CREATE_SUCCESS,
  ADMIN_ANSWER_CREATE_FAIL,
  ADMIN_NOTICE_CREATE_REQUEST,
  ADMIN_NOTICE_CREATE_SUCCESS,
  ADMIN_NOTICE_CREATE_FAIL,
  ADMIN_NOTICE_FETCH_REQUEST,
  ADMIN_NOTICE_FETCH_SUCCESS,
  ADMIN_NOTICE_FETCH_FAIL,
  ADMIN_NOTICE_REMOVE_REQUEST,
  ADMIN_NOTICE_REMOVE_SUCCESS,
  ADMIN_NOTICE_REMOVE_FAIL,
} from "../constants/adminConstants";

export const getTasks = (condition) => async (dispatch) => {
  try {
    dispatch({ type: ADMIN_TASK_FETCH_REQUEST });

    if (
      Object.keys(condition).length === 0 ||
      condition.taskState.length === 0
    ) {
      condition = {
        taskState: [0, 1, 2, 3],
        target: condition.target ? condition.target : 0,
        searchText: condition.searchText ? condition.searchText : "",
      };
    }

    const { data } = await axios.post(`${DOMAIN}/web_get_task`, condition, {
      headers: { "Content-Type": "application/json" },
    });

    dispatch({
      type: ADMIN_TASK_FETCH_SUCCESS,
      payload: data.data,
    });
  } catch (error) {
    dispatch({ type: ADMIN_TASK_FETCH_FAIL });
  }
};

export const updateTask = (taskState, taskId) => async (dispatch) => {
  try {
    dispatch({ type: ADMIN_TASK_UPDATE_REQUEST });

    await axios.post(
      `${DOMAIN}/web_upt_task`,
      { taskState, taskId },
      { headers: { "Content-Type": "application/json" } }
    );

    dispatch({
      type: ADMIN_TASK_UPDATE_SUCCESS,
    });
  } catch (error) {
    dispatch({ type: ADMIN_TASK_UPDATE_FAIL });
  }
};

export const removeTask = (taskIdArray) => async (dispatch) => {
  try {
    dispatch({ type: ADMIN_TASK_REMOVE_REQUEST });

    await axios.post(
      `${DOMAIN}/web_del_task`,
      { seId: taskIdArray },
      { headers: { "Content-Type": "application/json" } }
    );

    dispatch({
      type: ADMIN_TASK_REMOVE_SUCCESS,
      payload: taskIdArray,
    });
  } catch (error) {
    dispatch({ type: ADMIN_TASK_REMOVE_FAIL });
  }
};

export const getQuestions = () => async (dispatch) => {
  try {
    dispatch({ type: ADMIN_QUESTION_FETCH_REQUEST });

    const { data } = await axios.get(`${DOMAIN}/web_get_question`);

    dispatch({
      type: ADMIN_QUESTION_FETCH_SUCCESS,
      payload: data.data,
    });
  } catch (error) {
    dispatch({ type: ADMIN_QUESTION_FETCH_FAIL });
  }
};

export const inputQuestionModalData = (questionId) => async (dispatch) => {
  dispatch({
    type: ADMIN_QUESTION_DATE_SAVE,
    payload: parseInt(questionId),
  });
};

export const getQAComments = (usId, quId) => async (dispatch) => {
  try {
    dispatch({ type: ADMIN_ANSWER_FETCH_REQUEST });

    const { data } = await axios.post(
      `${DOMAIN}/web_get_answer`,
      { usId, quId },
      { headers: { "Content-Type": "application/json" } }
    );

    dispatch({
      type: ADMIN_ANSWER_FETCH_SUCCESS,
      payload: data.data,
    });
  } catch (error) {
    dispatch({ type: ADMIN_ANSWER_FETCH_FAIL });
  }
};

export const getQAPost = (send, quSeId) => async (dispatch) => {
  try {
    dispatch({ type: ADMIN_QA_FETCH_POST_REQUEST });

    const poId = send.sePoId;
    const { data } = await axios.post(
      `${DOMAIN}/web_get_detail`,
      { poId, quSeId },
      { headers: { "Content-Type": "application/json" } }
    );

    dispatch({
      type: ADMIN_QA_FETCH_POST_SUCCESS,
      payload: data.data,
    });
  } catch (error) {}
};

export const answerToQuestion = (usId, quId, anContent) => async (dispatch) => {
  try {
    dispatch({ type: ADMIN_ANSWER_CREATE_REQUEST });

    const { data } = await axios.post(
      `${DOMAIN}/web_set_answer`,
      { usId, quId, anContent },
      { headers: { "Content-Type": "application/json" } }
    );

    dispatch({
      type: ADMIN_ANSWER_CREATE_SUCCESS,
      payload: data.data,
    });
  } catch (error) {
    dispatch({ type: ADMIN_ANSWER_CREATE_FAIL });
  }
};

export const createNotice = (noTitle, noContent) => async (dispatch) => {
  try {
    dispatch({ type: ADMIN_NOTICE_CREATE_REQUEST });

    await axios.post(
      `${DOMAIN}/web_set_notice`,
      { noTitle, noContent },
      { headers: { "Content-Type": "application/json" } }
    );

    dispatch({
      type: ADMIN_NOTICE_CREATE_SUCCESS,
    });
  } catch (error) {
    dispatch({ type: ADMIN_NOTICE_CREATE_FAIL });
  }
};

export const getNotices = () => async (dispatch) => {
  try {
    dispatch({ type: ADMIN_NOTICE_FETCH_REQUEST });

    const { data } = await axios.get(`${DOMAIN}/web_get_notice`);

    dispatch({
      type: ADMIN_NOTICE_FETCH_SUCCESS,
      payload: data.data,
    });
  } catch (error) {
    dispatch({ type: ADMIN_NOTICE_FETCH_FAIL });
  }
};

export const removeNotice = (noId) => async (dispatch) => {
  try {
    dispatch({ type: ADMIN_NOTICE_REMOVE_REQUEST });

    await axios.post(
      `${DOMAIN}/web_del_notice`,
      { noId },
      { headers: { "Content-Type": "application/json" } }
    );

    dispatch({
      type: ADMIN_NOTICE_REMOVE_SUCCESS,
    });
  } catch (error) {
    dispatch({ type: ADMIN_NOTICE_REMOVE_FAIL });
  }
};
