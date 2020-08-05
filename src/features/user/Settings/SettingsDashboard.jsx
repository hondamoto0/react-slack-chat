import React from "react";
import { Grid, GridColumn } from "semantic-ui-react";

import { Route, Redirect } from "react-router-dom";

import BasicPage from "./BasicPage";
import AboutPage from "./AboutPage";
import PhotosPage from "./PhotosPage";
import AccountPage from "./AccountPage";

import SettingsNav from "./SettingsNav";
import { updatePassword } from "../../../app/redux/actions/authActions";
import { connect } from "react-redux";
const SettingsDashboard = ({ updatePassword, providerId }) => {
  return (
    <Grid>
      <Grid.Column width={12}>
        {/* <Redirect exact from="/settings" to="/settings/basic" /> */}
        <Route path="/settings/basic" component={BasicPage} />
        <Route path="/settings/about" component={AboutPage} />
        <Route path="/settings/photos" component={PhotosPage} />
        <Route
          path="/settings/account"
          render={props => (
            <AccountPage
              {...props}
              updatePassword={updatePassword}
              providerId={providerId}
            />
          )}
        />
      </Grid.Column>
      <GridColumn width={4}>
        <SettingsNav />
      </GridColumn>
    </Grid>
  );
};

const actions = {
  updatePassword
};

const mapStateToProps = state => ({
  providerId:
    state.firebase.auth.isLoaded &&
    state.firebase.auth.providerData[0].providerId
});

export default connect(
  mapStateToProps,
  actions
)(SettingsDashboard);
