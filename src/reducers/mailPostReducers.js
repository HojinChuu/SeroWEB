import {
  SEND_POST_FETCH_REQUEST,
  SEND_POST_FETCH_SUCCESS,
  SEND_POST_FETCH_FAIL,
  RECEIVE_POST_FETCH_REQUEST,
  RECEIVE_POST_FETCH_SUCCESS,
  RECEIVE_POST_FETCH_FAIL,
} from "../constants/mailPostConstants";

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
        postCount: action.payload.length,
        pageSize: 6,
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
        postCount: action.payload.length,
        pageSize: 6,
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
