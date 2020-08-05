import React, { Component } from "react"; // from react
import { Grid, GridColumn } from "semantic-ui-react"; // semantic-ui
import EventList from "../EventList/EventList";
import { connect } from "react-redux";
import {
  createEvent,
  deleteEvent,
  updateEvent
} from "../../../app/redux/actions/eventActions"; // Event Actions
import LoadingComponent from "../../../app/layout/LoadingComponent";
import EventActivity from "../EventActivity/EventActivity";
import { firestoreConnect } from "react-redux-firebase";

class EventDashboard extends Component {
  handleDeleteEvent = eventId => {
    console.log(eventId);
    this.props.deleteEvent(eventId);
  };

  render() {
    const { events, loading } = this.props;
    if (loading) return <LoadingComponent inverted={false} />;
    return (
      <Grid>
        <GridColumn width={10}>
          <EventList events={events} deleteEvent={this.handleDeleteEvent} />
        </GridColumn>
        <GridColumn width={6}>
          <EventActivity />
        </GridColumn>
      </Grid>
    );
  }
}

const mapStateToProps = state => ({
  events: state.firestore.ordered.events,
  loading: state.async.loading
});

// const mapDispatchToProps = dispatch => ({
//   createEvent: event => dispatch(createEvent(event))
// });

const actions = {
  createEvent,
  updateEvent,
  deleteEvent
};

export default connect(
  mapStateToProps,
  actions
)(firestoreConnect([{ collection: "events" }])(EventDashboard));
