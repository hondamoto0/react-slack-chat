import React, { Component } from "react";
import { Menu, Container, Button } from "semantic-ui-react";
import { NavLink, Link, withRouter } from "react-router-dom";
import SignedOutMenu from "../Menus/SignedOutMenu";
import SignedInMenu from "../Menus/SignedInMenu";
class NavBar extends Component {
  state = {
    authenticated: false
  };
  // UI
  showSignInMenu() {
    const { authenticated } = this.state;
    return authenticated && <SignedInMenu signOut={this.handleSignOut} />;
  }

  showSignOutMenu() {
    return (
      <SignedOutMenu signOut={this.handleSignOut} signIn={this.handleSignIn} />
    );
  }
  // UI

  handleSignIn = () => {
    this.setState({ authenticated: true });
  };

  handleSignOut = () => {
    this.setState({ authenticated: false });
    this.props.history.push("/");
  };

  render() {
    return (
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item as={NavLink} exact to="/" header>
            <img src="/assets/logo.png" alt="logo" />
            Re-vents
          </Menu.Item>
          <Menu.Item as={NavLink} to="/events" name="Events" />
          <Menu.Item as={NavLink} to="/people" name="People" />
          <Menu.Item>
            <Button
              as={Link}
              to="/createEvent"
              floated="right"
              positive
              inverted
              content="Create Event"
            />
          </Menu.Item>
          {this.showSignInMenu()}
          {this.showSignOutMenu()}
        </Container>
      </Menu>
    );
  }
}

export default withRouter(NavBar);
