import React, { Component } from "react";
import { Menu, Container, Button } from "semantic-ui-react";
import { NavLink, Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { openModal } from "../../../app/redux/actions/modalActions";
import SignedOutMenu from "../Menus/SignedOutMenu";
import SignedInMenu from "../Menus/SignedInMenu";
import { logout } from "../../../app/redux/actions/authActions";
class NavBar extends Component {
  state = {
    authenticated: false
  };
  // UI
  showSignInMenu() {
    const { auth } = this.props;
    const authenticated = auth.authenticated;
    return (
      authenticated && (
        <SignedInMenu
          signOut={this.handleSignOut}
          currentUser={auth.currentUser}
        />
      )
    );
  }

  showSignOutMenu() {
    return (
      <SignedOutMenu
        signOut={this.handleSignOut}
        signIn={this.handleSignIn}
        register={this.handleRegister}
      />
    );
  }
  // UI

  handleSignIn = () => {
    this.props.openModal("LoginModal");
  };

  handleRegister = () => {
    this.props.openModal("RegisterModal");
  };
  handleSignOut = () => {
    const { logout } = this.props;
    logout();
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

const actions = {
  openModal,
  logout
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default withRouter(
  connect(
    mapStateToProps,
    actions
  )(NavBar)
);
