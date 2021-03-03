import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import {
  userRegisterReducer,
  userLoginReducer,
  userSmsReducer,
  userSmsCheckReducer,
  userUpdatePasswordReducer,
} from "./reducers/userReducers";
import {
  adminTasksReducer,
  adminQuestionsReducer,
  adminNoticesReducer,
} from "./reducers/adminReducers";
import {
  qrcodePostDataReducer,
  qrcodeSavePostReducer,
  addressInputReducer,
} from "./reducers/linkReducers";
import {
  sendPostsReducer,
  receivePostsReducer,
} from "./reducers/mailPostReducers";
import {
  deskNoticesReducer,
  deskFaqsReducer,
  deskQasReducer,
} from "./reducers/deskReducers";

const reducer = combineReducers({
  userRegister: userRegisterReducer,
  userLogin: userLoginReducer,
  userSms: userSmsReducer,
  userSmsCheck: userSmsCheckReducer,
  userUpdatePassword: userUpdatePasswordReducer,
  adminTasks: adminTasksReducer,
  adminQuestions: adminQuestionsReducer,
  adminNotices: adminNoticesReducer,
  qrcodePostData: qrcodePostDataReducer,
  qrcodeSavePost: qrcodeSavePostReducer,
  addressInput: addressInputReducer,
  sendPosts: sendPostsReducer,
  receivePosts: receivePostsReducer,
  deskNotices: deskNoticesReducer,
  deskFaqs: deskFaqsReducer,
  deskQas: deskQasReducer,
});

const userTokenFromStorage = localStorage.getItem("userToken")
  ? JSON.parse(localStorage.getItem("userToken"))
  : false;

const initailState = {
  userLogin: { userToken: userTokenFromStorage },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initailState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
