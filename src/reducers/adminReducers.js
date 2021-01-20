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
} from "../constants/adminConstants";

export const adminTasksReducer = (state = {}, action) => {
  switch (action.type) {
    case ADMIN_TASK_FETCH_REQUEST:
      return {
        loading: true,
      };
    case ADMIN_TASK_FETCH_SUCCESS:
      return {
        loading: false,
        tasks: action.payload,
      };
    case ADMIN_TASK_FETCH_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case ADMIN_TASK_UPDATE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ADMIN_TASK_UPDATE_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case ADMIN_TASK_UPDATE_FAIL:
      return {
        loading: false,
      };
    case ADMIN_TASK_REMOVE_REQUEST:
      return {
        ...state,
        loading: false,
      };
    case ADMIN_TASK_REMOVE_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case ADMIN_TASK_REMOVE_FAIL:
      return {
        loading: false,
      };
    default:
      return state;
  }
};

export const adminQuestionsReducer = (state = {}, action) => {
  switch (action.type) {
    case ADMIN_QUESTION_FETCH_REQUEST:
      return {
        loading: true,
      };
    case ADMIN_QUESTION_FETCH_SUCCESS:
      return {
        loading: false,
        questions: action.payload,
      };
    case ADMIN_QUESTION_FETCH_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
