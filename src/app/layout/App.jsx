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
import { Route, Switch, withRouter } from "react-router-dom";
import ModalManager from "../../features/modals/ModalManager";

function App(props) {
  return (
    <Fragment>
      <ModalManager />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route
          path="/(.+)"
          render={() => (
            <Fragment>
              <NavBar />
              <Container style={{ paddingTop: "50px" }} className="main">
                <Switch key={props.location.key}>
                  <Route exact path="/events" component={EventDashboard} />
                  <Route path="/events/:id" component={EventDetailedPage} />
                  <Route path="/people" component={PeopleDashboard} />
                  <Route path="/profile/:id" component={UserDetailedPage} />
                  <Route path="/settings" component={SettingDashboard} />
                  <Route
                    path={["/createEvent", "/manage/:id"]}
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

export default withRouter(App);
