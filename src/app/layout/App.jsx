import React, { Fragment } from "react";
import EventDashboard from "../../features/event/EventDashboard/EventDashboard";
import NavBar from "../../features/nav/NavBar/NavBar";
import HomePage from "../../features/home/HomePage";
import EventDetailedPage from "../../features/event/EventDetailed/EventDetailedPage";
import PeopleDashboard from "../../features/user/PeopleDashboard/PeopleDashboard";
import SettingDashboard from "../../features/user/Settings/SettingsDashboard";
import UserDetailedPage from "../../features/user/UserDetailed/UserDetailedPage";
import EventForm from "../../features/event/EventForm/EventForm";
import ErrorPage from "../../features/error/Error";
import { Container } from "semantic-ui-react";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <Fragment>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route
          path="/(.+)"
          render={() => (
            <Fragment>
              <NavBar />
              <Container style={{ paddingTop: "50px" }} className="main">
                <Switch>
                  <Route exact path="/events" component={EventDashboard} />
                  <Route path="/events/:id" component={EventDetailedPage} />
                  <Route path="/people" component={PeopleDashboard} />
                  <Route path="/profile/:id" component={UserDetailedPage} />
                  <Route path="/settings" component={SettingDashboard} />
                  <Route
                    key="createEvent"
                    path="/createEvent"
                    component={EventForm}
                  />
                  <Route
                    key="editEvent"
                    path="/manage/:id"
                    component={EventForm}
                  />
                  <Route path="*" component={ErrorPage} />
                </Switch>
              </Container>
            </Fragment>
          )}
        />
      </Switch>
    </Fragment>
  );
}

export default App;
