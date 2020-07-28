import React, { Component } from "react"; // from react

import { Grid, GridColumn, Button } from "semantic-ui-react"; // semantic-ui

import EventList from "../EventList/EventList";
import EventForm from "../EventForm/EventForm";

import cuid from "cuid";

const eventsFromDashBoard = [
  {
    id: "1",
    title: "Trip to Tower of London",
    date: "2018-03-27T11:00:00+00:00",
    category: "culture",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.",
    city: "London, UK",
    venue: "Tower of London, St Katharine's & Wapping, London",
    hostedBy: "Bob",
    hostPhotoURL: "https://randomuser.me/api/portraits/men/20.jpg",
    attendees: [
      {
        id: "a",
        name: "Bob",
        photoURL: "https://randomuser.me/api/portraits/men/20.jpg"
      },
      {
        id: "b",
        name: "Tom",
        photoURL: "https://randomuser.me/api/portraits/men/22.jpg"
      }
    ]
  },
  {
    id: "2",
    title: "Trip to Punch and Judy Pub",
    date: "2018-03-28T14:00:00+00:00",
    category: "drinks",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.",
    city: "London, UK",
    venue: "Punch & Judy, Henrietta Street, London, UK",
    hostedBy: "Tom",
    hostPhotoURL: "https://randomuser.me/api/portraits/men/22.jpg",
    attendees: [
      {
        id: "b",
        name: "Tom",
        photoURL: "https://randomuser.me/api/portraits/men/22.jpg"
      },
      {
        id: "a",
        name: "Bob",
        photoURL: "https://randomuser.me/api/portraits/men/20.jpg"
      }
    ]
  }
];

class EventDashBoard extends Component {
  state = {
    events: eventsFromDashBoard,
    isOpen: false
  };
  cancelFormOpen;
  handleIdsOpenToggle = () => {
    this.setState(({ isOpen }) => ({
      isOpen: !isOpen
    }));
  };

  handleChange = e => {
    console.log(e.target.value);
  };

  handleCreateEvent = newEvent => {
    newEvent.id = cuid();
    newEvent.hostPhotoURL = "/assets/user.png";
    this.setState(({ events }) => ({ events: [...events, newEvent] }));
  };

  render() {
    const { events, isOpen } = this.state;
    return (
      <Grid>
        <GridColumn width={10}>
          <EventList events={events} />
        </GridColumn>
        <GridColumn width={6}>
          <Button
            onClick={this.handleIdsOpenToggle}
            positive
            content="Create Event"
          />
          {isOpen && (
            <EventForm
              createEvent={this.handleCreateEvent}
              handleChange={this.handleChange}
              cancelFormOpen={this.handleIdsOpenToggle}
            />
          )}
        </GridColumn>
      </Grid>
    );
  }
}

export default EventDashBoard;
