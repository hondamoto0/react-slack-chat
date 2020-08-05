import { combineReducers } from "redux";
import { reducer as FormReducer } from "redux-form";
import { reducer as ToastReducer } from "react-redux-toastr";
import eventReducer from "./eventReducer/eventReducer";
import modalReducer from "./modalReducer/modalReducer";
import authReducer from "./authReducer/authReducer";
import asyncReducer from "./asyncReducer/asyncReducer";
import { firebaseReducer } from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore";
const rootReducer = combineReducers({
  events: eventReducer,
  form: FormReducer,
  modals: modalReducer,
  auth: authReducer,
  async: asyncReducer,
  toastr: ToastReducer,
  firebase: firebaseReducer,
  firestore: firestoreReducer
});

export default rootReducer;
