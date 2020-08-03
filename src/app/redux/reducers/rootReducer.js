import { combineReducers } from "redux";
import { reducer as FormReducer } from "redux-form";
import eventReducer from "./eventReducer/eventReducer";
import modalReducer from "./modalReducer/modalReducer";
import authReducer from "./authReducer/authReducer";
const rootReducer = combineReducers({
  events: eventReducer,
  form: FormReducer,
  modals: modalReducer,
  auth: authReducer
});

export default rootReducer;
