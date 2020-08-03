import React, { Component } from "react";
import { Segment, Item, Icon, List, Button } from "semantic-ui-react";
import EventListAttandee from "./EventListAttandee";
import { Link } from "react-router-dom";
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
            {/* <Icon name="clock" /> {event.date}| */}
            <Icon name="marker" /> {event.venue}
          </span>
        </Segment>
        <Segment secondary>
          <List horizontal>
            {event.attendees &&
              event.attendees.map(attendee => (
                <EventListAttandee key={attendee.id} attendee={attendee} />
              ))}
          </List>
        </Segment>
        {this.showViewAndDeleteButtons()}
      </Segment.Group>
    );
  }
}

export default EventListItem;
