import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  userRegisterReducer,
  userLoginReducer,
  userMessageReducer,
  userMessageCheckReducer,
} from "./reducers/userReducers";

const reducer = combineReducers({
  userRegister: userRegisterReducer,
  userLogin: userLoginReducer,
  userMessage: userMessageReducer,
  userMessageCheck: userMessageCheckReducer,
});

const initailState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  initailState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
