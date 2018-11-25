/* eslint-disable import/no-named-as-default */
import { Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import React from 'react';
import { hot } from 'react-hot-loader';

import RouteAuth from './routes/RouteAuth';
import RouteGuest from './routes/RouteGuest';

import DashboardPage from './../containers/DashboardPage';
import LoginPage from './../containers/LoginPage';

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.

class App extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <RouteAuth path="/" component={DashboardPage} exact />
          <RouteAuth path="/dashboard-page" component={DashboardPage} />
          <RouteGuest path="/login" component={LoginPage} />
        </Switch>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default hot(module)(App);
