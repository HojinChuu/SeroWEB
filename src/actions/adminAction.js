import axios from "axios";
import { DOMAIN } from "../config";
import {
  ADMIN_TASK_FETCH_REQUEST,
  ADMIN_TASK_FETCH_SUCCESS,
  ADMIN_TASK_FETCH_FAIL,
  ADMIN_TASK_REMOVE_REQUEST,
  ADMIN_TASK_REMOVE_SUCCESS,
  ADMIN_TASK_REMOVE_FAIL,
} from "../constants/adminConstants";

export const getTasks = (condition) => async (dispatch) => {
  try {
    dispatch({
      type: ADMIN_TASK_FETCH_REQUEST,
    });

    if (Object.keys(condition).length === 0) {
      condition = {
        taskState: [0, 1, 2, 3],
        target: 0,
        searchText: "",
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
    console.log(error);
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
    console.log(error);
  }
};
