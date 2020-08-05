import React, { Component } from "react";
import { Segment, Item, Icon, List, Button } from "semantic-ui-react";
import EventListAttandee from "./EventListAttandee";
import { Link } from "react-router-dom";
import format from "date-fns/format";
import moment from "moment";
class EventListItem extends Component {
  showViewAndDeleteButtons = () => {
    const { deleteEvent, event } = this.props;
    return (
      <Segment clearing>
        <span>{event.description}</span>
        <Button
          onClick={() => deleteEvent(event.id)}
          as="a"
          color="red"
          floated="right"
          content="Delete"
        />
        <Button
          to={`events/${event.id}`}
          as={Link}
          color="teal"
          floated="right"
          content="View"
        />
      </Segment>
    );
  };
  render() {
    const { event } = this.props;
    return (
      <Segment.Group>
        <Segment>
          <Item.Group>
            <Item>
              <Item.Image size="tiny" circular src={event.hostPhotoURL} />
              <Item.Content>
                <Item.Header>{event.title}</Item.Header>
                <Item.Description>
                  Hosted by <span>{event.hostedBy}</span>
                </Item.Description>
              </Item.Content>
            </Item>
          </Item.Group>
        </Segment>
        <Segment>
          <span>
            <Icon name="clock" />{" "}
            {moment(event.date.seconds * 1000).format("DD MMM YYYY ")} |
            <Icon name="marker" /> {event.venue}
          </span>
        </Segment>
        <Segment secondary>
          <List horizontal>
            {event.attendees &&
              Object.values(event.attendees).map((attendee, index) => (
                <EventListAttandee key={index} attendee={attendee} />
              ))}
          </List>
        </Segment>
        {this.showViewAndDeleteButtons()}
      </Segment.Group>
    );
  }
}

export default EventListItem;
