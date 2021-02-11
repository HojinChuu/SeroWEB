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
  ADMIN_ANSWER_REQUEST,
  ADMIN_ANSWER_SUCCESS,
  ADMIN_ANSWER_FAIL,
} from "../constants/adminConstants";

export const getTasks = (condition) => async (dispatch) => {
  try {
    dispatch({
      type: ADMIN_TASK_FETCH_REQUEST,
    });

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
    dispatch({
      type: ADMIN_TASK_UPDATE_REQUEST,
    });

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
    dispatch({
      type: ADMIN_TASK_REMOVE_REQUEST,
    });

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
    dispatch({
      type: ADMIN_QUESTION_FETCH_REQUEST,
    });

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

export const answerToQuestion = (usId, quCaId, quContent, quParentId) => async (
  dispatch
) => {
  try {
    dispatch({
      type: ADMIN_ANSWER_REQUEST,
    });

    const { data } = await axios.post(
      `${DOMAIN}/web_set_question`,
      { usId, quCaId, quContent, quParentId },
      { headers: { "Content-Type": "application/json" } }
    );

    dispatch({
      type: ADMIN_ANSWER_SUCCESS,
      payload: data.data,
    });
  } catch (error) {
    dispatch({ type: ADMIN_ANSWER_FAIL });
  }
};
