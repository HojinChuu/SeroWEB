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
        success: false,
      };
    case ADMIN_TASK_UPDATE_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
      };
    case ADMIN_TASK_UPDATE_FAIL:
      return {
        loading: false,
      };
    case ADMIN_TASK_REMOVE_REQUEST:
      return {
        ...state,
        loading: false,
        success: false,
      };
    case ADMIN_TASK_REMOVE_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
      };
    case ADMIN_TASK_REMOVE_FAIL:
      return {
        loading: false,
      };
    default:
      return state;
  }
};

export const adminQuestionsReducer = (state = { question: {} }, action) => {
  switch (action.type) {
    case ADMIN_QUESTION_FETCH_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ADMIN_QUESTION_FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        questions: action.payload,
      };
    case ADMIN_QUESTION_DATE_SAVE:
      return {
        ...state,
        question: state.questions.filter(
          (item) => item.quId === action.payload
        )[0],
      };
    case ADMIN_ANSWER_REQUEST:
      return {
        ...state,
        success: false,
      };
    case ADMIN_ANSWER_SUCCESS:
      return {
        ...state,
        success: true,
      };
    case ADMIN_ANSWER_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    case ADMIN_QUESTION_FETCH_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
