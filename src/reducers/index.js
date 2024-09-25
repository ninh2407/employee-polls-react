import { combineReducers } from "redux";
import listUsers from './users';
import { loadingBarReducer } from "react-redux-loading-bar";
import authedUser from "./authedUser";
import questions from "./questions";

export default combineReducers({
  listUsers,
  authedUser,
  questions,
  loadingBar: loadingBarReducer,
  });