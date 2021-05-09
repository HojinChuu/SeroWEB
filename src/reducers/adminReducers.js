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
  ADMIN_ANSWER_CREATE_REQUEST,
  ADMIN_ANSWER_CREATE_SUCCESS,
  ADMIN_ANSWER_CREATE_FAIL,
  ADMIN_NOTICE_CREATE_REQUEST,
  ADMIN_NOTICE_CREATE_SUCCESS,
  ADMIN_NOTICE_CREATE_FAIL,
  ADMIN_NOTICE_FETCH_FAIL,
  ADMIN_NOTICE_FETCH_SUCCESS,
  ADMIN_NOTICE_FETCH_REQUEST,
  ADMIN_NOTICE_REMOVE_REQUEST,
  ADMIN_NOTICE_REMOVE_SUCCESS,
  ADMIN_NOTICE_REMOVE_FAIL,
  ADMIN_QA_FETCH_POST_REQUEST,
  ADMIN_QA_FETCH_POST_SUCCESS,
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
        pageSize: 6,
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
        answerLoading: true,
      };
    case ADMIN_ANSWER_FETCH_SUCCESS:
      return {
        ...state,
        answerLoading: false,
        answers: action.payload,
      };
    case ADMIN_ANSWER_FETCH_FAIL:
      return {
        ...state,
        error: true,
      };
    case ADMIN_ANSWER_CREATE_REQUEST:
      return {
        ...state,
      };
    case ADMIN_ANSWER_CREATE_SUCCESS:
      return {
        ...state,
        createSuccess: true,
      };
    case ADMIN_ANSWER_CREATE_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    case ADMIN_QUESTION_FETCH_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    case ADMIN_QA_FETCH_POST_REQUEST:
      return {
        ...state,
        postLoading: true,
      };
    case ADMIN_QA_FETCH_POST_SUCCESS:
      return {
        ...state,
        postLoading: false,
        refPost: action.payload,
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
