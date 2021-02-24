import {
  DESK_NOTICE_FETCH_REQUEST,
  DESK_NOTICE_FETCH_SUCCESS,
  DESK_NOTICE_FETCH_FAIL,
  DESK_FAQ_FETCH_REQUEST,
  DESK_FAQ_FETCH_SUCCESS,
  DESK_FAQ_FETCH_FAIL,
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
