import React from "react";
import { Grid } from "semantic-ui-react";
import EventDetailedHeader from "./EventDetailedHeader";
import EventDetailedSidebar from "./EventDetailedSidebar";
import EventDetailedInfo from "./EventDetailedInfo";
import EventDetailedChat from "./EventDetailedChat";
import { connect } from "react-redux";

const EventDetailedPage = props => {
  const { event } = props;
  return (
    <Grid>
      <Grid.Column width={10}>
        <EventDetailedHeader event={event} />
        <EventDetailedInfo event={event} />
        <EventDetailedChat />
      </Grid.Column>
      <Grid.Column width={6}>
        <EventDetailedSidebar />
      </Grid.Column>
    </Grid>
  );
};

const mapStateToProps = (state, ownProps) => {
  const { id } = ownProps.match.params;
  console.log(id);
  return { event: state.events.find(event => event.id === id) };
};

export default connect(
  mapStateToProps,
  null
)(EventDetailedPage);
