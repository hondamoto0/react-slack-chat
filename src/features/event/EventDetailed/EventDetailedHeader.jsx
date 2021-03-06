import React from "react";
import { Segment, Image, Button, Header, Item } from "semantic-ui-react";
import { Link } from "react-router-dom";
import moment from "moment";
const eventImageStyle = {
  filter: "brightness(30%)"
};

const eventImageTextStyle = {
  position: "absolute",
  bottom: "5%",
  left: "5%",
  width: "100%",
  height: "auto",
  color: "white"
};

const EventDetailedHeader = ({ event }) => {
  const showEventInfo = () => {
    return (
      <Segment basic attached="top" style={{ padding: "0" }}>
        <Image
          src={`/assets/categoryImages/${event.category}.jpg`}
          fluid
          style={eventImageStyle}
        />
        <Segment basic style={eventImageTextStyle}>
          <Item.Group>
            <Item>
              <Item.Content>
                <Header
                  size="huge"
                  content={event.title && event.title}
                  style={{ color: "white" }}
                />
                <p>{event.date && moment(event.date).format("DD-MM-YYYY")}</p>
                <p>
                  Hosted by <strong>{event.hostedBy && event.hostedBy}</strong>
                </p>
              </Item.Content>
            </Item>
          </Item.Group>
        </Segment>
      </Segment>
    );
  };

  const showEventActions = () => {
    return (
      <Segment attached="bottom">
        <Button>Cancel My Place</Button>
        <Button color="teal">JOIN THIS EVENT</Button>

        <Button
          as={Link}
          to={`/manage/${event.id}`}
          color="orange"
          floated="right"
        >
          Manage Event
        </Button>
      </Segment>
    );
  };
  return (
    <>
      <Segment.Group>
        {event && showEventInfo()}
        {event && showEventActions()}
      </Segment.Group>
    </>
  );
};

export default EventDetailedHeader;
