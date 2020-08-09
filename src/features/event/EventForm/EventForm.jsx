/* global google*/
import React, { useState } from "react";
import { Segment, Grid, Form, Header, Button } from "semantic-ui-react";
import { connect } from "react-redux";
import { compose } from "redux";
import { reduxForm, Field } from "redux-form";
import { geocodeByAddress, getLatLng } from "react-places-autocomplete";
import {
  composeValidators,
  combineValidators,
  isRequired,
  hasLengthGreaterThan
} from "revalidate";
import cuid from "cuid";
import {
  createEvent,
  updateEvent
} from "../../../app/redux/actions/eventActions";
import TextInput from "../../../app/common/form/TextInput";
import TextArea from "../../../app/common/form/TextArea";
import SelectInput from "../../../app/common/form/SelectInput";
import DateInput from "../../../app/common/form/DateInput";
import PlaceInput from "../../../app/common/form/PlaceInput";

const category = [
  { key: "drinks", text: "Drinks", value: "drinks" },
  { key: "culture", text: "Culture", value: "culture" },
  { key: "film", text: "Film", value: "film" },
  { key: "food", text: "Food", value: "food" },
  { key: "music", text: "Music", value: "music" },
  { key: "travel", text: "Travel", value: "travel" }
];

const EventForm = props => {
  const [cityLatLng, setCityLatLng] = useState({});
  const [venueLatLng, setVenueLatLng] = useState({});
  const handleFormSubmit = async values => {
    values.venueLatLng = venueLatLng;
    try {
      if (props.initialValues.id) {
        props.updateEvent(values);
        props.history.push(`/events/${props.initialValues.id}`);
      } else {
        let createdEvent = await this.props.createdEvent(values);
        props.history.push(`/events/${createdEvent.id}`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleCitySelect = selectedCity => {
    geocodeByAddress(selectedCity)
      .then(result => getLatLng(result[0]))
      .then(latlng => {
        setCityLatLng({ latlng });
      })
      .then(() => {
        props.change("city", selectedCity);
      });
  };

  const handleVenueSelect = selectedVenue => {
    geocodeByAddress(selectedVenue)
      .then(result => getLatLng(result[0]))
      .then(latlng => {
        setVenueLatLng({ latlng });
      })
      .then(() => {
        props.change("venue", selectedVenue);
      });
  };

  const { history, initialValues, invalid, submitting, pristine } = props;
  return (
    <Grid>
      <Grid.Column width={10}>
        <Segment>
          <Header sub color="teal" content="Event Details" />
          <Form onSubmit={props.handleSubmit(handleFormSubmit)}>
            <Field
              label="title"
              name="title"
              component={TextInput}
              placeholder="Give your event a name"
            />
            <Field
              name="category"
              component={SelectInput}
              placeholder="What is your event about ?"
              options={category}
              multiple={true}
            />
            <Field
              rows={3}
              name="description"
              component={TextArea}
              placeholder="Tell us about your event"
            />

            <Header sub color="teal" content="event location details" />
            <Field
              name="city"
              options={{ types: ["(cities)"] }}
              onSelect={handleCitySelect}
              component={PlaceInput}
              placeholder="Event City"
            />
            <Field
              name="venue"
              options={{
                location: new google.maps.LatLng(cityLatLng),
                radius: 1000,
                type: ["establishment"]
              }}
              component={TextInput}
              placeholder="Event Venue"
              onSelect={handleVenueSelect}
            />
            <Field name="date" component={DateInput} placeholder="Event Date" />

            <Button
              disabled={invalid || submitting || pristine}
              positive
              type="submit"
            >
              Submit
            </Button>
            <Button
              onClick={
                initialValues.id
                  ? () => history.push(`/events/${initialValues.id}`)
                  : () => history.push(`/events`)
              }
              type="button"
            >
              Cancel
            </Button>
          </Form>
        </Segment>
      </Grid.Column>
    </Grid>
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
  return { initialValues: event };
};

const validate = combineValidators({
  title: isRequired({ message: "The event title is required" }),
  description: composeValidators(
    isRequired({ message: "Please enter a description" }),
    hasLengthGreaterThan(4)({
      message: "Description needs to be at least 5 characters"
    })
  )(),
  city: isRequired("city"),
  venue: isRequired("city"),
  date: isRequired("date")
});

const actions = { createEvent, updateEvent };

const FORM_NAME = "eventForm";

const withReduxForm = reduxForm({
  form: FORM_NAME,
  validate
});

const withConnect = connect(
  mapStateToProps,
  actions
);

export default compose(
  withConnect,
  withReduxForm
)(EventForm);
