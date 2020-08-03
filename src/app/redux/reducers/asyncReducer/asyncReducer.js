import { createReducer } from "../../../common/utils/reducerUtils";
import {
  ASYNC_ACTION_START,
  ASYNC_ACTION_FINISH
} from "../../../constants/asyncConstants";

const initialState = {
  loading: false
};

const asyncActionsStarted = state => {
  return {
    ...state,
    loading: true
  };
};

const asyncActionsFinish = state => {
  return {
    ...state,
    loading: false
  };
};

const asyncActionsError = state => {
  return {
    ...state,
    loading: false
  };
};

export default createReducer(initialState, {
  [ASYNC_ACTION_START]: asyncActionsStarted,
  [ASYNC_ACTION_FINISH]: asyncActionsFinish,
  [asyncActionsError]: asyncActionsError
});
