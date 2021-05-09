import {
  WRITTEN_POST_FETCH_REQUEST,
  WRITTEN_POST_FETCH_SUCCESS,
  WRITTEN_POST_FETCH_FAIL,
  SEND_POST_FETCH_REQUEST,
  SEND_POST_FETCH_SUCCESS,
  SEND_POST_FETCH_FAIL,
  RECEIVE_POST_FETCH_REQUEST,
  RECEIVE_POST_FETCH_SUCCESS,
  RECEIVE_POST_FETCH_FAIL,
  SEND_QA_POST_FETCH_SUCCESS,
  RECEIVE_QA_POST_FETCH_SUCCESS,
} from "../constants/mailPostConstants";

export const writtenPostsReducer = (state = {}, action) => {
  switch (action.type) {
    case WRITTEN_POST_FETCH_REQUEST:
      return {
        loading: true,
      };
    case WRITTEN_POST_FETCH_SUCCESS:
      return {
        loading: false,
        writePosts: action.payload,
        postCount: action.payload ? action.payload.length : 0,
        pageSize: 9,
        currentPage: action.currentPage ? action.currentPage : 1,
      };
    case WRITTEN_POST_FETCH_FAIL:
      return {
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};

export const receivePostsReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_POST_FETCH_REQUEST:
      return {
        loading: true,
      };
    case RECEIVE_POST_FETCH_SUCCESS:
      return {
        loading: false,
        receivedPosts: action.payload,
        postCount: action.payload ? action.payload.length : 0,
        pageSize: 9,
        currentPage: action.currentPage ? action.currentPage : 1,
      };
    case RECEIVE_QA_POST_FETCH_SUCCESS:
      return {
        loading: false,
        receivedPosts: action.payload,
        postCount: action.payload ? action.payload.length : 0,
        pageSize: 3,
        currentPage: action.currentPage ? action.currentPage : 1,
      };
    case RECEIVE_POST_FETCH_FAIL:
      return {
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};

export const sendPostsReducer = (state = {}, action) => {
  switch (action.type) {
    case SEND_POST_FETCH_REQUEST:
      return {
        loading: true,
      };
    case SEND_POST_FETCH_SUCCESS:
      return {
        loading: false,
        sentPosts: action.payload,
        postCount: action.payload ? action.payload.length : 0,
        pageSize: 9,
        currentPage: action.currentPage ? action.currentPage : 1,
      };
    case SEND_QA_POST_FETCH_SUCCESS:
      return {
        loading: false,
        sentPosts: action.payload,
        postCount: action.payload ? action.payload.length : 0,
        pageSize: 3,
        currentPage: action.currentPage ? action.currentPage : 1,
      };
    case SEND_POST_FETCH_FAIL:
      return {
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};
