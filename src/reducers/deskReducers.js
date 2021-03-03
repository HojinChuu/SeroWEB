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

export const deskNoticesReducer = (state = {}, action) => {
  switch (action.type) {
    case DESK_NOTICE_FETCH_REQUEST:
      return {
        loading: true,
      };
    case DESK_NOTICE_FETCH_SUCCESS:
      return {
        loading: false,
        notices: action.payload,
        noticesCount: action.payload ? action.payload.length : 0,
        pageSize: 6,
        currentPage: action.currentPage ? action.currentPage : 1,
      };
    case DESK_NOTICE_FETCH_FAIL:
      return {
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};

export const deskFaqsReducer = (state = {}, action) => {
  switch (action.type) {
    case DESK_FAQ_FETCH_REQUEST:
      return {
        loading: true,
      };
    case DESK_FAQ_FETCH_SUCCESS:
      return {
        loading: false,
        faqs: action.payload,
        faqsCount: action.payload ? action.payload.length : 0,
        pageSize: 6,
        currentPage: action.currentPage ? action.currentPage : 1,
      };
    case DESK_FAQ_FETCH_FAIL:
      return {
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};

export const deskQasReducer = (state = {}, action) => {
  switch (action.type) {
    case DESK_QA_FETCH_REQUEST:
      return {
        loading: true,
      };
    case DESK_QA_FETCH_SUCCESS:
      return {
        loading: false,
        qas: action.payload,
        qasCount: action.payload ? action.payload.length : 0,
        pageSize: 6,
        currentPage: action.currentPage ? action.currentPage : 1,
      };
    case DESK_QA_FETCH_FAIL:
      return {
        loading: false,
        error: true,
      };
    case DESK_QA_CREATE_REQUEST:
      return {
        loading: true,
      };
    case DESK_QA_CREATE_SUCCESS:
      return {
        loading: false,
        success: true,
      };
    case DESK_QA_CREATE_FAIL:
      return {
        loading: false,
        error: false,
      };
    case DESK_QA_CREATE_COMMENT_REQUEST:
      return {
        loading: true,
      };
    case DESK_QA_CREATE_COMMENT_SUCCESS:
      return {
        loading: false,
        success: true,
      };
    case DESK_QA_CREATE_COMMENT_FAIL:
      return {
        loading: false,
        error: true,
      };
    case DESK_QA_FETCH_COMMENT_REQUEST:
      return {
        loading: true,
      };
    case DESK_QA_FETCH_COMMENT_SUCCESS:
      return {
        loading: false,
        comments: action.payload,
        commentsCount: action.payload ? action.payload.length : 0,
        pageSize: 5,
        currentPage: action.currentPage ? action.currentPage : 1,
      };
    case DESK_QA_FETCH_COMMENT_FAIL:
      return {
        loading: false,
        error: true,
      };
    case DESK_QA_FETCH_POST_REQUEST:
      return {
        ...state,
        postLoading: true,
      };
    case DESK_QA_FETCH_POST_SUCCESS:
      return {
        ...state,
        postLoading: false,
        refPost: action.payload,
      };
    default:
      return state;
  }
};
