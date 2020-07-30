import React, { useState } from "react";
import { Segment, Form, Button } from "semantic-ui-react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  createEvent,
  updateEvent
} from "../../../app/redux/actions/eventActions";
const EventForm = props => {
  const [values, setValues] = useState({ ...props.event });
  const handleFormSubmit = e => {
    e.preventDefault();
    const event = { ...values };
    if (props.event && props.event.id) {
      props.updateEvent(event);
      props.history.push(`/events/${values.id}`);
    } else {
      props.createEvent(event);
    }
  };
  const onHandleChange = ({ target: { name, value } }) => {
    setValues({ ...values, [name]: value });
  };
  const { title, date, city, venue, hostedBy } = values;
  return (
    <Segment>
      <Form onSubmit={handleFormSubmit}>
        <Form.Field>
          <label>Event Title</label>
          <input
            name="title"
            value={title}
            placeholder="Event Title"
            onChange={e => onHandleChange(e)}
          />
        </Form.Field>
        <Form.Field>
          <label>Event Date</label>
          <input
            name="date"
            value={date}
            type="date"
            placeholder="Event Date"
            onChange={e => onHandleChange(e)}
          />
        </Form.Field>
        <Form.Field>
          <label>City</label>
          <input
            name="city"
            value={city}
            placeholder="City event is taking place"
            onChange={e => onHandleChange(e)}
          />
        </Form.Field>
        <Form.Field>
          <label>Venue</label>
          <input
            name="venue"
            value={venue}
            placeholder="Enter the Venue of the event"
            onChange={e => onHandleChange(e)}
          />
        </Form.Field>
        <Form.Field>
          <label>Hosted By</label>
          <input
            name="hostedBy"
            value={hostedBy}
            placeholder="Enter the name of person hosting"
            onChange={e => onHandleChange(e)}
          />
        </Form.Field>
        <Button positive type="submit">
          Submit
        </Button>
        <Button type="button" onClick={props.history.goBack}>
          Cancel
        </Button>
        <Button as={Link} to="/manage/2" type="button">
          Go
        </Button>
      </Form>
    </Segment>
  );
};

const mapStateToProps = (state, ownProps) => {
  let event = {
    title: "",
    date: "",
    city: "",
    venue: "",
    hostedBy: ""
  };
  const { id } = ownProps.match.params;
  if (id && state.events.length > 0) {
    event = state.events.find(event => event.id === id);
  }
  return { event };
};

const actions = { createEvent, updateEvent };

export default connect(
  mapStateToProps,
  actions
)(EventForm);
