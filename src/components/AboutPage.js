import React from "react";
import "../styles/about-page.css";

// Since this component is simple and static, there's no parent container for it.
const AboutPage = () => {
  return (
      <div className="row">
        <div className="page parallel">
          <div className="d-flex row">
            <div className="col-md-3 white">
              <div className="p-5 mt-5">
                <img src="assets/img/basic/logo.png" alt="" />
              </div>
              <div className="p-5">
                <h2>Welcome Back</h2>
                <p>
                  Hey Soldier welcome back signin now there is lot of new stuff
                  waiting for
                </p>
                <form action="index.html">
                  <div className="form-group has-icon">
                    <i className="icon-envelope-o" />
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Email Address"
                    />
                  </div>
                  <div className="form-group has-icon">
                    <i className="icon-user-secret" />
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Password"
                    />
                  </div>
                  <input
                    type="submit"
                    className="btn btn-primary btn-lg btn-block"
                    value="Log In"
                  />
                </form>
              </div>
            </div>
            <div
              className="col-md-9  height-full blue accent-3 align-self-center text-center d-none d-md-block"
              data-bg-repeat="false"
              data-bg-possition="center"
            />
          </div>
        </div>
      </div>
  );
};

export default AboutPage;
