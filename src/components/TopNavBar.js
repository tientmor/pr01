import React, { Component } from "react";

export default class TopNavBar extends Component {
  render() {
    return (
      <div className="sticky">
        <div className="navbar navbar-expand d-flex justify-content-between bd-navbar white shadow">
          <div className="relative">
            <div className="d-flex">
              <div className="d-none d-md-block">
                <h1 className="nav-title">Profile</h1>
              </div>
            </div>
          </div>
          {/* Top Menu Start */}
          <div className="navbar-custom-menu">
            <ul className="nav navbar-nav">
              {/* Messages */}
              <li className="dropdown custom-dropdown messages-menu">
                <a href="#" className="nav-link" data-toggle="dropdown">
                  <i className="icon-envelope-o" />
                  <span className="badge badge-success badge-mini rounded-circle">
                    4
                  </span>
                </a>
                <ul className="dropdown-menu dropdown-menu-right">
                  <li>
                    {/* inner menu: contains the actual data */}
                    <ul className="menu pl-2 pr-2">
                      {/* start message */}
                      <li>
                        <a href="#">
                          <div className="avatar float-left">
                            <img src="assets/img/dummy/u4.png" alt />
                            <span className="avatar-badge busy" />
                          </div>
                          <h4>
                            Support Team
                            <small>
                              <i className="icon icon-clock-o" /> 5 mins
                            </small>
                          </h4>
                          <p>Why not buy a new awesome theme?</p>
                        </a>
                      </li>
                      {/* end message */}
                      {/* start message */}
                      <li>
                        <a href="#">
                          <div className="avatar float-left">
                            <img src="assets/img/dummy/u1.png" alt />
                            <span className="avatar-badge online" />
                          </div>
                          <h4>
                            Support Team
                            <small>
                              <i className="icon icon-clock-o" /> 5 mins
                            </small>
                          </h4>
                          <p>Why not buy a new awesome theme?</p>
                        </a>
                      </li>
                      {/* end message */}
                      {/* start message */}
                      <li>
                        <a href="#">
                          <div className="avatar float-left">
                            <img src="assets/img/dummy/u2.png" alt />
                            <span className="avatar-badge idle" />
                          </div>
                          <h4>
                            Support Team
                            <small>
                              <i className="icon icon-clock-o" /> 5 mins
                            </small>
                          </h4>
                          <p>Why not buy a new awesome theme?</p>
                        </a>
                      </li>
                      {/* end message */}
                      {/* start message */}
                      <li>
                        <a href="#">
                          <div className="avatar float-left">
                            <img src="assets/img/dummy/u3.png" alt />
                            <span className="avatar-badge busy" />
                          </div>
                          <h4>
                            Support Team
                            <small>
                              <i className="icon icon-clock-o" /> 5 mins
                            </small>
                          </h4>
                          <p>Why not buy a new awesome theme?</p>
                        </a>
                      </li>
                      {/* end message */}
                    </ul>
                  </li>
                  <li className="footer s-12 p-2 text-center">
                    <a href="#">See All Messages</a>
                  </li>
                </ul>
              </li>
              {/* Notifications */}
              <li className="dropdown custom-dropdown notifications-menu">
                <a
                  href="#"
                  className=" nav-link"
                  data-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="icon-notifications_none" />
                  <span className="badge badge-danger badge-mini rounded-circle">
                    4
                  </span>
                </a>
                <ul className="dropdown-menu dropdown-menu-right">
                  <li className="header">You have 10 notifications</li>
                  <li>
                    {/* inner menu: contains the actual data */}
                    <ul className="menu">
                      <li>
                        <a href="#">
                          <i className="icon icon-data_usage text-success" /> 5
                          new members joined today
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="icon icon-data_usage text-danger" /> 5
                          new members joined today
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="icon icon-data_usage text-yellow" /> 5
                          new members joined today
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="footer p-2 text-center">
                    <a href="#">View all</a>
                  </li>
                </ul>
              </li>
              <li>
                <a
                  className="nav-link "
                  data-toggle="collapse"
                  data-target="#navbarToggleExternalContent"
                  aria-controls="navbarToggleExternalContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <i className="icon-search3" />
                </a>
              </li>
              {/* Right Sidebar Toggle Button */}
              <li>
                <a className="nav-link ml-2" data-toggle="control-sidebar">
                  <i className="icon-format_align_right" />
                </a>
              </li>
              {/* User Account */}
              <li className="dropdown custom-dropdown user user-menu ">
                <a href="#" className="nav-link" data-toggle="dropdown">
                  <img
                    src="assets/img/dummy/u8.png"
                    className="user-image"
                    alt="User Image"
                  />
                  <i className="icon-more_vert " />
                </a>
                <div className="dropdown-menu p-4 dropdown-menu-right">
                  <div className="row box justify-content-between my-4">
                    <div className="col">
                      <a href="#">
                        <i className="icon-apps purple lighten-2 avatar  r-5" />
                        <div className="pt-1">Apps</div>
                      </a>
                    </div>
                    <div className="col">
                      <a href="#">
                        <i className="icon-beach_access pink lighten-1 avatar  r-5" />
                        <div className="pt-1">Profile</div>
                      </a>
                    </div>
                    <div className="col">
                      <a href="#">
                        <i className="icon-perm_data_setting indigo lighten-2 avatar  r-5" />
                        <div className="pt-1">Settings</div>
                      </a>
                    </div>
                  </div>
                  <div className="row box justify-content-between my-4">
                    <div className="col">
                      <a href="#">
                        <i className="icon-star light-green lighten-1 avatar  r-5" />
                        <div className="pt-1">Favourites</div>
                      </a>
                    </div>
                    <div className="col">
                      <a href="#">
                        <i className="icon-save2 orange accent-1 avatar  r-5" />
                        <div className="pt-1">Saved</div>
                      </a>
                    </div>
                    <div className="col">
                      <a href="#">
                        <i className="icon-perm_data_setting grey darken-3 avatar  r-5" />
                        <div className="pt-1">Settings</div>
                      </a>
                    </div>
                  </div>
                  <hr />
                  <div className="row box justify-content-between my-4">
                    <div className="col">
                      <a href="#">
                        <i className="icon-apps purple lighten-2 avatar  r-5" />
                        <div className="pt-1">Apps</div>
                      </a>
                    </div>
                    <div className="col">
                      <a href="#">
                        <i className="icon-beach_access pink lighten-1 avatar  r-5" />
                        <div className="pt-1">Profile</div>
                      </a>
                    </div>
                    <div className="col">
                      <a href="#">
                        <i className="icon-perm_data_setting indigo lighten-2 avatar  r-5" />
                        <div className="pt-1">Settings</div>
                      </a>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
