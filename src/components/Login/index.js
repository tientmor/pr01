import React, { Component } from 'react';

class Login extends Component {
  state = {
    email: '',
    password: ''
  };

  handleLogin = (e) => {
    e.preventDefault();
    this.props.handleLogin(this.state);
  };

  render() {
    const bind = statePath => ({
      value: this.state[statePath] === '' ? '' : this.state[statePath],
      onChange: e => this.setState({ [statePath]: e.target.value })
    });

    return (
      <div id="primary" className="p-t-b-100 height-full">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 mx-md-auto paper-card">
              <div className="text-center">
                <img src="assets/img/dummy/u4.png" alt="" />
                <h3 className="mt-2">Welcome Back</h3>
                <p className="p-t-b-20">
                  Hey Soldier welcome back signin now there is lot of new stuff
                  waiting for you
                </p>
              </div>
              <form onSubmit={this.handleLogin}>
                <div className="form-group has-icon">
                  <i className="icon-envelope-o" />
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Email Address"
                    {...bind('email')}
                  />
                </div>
                <div className="form-group has-icon">
                  <i className="icon-user-secret" />
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Password"
                    {...bind('password')}
                  />
                </div>
                <input
                  type="submit"
                  className="btn btn-primary btn-lg btn-block"
                  value="Log In"
                />
                <p className="forget-pass">
                  Have you forgot your username or password ?
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
