import {
  CREATE_EVENT,
  UPDATE_EVENT,
  DELETE_EVENT,
  FETCH_EVENTS
} from "../../constants/eventConstants";
import { fetchSampleData } from "../../data/mockApi";
import {
  asyncActionStart,
  asyncActionFinish,
  asyncActionError
} from "./asyncActions";
import { toastr } from "react-redux-toastr";
import { createNewEvent } from "../../../app/common/utils/helpers";

export const createEvent = event => {
  return async (dispatch, getState, { getFirestore, getFirebase }) => {
    const firestore = getFirestore();
    const firebase = getFirebase();
    const user = firestore.auth().currentUser;
    const photoURL = getState().firebase.profile.photoURL;
    const newEvent = createNewEvent(user, photoURL, event);
    try {
      let createdEvent = await firestore.add("events", newEvent);
      await firestore.set(`event_attendee/${createdEvent.id}_${user.uid}`, {
        eventId: createdEvent.id,
        userUid: user.uid,
        eventDate: event.date,
        host: true
      });
      toastr.success("Success!", "Event has been created ");
      return createdEvent;
    } catch (error) {
      console.log(error);
    }
  };
};

export const updateEvent = event => {
  return {
    type: UPDATE_EVENT,
    payload: { event }
  };
};

export const deleteEvent = eventId => {
  return {
    type: DELETE_EVENT,
    payload: { eventId }
  };
};

export const loadEvents = () => {
  return async dispatch => {
    try {
      dispatch(asyncActionStart());
      const events = await fetchSampleData();
      dispatch({ type: FETCH_EVENTS, payload: { events } });
      dispatch(asyncActionFinish());
    } catch (error) {
      console.log(error);
      dispatch(asyncActionError());
    }
  };
};
