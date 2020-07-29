import React from "react";
import { Grid, GridColumn } from "semantic-ui-react";

import { Route, Redirect } from "react-router-dom";

import BasicPage from "./BasicPage";
import AboutPage from "./AboutPage";
import PhotosPage from "./PhotosPage";
import AccountPage from "./AccountPage";

import SettingsNav from "./SettingsNav";

const SettingsDashboard = () => {
  return (
    <Grid>
      <Grid.Column width={12}>
        <Redirect exact from="/settings" to="/settings/basic" />
        <Route path="/settings/basic" component={BasicPage} />
        <Route path="/settings/about" component={AboutPage} />
        <Route path="/settings/photos" component={PhotosPage} />
        <Route path="/settings/account" component={AccountPage} />
      </Grid.Column>
      <GridColumn width={4}>
        <SettingsNav />
      </GridColumn>
    </Grid>
  );
};

export default SettingsDashboard;
