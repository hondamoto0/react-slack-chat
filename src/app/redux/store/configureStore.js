import { createStore, compose, applyMiddleware } from "redux";
import rootReducer from "../reducers/rootReducer";
import thunk from "redux-thunk";
export const configureStore = () => {
  const middleWares = [thunk];
  const composeEnhancers =
    (process.env.NODE_ENV !== "production" &&
      typeof window === "object" &&
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose;

  const enhancer = composeEnhancers(applyMiddleware(...middleWares));
  const store = createStore(rootReducer, enhancer);
  return store;
};
