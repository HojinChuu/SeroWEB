import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import {
  userRegisterReducer,
  userLoginReducer,
  userSmsReducer,
  userSmsCheckReducer,
} from "./reducers/userReducers";
import {
  adminTasksReducer,
  adminQuestionsReducer,
} from "./reducers/adminReducers";
import {
  qrcodePostDataReducer,
  addressInputReducer,
} from "./reducers/linkReducers";

const reducer = combineReducers({
  userRegister: userRegisterReducer,
  userLogin: userLoginReducer,
  userSms: userSmsReducer,
  userSmsCheck: userSmsCheckReducer,
  adminTasks: adminTasksReducer,
  adminQuestions: adminQuestionsReducer,
  qrcodePostData: qrcodePostDataReducer,
  addressInput: addressInputReducer,
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
