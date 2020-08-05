import { createStore, compose, applyMiddleware } from "redux";
import { reactReduxFirebase, getFirebase } from "react-redux-firebase";
import { reduxFirestore, getFirestore } from "redux-firestore";
import rootReducer from "../reducers/rootReducer";
import thunk from "redux-thunk";
import firebase from "../../../config/firebase";

const rrfConfig = {
  userProfile: "users",
  attachAuthIsReady: true,
  useFirestoreForProfile: true,
  updateProfileOnLogin: false
};

export const configureStore = () => {
  const middleWares = [thunk.withExtraArgument({ getFirebase, getFirestore })];
  const composeEnhancers =
    (process.env.NODE_ENV !== "production" &&
      typeof window === "object" &&
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose;

  const enhancer = composeEnhancers(
    applyMiddleware(...middleWares),
    reactReduxFirebase(firebase, rrfConfig),
    reduxFirestore(firebase)
  );
  const store = createStore(rootReducer, enhancer);
  return store;
};
