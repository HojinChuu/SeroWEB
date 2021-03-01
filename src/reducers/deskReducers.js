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
} from "../constants/deskConstants";

export const fetchNoticesReducer = (state = {}, action) => {
  switch (action.type) {
    case DESK_NOTICE_FETCH_REQUEST:
      return {
        loading: true,
      };
    case DESK_NOTICE_FETCH_SUCCESS:
      return {
        loading: false,
        notices: action.payload,
        noticesCount: action.payload.length,
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

export const fetchFaqsReducer = (state = {}, action) => {
  switch (action.type) {
    case DESK_FAQ_FETCH_REQUEST:
      return {
        loading: true,
      };
    case DESK_FAQ_FETCH_SUCCESS:
      return {
        loading: false,
        faqs: action.payload,
        faqsCount: action.payload.length,
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

export const fetchQasReducer = (state = {}, action) => {
  switch (action.type) {
    case DESK_QA_FETCH_REQUEST:
      return {
        loading: true,
      };
    case DESK_QA_FETCH_SUCCESS:
      return {
        loading: false,
        qas: action.payload,
        qasCount: action.payload.length,
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
    default:
      return state;
  }
};
