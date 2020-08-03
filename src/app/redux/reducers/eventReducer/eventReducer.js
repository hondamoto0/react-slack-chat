import { createReducer } from "../../../common/utils/reducerUtils";
import {
  CREATE_EVENT,
  UPDATE_EVENT,
  DELETE_EVENT,
  FETCH_EVENTS
} from "../../../constants/eventConstants";
const initialState = [];

const createEvent = (state, payload) => {
  const { event } = payload;
  return [...state, event];
};

const updateEvent = (state, payload) => {
  const { event } = payload;
  return [...state.map(item => (item.id === event.id ? event : item))];
};

const deleteEvent = (state, payload) => {
  const { eventId } = payload;
  return [...state.filter(item => item.id !== eventId)];
};

const fetchEvents = (state, payload) => {
  return payload.events;
};

export default createReducer(initialState, {
  [CREATE_EVENT]: createEvent,
  [UPDATE_EVENT]: updateEvent,
  [DELETE_EVENT]: deleteEvent,
  [FETCH_EVENTS]: fetchEvents
});
