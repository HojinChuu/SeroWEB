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
  ADMIN_ANSWER_FETCH_REQUEST,
  ADMIN_ANSWER_FETCH_SUCCESS,
  ADMIN_ANSWER_FETCH_FAIL,
  ADMIN_ANSWER_REQUEST,
  ADMIN_ANSWER_SUCCESS,
  ADMIN_ANSWER_FAIL,
  ADMIN_NOTICE_CREATE_REQUEST,
  ADMIN_NOTICE_CREATE_SUCCESS,
  ADMIN_NOTICE_CREATE_FAIL,
  ADMIN_NOTICE_FETCH_FAIL,
  ADMIN_NOTICE_FETCH_SUCCESS,
  ADMIN_NOTICE_FETCH_REQUEST,
  ADMIN_NOTICE_REMOVE_REQUEST,
  ADMIN_NOTICE_REMOVE_SUCCESS,
  ADMIN_NOTICE_REMOVE_FAIL,
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
        tasksCount: action.payload ? action.payload.length : 0,
        pageSize: 10,
        currentPage: action.currentPage ? action.currentPage : 1,
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
        questionsCount: action.payload ? action.payload.length : 0,
        pageSize: 10,
        currentPage: action.currentPage ? action.currentPage : 1,
      };
    case ADMIN_QUESTION_DATE_SAVE:
      return {
        ...state,
        question: state.questions.filter(
          (item) => item.quId === action.payload
        )[0],
      };
    case ADMIN_ANSWER_FETCH_REQUEST:
      return {
        ...state,
        success: false,
      };
    case ADMIN_ANSWER_FETCH_SUCCESS:
      return {
        ...state,
        success: true,
        answers: action.payload,
      };
    case ADMIN_ANSWER_FETCH_FAIL:
      return {
        ...state,
        error: true,
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

export const adminNoticesReducer = (state = {}, action) => {
  switch (action.type) {
    case ADMIN_NOTICE_CREATE_REQUEST:
      return {
        loading: true,
      };
    case ADMIN_NOTICE_CREATE_SUCCESS:
      return {
        loading: false,
        success: true,
      };
    case ADMIN_NOTICE_CREATE_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case ADMIN_NOTICE_FETCH_REQUEST:
      return {
        loading: true,
      };
    case ADMIN_NOTICE_FETCH_SUCCESS:
      return {
        loading: false,
        notices: action.payload,
        noticesCount: action.payload ? action.payload.length : 0,
        pageSize: 6,
        currentPage: action.currentPage ? action.currentPage : 1,
      };
    case ADMIN_NOTICE_FETCH_FAIL:
      return {
        loading: false,
        error: true,
      };
    case ADMIN_NOTICE_REMOVE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ADMIN_NOTICE_REMOVE_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
      };
    case ADMIN_NOTICE_REMOVE_FAIL:
      return {
        loading: false,
      };
    default:
      return state;
  }
};
