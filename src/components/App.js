/* eslint-disable import/no-named-as-default */
import { Route, Switch } from "react-router-dom";

import AboutPage from "./AboutPage";
import FuelSavingsPage from "./containers/FuelSavingsPage";
import HomePage from "./HomePage";
import NotFoundPage from "./NotFoundPage";
import DashboardPage from './containers/DashboardPage';
import PropTypes from "prop-types";
import React from "react";
import { hot } from "react-hot-loader";

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.

class App extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={DashboardPage} />
          {/* <Route path="/fuel-savings" component={FuelSavingsPage} /> */}
          {/* <Route path="/about" component={AboutPage} /> */}
          {/* <Route path="/dashboard-page" component={DashboardPage} /> */}
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default hot(module)(App);
