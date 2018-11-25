import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { actLogin } from './../actions/authActions';

import Login from './../components/Login';

class LoginPage extends Component {
  handleLogin = dataLogin => {
    let { history } = this.props;
    this.props.onLogin(dataLogin).then(() => {
      history.push('/');
    });
  };
  render() {
    return <Login handleLogin={this.handleLogin} />;
  }
}

LoginPage.propTypes = {
  onLogin: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired
};
const mapDispatchToProps = dispatch => ({
  onLogin: dataLogin => dispatch(actLogin(dataLogin))
});

export default connect(
  null,
  mapDispatchToProps
)(LoginPage);
