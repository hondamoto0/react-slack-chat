import React, { Fragment } from "react";
import EventDashBoard from "../../features/event/EventDashBoard/EventDashBoard";
import NavBar from "../../features/nav/NavBar/NavBar";
import { Container } from "semantic-ui-react";

function App() {
  return (
    <Fragment>
      <NavBar />
      <Container style={{ paddingTop: "50px" }} className="main">
        <EventDashBoard />
      </Container>
    </Fragment>
  );
}

export default App;
