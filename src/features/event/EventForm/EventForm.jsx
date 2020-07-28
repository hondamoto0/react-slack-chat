import React, { Component } from "react";
import { Segment, Form, Button } from "semantic-ui-react";
class EventForm extends Component {
  state = {
    title: "",
    date: "",
    city: "",
    venue: "",
    hostedBy: ""
  };

  componentDidMount() {
    if (this.props.selectedEvent !== null) {
      this.setState({ ...this.props.selectedEvent });
    }
  }

  handleFormSubmit = e => {
    e.preventDefault();
    if (this.props.selectedEvent) {
      this.props.updateEvent(this.state);
    } else {
      this.props.createEvent(this.state);
    }
  };
  onHandleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };
  render() {
    const { cancelFormOpen } = this.props;
    const { title, date, city, venue, hostedBy } = this.state;
    return (
      <Segment>
        <Form onSubmit={this.handleFormSubmit}>
          <Form.Field>
            <label>Event Title</label>
            <input
              name="title"
              value={title}
              ref="title"
              placeholder="Event Title"
              onChange={e => this.onHandleChange(e)}
            />
          </Form.Field>
          <Form.Field>
            <label>Event Date</label>
            <input
              name="date"
              value={date}
              type="date"
              placeholder="Event Date"
              onChange={e => this.onHandleChange(e)}
            />
          </Form.Field>
          <Form.Field>
            <label>City</label>
            <input
              name="city"
              value={city}
              placeholder="City event is taking place"
              onChange={e => this.onHandleChange(e)}
            />
          </Form.Field>
          <Form.Field>
            <label>Venue</label>
            <input
              name="venue"
              value={venue}
              placeholder="Enter the Venue of the event"
              onChange={e => this.onHandleChange(e)}
            />
          </Form.Field>
          <Form.Field>
            <label>Hosted By</label>
            <input
              name="hostedBy"
              value={hostedBy}
              placeholder="Enter the name of person hosting"
              onChange={e => this.onHandleChange(e)}
            />
          </Form.Field>
          <Button positive type="submit">
            Submit
          </Button>
          <Button type="button" onClick={cancelFormOpen}>
            Cancel
          </Button>
        </Form>
      </Segment>
    );
  }
}
export default EventForm;
