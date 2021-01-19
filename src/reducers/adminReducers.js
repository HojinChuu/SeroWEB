import {
  ADMIN_TASK_FETCH_REQUEST,
  ADMIN_TASK_FETCH_SUCCESS,
  ADMIN_TASK_FETCH_FAIL,
  ADMIN_TASK_REMOVE_REQUEST,
  ADMIN_TASK_REMOVE_SUCCESS,
  ADMIN_TASK_REMOVE_FAIL,
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
    case ADMIN_TASK_REMOVE_REQUEST:
      return {
        ...state,
        loading: false,
      };
    case ADMIN_TASK_REMOVE_SUCCESS:
      return {
        ...state,
        // tasks: state.tasks.filter((task) => {
        //   action.payload.map((item) => item !== task.seId);
        // }),
      };
    case ADMIN_TASK_REMOVE_FAIL:
      return {
        loading: false,
      };
    default:
      return state;
  }
};
