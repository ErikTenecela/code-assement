import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import studentReducer from "./studentReducer";

const allReducers = combineReducers({
  studentName: studentReducer,
  auth: authReducer,
  error: errorReducer
});

export default allReducers;
