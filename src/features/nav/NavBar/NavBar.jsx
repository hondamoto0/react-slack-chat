import React, { Component, Fragment } from "react";
import { Menu, Container, Button } from "semantic-ui-react";
import { NavLink, Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { openModal } from "../../../app/redux/actions/modalActions";
import SignedOutMenu from "../Menus/SignedOutMenu";
import SignedInMenu from "../Menus/SignedInMenu";
import { logout } from "../../../app/redux/actions/authActions";
class NavBar extends Component {
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
    const { auth } = this.props;
    const { authenticated } = auth;
    console.log(authenticated);
    return (
      <SignedOutMenu
        authenticated={authenticated}
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
    const { auth } = this.props;
    const { authenticated } = auth;
    return (
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item as={NavLink} exact to="/" header>
            <img src="/assets/logo.png" alt="logo" />
            Re-vents
          </Menu.Item>
          <Menu.Item as={NavLink} to="/events" name="Events" />
          {authenticated && (
            <Fragment>
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
            </Fragment>
          )}

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
