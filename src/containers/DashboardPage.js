import React, { Component } from "react";
import {connect} from 'react-redux';

import MainSideBar from './../components/common/MainSideBar';
import TopNavBar from './../components/common/TopNavBar';

class DashboardPage extends Component {
  render() {
    return (
      <div className="dashboard-page">
        <MainSideBar />
        <div className="has-sidebar-left">
          <div className="pos-f-t">
            <div className="collapse" id="navbarToggleExternalContent">
              <div className="bg-dark pt-2 pb-2 pl-4 pr-2">
                <div className="search-bar">
                  <input
                    className="transparent s-24 text-white b-0 font-weight-lighter w-128 height-50"
                    type="text"
                    placeholder="start typing..."
                  />
                </div>
                <a
                  href="#"
                  data-toggle="collapse"
                  data-target="#navbarToggleExternalContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                  className="paper-nav-toggle paper-nav-white active "
                >
                  <i />
                </a>
              </div>
            </div>
          </div>
        </div>
        <a
          href="#"
          data-toggle="push-menu"
          className="paper-nav-toggle left ml-2 fixed"
        >
          <i />
        </a>
        <div className="has-sidebar-left has-sidebar-tabs">
          <TopNavBar />
          <header className="white pt-3 relative shadow">
            <div className="container-fluid">
              <div className="row p-t-b-10 ">
                <div className="col">
                  <div className="pb-3">
                    <div className="image mr-3  float-left">
                      <img
                        className="user_avatar no-b no-p"
                        src="assets/img/dummy/u6.png"
                        alt="User Image"
                      />
                    </div>
                    <div>
                      <h6 className="p-t-10">Alexander Pierce</h6>
                      alexander@paper.com
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <ul
                  className="nav nav-material responsive-tab"
                  id="v-pills-tab"
                  role="tablist"
                >
                  <li>
                    <a
                      className="nav-link active"
                      id="v-pills-tab1-tab"
                      data-toggle="pill"
                      href="#v-pills-tab1"
                      role="tab"
                      aria-controls="v-pills-tab1"
                    >
                      <i className="icon icon-home2" />
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      className="nav-link"
                      id="v-pills-payments-tab"
                      data-toggle="pill"
                      href="#v-pills-payments"
                      role="tab"
                      aria-controls="v-pills-payments"
                      aria-selected="false"
                    >
                      <i className="icon icon-money-1" />
                      Payments
                    </a>
                  </li>
                  <li>
                    <a
                      className="nav-link"
                      id="v-pills-timeline-tab"
                      data-toggle="pill"
                      href="#v-pills-timeline"
                      role="tab"
                      aria-controls="v-pills-timeline"
                      aria-selected="false"
                    >
                      <i className="icon icon-cog" />
                      Timeline
                    </a>
                  </li>
                  <li>
                    <a
                      className="nav-link"
                      id="v-pills-settings-tab"
                      data-toggle="pill"
                      href="#v-pills-settings"
                      role="tab"
                      aria-controls="v-pills-settings"
                      aria-selected="false"
                    >
                      <i className="icon icon-cog" />
                      Edit Profile
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </header>
          <div className="container-fluid animatedParent animateOnce my-3">
            Lorem ipsum
          </div>
        </div>
        <div className="control-sidebar-bg shadow white fixed" />
      </div>
    );
  }
}

export default connect(null,null)(DashboardPage);
