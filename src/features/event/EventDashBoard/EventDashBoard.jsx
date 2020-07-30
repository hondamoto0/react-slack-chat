import React, { Component } from "react"; // from react
import { Grid, GridColumn } from "semantic-ui-react"; // semantic-ui
import EventList from "../EventList/EventList";
import { connect } from "react-redux";
import {
  createEvent,
  deleteEvent,
  updateEvent
} from "../../../app/redux/actions/eventActions"; // Event Actions

class EventDashboard extends Component {
  handleDeleteEvent = eventId => {
    console.log(eventId);
    this.props.deleteEvent(eventId);
  };

  render() {
    const { events } = this.props;
    console.log(events);
    return (
      <Grid>
        <GridColumn width={10}>
          <EventList events={events} deleteEvent={this.handleDeleteEvent} />
        </GridColumn>
        <GridColumn width={6}>
          <h2>Activity Feed</h2>
        </GridColumn>
      </Grid>
    );
  }
}

const mapStateToProps = state => ({
  events: state.events
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
)(EventDashboard);
