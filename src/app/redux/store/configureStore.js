import { createStore, compose, applyMiddleware } from "redux";
import rootReducer from "../reducers/rootReducer";

export const configureStore = () => {
  const middleWares = [];
  const composeEnhancers =
    (process.env.NODE_ENV !== "production" &&
      typeof window === "object" &&
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose;

  const enhancer = composeEnhancers(applyMiddleware(...middleWares));
  const store = createStore(rootReducer, enhancer);
  return store;
};
