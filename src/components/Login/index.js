import React, { Component } from 'react';
import { isEmpty, isEmail } from 'validator';
import Input from './Builds/Input';
import Form from './Builds/Form';
import Button from './Builds/Button';

const required = value => {
  if (isEmpty(value)) {
    return (
      <small className="form-text text-danger">This field is required</small>
    );
  }
};

const email = value => {
  if (!isEmail(value)) {
    return (
      <small className="form-text text-danger">{`${value} is not a valid email.`}</small>
    );
  }
};

class Login extends Component {
  handleLogin = e => {
    e.preventDefault();
    this.props.handleLogin(this.form.getValues());
  };

  render() {
    const bind = statePath => ({
      name: statePath,
      ref: c => (this[statePath] = c)
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
              <Form
                onSubmit={this.handleLogin}
                ref={c => {
                  this.form = c;
                }}
              >
                <Input
                  {...bind('email')}
                  type="text"
                  placeholder="Email"
                  className="form-control form-control-lg"
                  validations={[required, email]}
                  iconClass="icon-envelope-o"
                />
                <Input
                  {...bind('password')}
                  type="text"
                  placeholder="Password"
                  className="form-control form-control-lg"
                  validations={[required]}
                  iconClass="icon-user-secret"
                />
                <Button className="btn btn-primary btn-lg btn-block">
                  Log In
                </Button>
                <p className="forget-pass">
                  Have you forgot your username or password ?
                </p>
              </Form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
