import React, { Component } from 'react';

export default class MainSideBar extends Component {
  render() {
    return (
      <div>
        <aside
          className="main-sidebar fixed offcanvas b-r sidebar-tabs"
          data-toggle="offcanvas"
        >
          <div className="sidebar">
            <div className="d-flex hv-100 align-items-stretch">
              <div className="indigo text-white">
                <div
                  className="nav mt-5 pt-5 flex-column nav-pills"
                  id="v-pills-tab"
                  role="tablist"
                  aria-orientation="vertical"
                >
                  <a
                    className="nav-link"
                    id="v-pills-home-tab"
                    data-toggle="pill"
                    href="#v-pills-home"
                    role="tab"
                    aria-controls="v-pills-home"
                    aria-selected="true"
                  >
                    <i className="icon-inbox2" />
                  </a>
                  <a
                    className="nav-link"
                    id="v-pills-profile-tab"
                    data-toggle="pill"
                    href="#v-pills-profile"
                    role="tab"
                    aria-controls="v-pills-profile"
                    aria-selected="false"
                  >
                    <i className="icon-add" />
                  </a>
                  <a className="nav-link blink skin_handle" href="#">
                    <i className="icon-lightbulb_outline" />
                  </a>
                  <a className="nav-link" id="v-pills-messages-tab" href="#">
                    <i className="icon-message" />
                  </a>
                  <a className="nav-link" id="v-pills-settings-tab" href="#">
                    <i className="icon-settings" />
                  </a>
                  <a>
                    <figure className="avatar">
                      <img src="assets/img/dummy/u3.png" />
                      <span className="avatar-badge online" />
                    </figure>
                  </a>
                </div>
              </div>
              <div className="tab-content flex-grow-1" id="v-pills-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="v-pills-home"
                  role="tabpanel"
                  aria-labelledby="v-pills-home-tab"
                >
                  <div className="relative brand-wrapper sticky b-b">
                    <div className="d-flex justify-content-between align-items-center p-3">
                      <div className="text-xs-center">
                        <span className="font-weight-lighter s-18">Menu</span>
                      </div>
                      <div className="badge badge-danger r-0">New Panel</div>
                    </div>
                  </div>
                  <ul className="sidebar-menu">
                    <li className="treeview">
                      <a href="index.html">
                        <i className="icon icon-sailing-boat-water s-24" />
                        <span>Dashboard</span>
                      </a>
                    </li>
                    <li className="treeview">
                      <a href="#">
                        <i className="icon icon icon-package s-24" />
                        <span>Products</span>
                        <span className="badge r-3 badge-primary pull-right">
                          4
                        </span>
                      </a>
                      <ul className="treeview-menu">
                        <li>
                          <a href="panel-page-products.html">
                            <i className="icon icon-circle-o" />
                            All Products
                          </a>
                        </li>
                        <li>
                          <a href="panel-page-products-create.html">
                            <i className="icon icon-add" />
                            Add New
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="treeview">
                      <a href="#">
                        <i className="icon icon-account_box s-24" />
                        Users
                        <i className="icon-angle-left pull-right" />
                      </a>
                      <ul className="treeview-menu">
                        <li>
                          <a href="panel-page-users.html">
                            <i className="icon icon-circle-o" />
                            All Users
                          </a>
                        </li>
                        <li>
                          <a href="panel-page-users-create.html">
                            <i className="icon icon-add" />
                            Add User
                          </a>
                        </li>
                        <li>
                          <a href="panel-page-profile.html">
                            <i className="icon icon-user" />
                            User Profile
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="treeview">
                      <a href="#">
                        <i className="icon icon-package s-24" />
                        <i className="icon-angle-left pull-right" />
                        <span>Inbox</span>
                      </a>
                      <ul className="treeview-menu">
                        <li>
                          <a href="inbox.html">
                            <i className="icon icon-circle-o" />
                            Inbox
                          </a>
                        </li>
                        <li>
                          <a href="inbox2.html">
                            <i className="icon icon-circle-o" />
                            Inbox 2
                          </a>
                        </li>
                        <li>
                          <a href="inbox-create.html">
                            <i className="icon icon-add" />
                            Compose
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="treeview">
                      <a href="#">
                        <i className="icon icon-package  s-24" />{' '}
                        <span>Apps</span>
                        <i className="icon-angle-left pull-right" />
                      </a>
                      <ul className="treeview-menu">
                        <li>
                          <a href="chat.html">
                            <i className="icon icon-circle-o" />
                            Chat
                          </a>
                        </li>
                        <li>
                          <a href="tasks.html">
                            <i className="icon icon-circle-o" />
                            Tasks / Todo
                          </a>
                        </li>
                        <li>
                          <a href="calendar.html">
                            <i className="icon icon-date_range" />
                            Calender
                          </a>
                        </li>
                        <li>
                          <a href="contacts.html">
                            <i className="icon icon-circle-o" />
                            Contacts
                          </a>
                        </li>
                        <li>
                          <a href="projects.html">
                            <i className="icon icon-circle-o" />
                            Projects
                          </a>
                        </li>
                        <li>
                          <a href="projects-list.html">
                            <i className="icon icon-circle-o" />
                            Projects List
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="treeview">
                      <a href="#">
                        <i className="icon icon-documents3 s-24" />
                        <span>Pages</span>
                        <i className="icon-angle-left pull-right" />
                      </a>
                      <ul className="treeview-menu">
                        <li>
                          <a href="#">
                            <i className="icon icon-documents3" />
                            Blank Pages
                            <i className="icon-angle-left pull-right" />
                          </a>
                          <ul className="treeview-menu">
                            <li>
                              <a href="panel-page-blank.html">
                                <i className="icon icon-document" />
                                Simple Blank
                              </a>
                            </li>
                            <li>
                              <a href="panel-page-blank-tabs.html">
                                <i className="icon icon-document" />
                                Tabs Blank
                                <i className="icon-angle-left pull-right" />
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="#">
                            <i className="icon icon-fingerprint text-green" />
                            Auth Pages
                            <i className="icon-angle-left pull-right" />
                          </a>
                          <ul className="treeview-menu">
                            <li>
                              <a href="login.html">
                                <i className="icon icon-document" />
                                Login Page 1
                              </a>
                            </li>
                            <li>
                              <a href="login-2.html">
                                <i className="icon icon-document" />
                                Login Page 2
                              </a>
                            </li>
                            <li>
                              <a href="login-3.html">
                                <i className="icon icon-document" />
                                Login Page 3
                              </a>
                            </li>
                            <li>
                              <a href="login-4.html">
                                <i className="icon icon-document" />
                                Login Page 4
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="#">
                            <i className="icon icon-bug text-red" />
                            Error Pages
                            <i className="icon-angle-left pull-right" />
                          </a>
                          <ul className="treeview-menu">
                            <li>
                              <a href="panel-page-404.html">
                                <i className="icon icon-document" />
                                404 Page
                              </a>
                            </li>
                            <li>
                              <a href="panel-page-500.html">
                                <i className="icon icon-document" />
                                500 Page
                                <i className="icon-angle-left pull-right" />
                              </a>
                            </li>
                            <li>
                              <a href="panel-page-error.html">
                                <i className="icon icon-document" />
                                420 Page
                                <i className="icon-angle-left pull-right" />
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="#">
                            <i className="icon icon-documents3" />
                            Other Pages
                            <i className="icon-angle-left pull-right" />
                          </a>
                          <ul className="treeview-menu">
                            <li>
                              <a href="panel-page-invoice.html">
                                <i className="icon icon-document" />
                                Invoice Page
                              </a>
                            </li>
                            <li>
                              <a href="panel-page-no-posts.html">
                                <i className="icon icon-document" />
                                No Post Page
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className="treeview">
                      <a href="#">
                        <i className="icon icon-goals-1  s-24" />
                        <span>Elements</span>
                        <i className="icon-angle-left pull-right" />
                      </a>
                      <ul className="treeview-menu">
                        <li>
                          <a href="panel-element-widgets.html">
                            <i className="icon icon-widgets amber-text s-14" />
                            <span>Widgets</span>
                          </a>
                        </li>
                        <li>
                          <a href="panel-element-counters.html">
                            <i className="icon icon-filter_9_plus amber-text s-14" />
                            <span>Counters</span>
                          </a>
                        </li>
                        <li>
                          <a href="panel-element-buttons.html">
                            <i className="icon icon-touch_app amber-text s-14" />
                            <span>Buttons</span>
                          </a>
                        </li>
                        <li>
                          <a href="panel-element-typography.html">
                            <i className="icon icon-text-width amber-text s-14" />
                            <span>Typography</span>
                          </a>
                        </li>
                        <li>
                          <a href="panel-element-tabels.html">
                            <i className="icon icon-table amber-text s-14" />
                            <span>Tables</span>
                          </a>
                        </li>
                        <li>
                          <a href="panel-element-alerts.html">
                            <i className="icon icon-exclamation-circle amber-text s-14" />
                            <span>Alerts</span>
                          </a>
                        </li>
                        <li>
                          <a href="panel-element-slider.html">
                            <i className="icon icon-view_carousel amber-text s-14" />
                            <span>Slider</span>
                          </a>
                        </li>
                        <li>
                          <a href="panel-element-tabs.html">
                            <i className="icon icon-folders2 amber-text s-14" />
                            <span>Tabs</span>
                          </a>
                        </li>
                        <li>
                          <a href="panel-element-progress-bars.html">
                            <i className="icon icon-folders2 amber-text s-14" />
                            <span>Progress Bars</span>
                          </a>
                        </li>
                        <li>
                          <a href="panel-element-badges.html">
                            <i className="icon icon-flag7 amber-text s-14" />
                            <span>Badges</span>
                          </a>
                        </li>
                        <li>
                          <a href="panel-element-preloaders.html">
                            <i className="icon icon-data_usage amber-text s-14" />
                            <span>Preloaders</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="treeview ">
                      <a href="#">
                        <i className="icon icon-wpforms s-24 " />
                        <span>Forms &amp; Plugins</span>
                        <i className="icon-angle-left pull-right" />
                      </a>
                      <ul className="treeview-menu">
                        <li>
                          <a href="panel-element-forms.html">
                            <i className="icon icon-wpforms light-green-text" />
                            Bootstrap Inputs
                          </a>
                        </li>
                        <li>
                          <a href="form-jquery-validations.html">
                            <i className="icon icon-note-important light-green-text" />
                            Form Validation (Jquery)
                          </a>
                        </li>
                        <li>
                          <a href="form-bootstrap-validations.html">
                            <i className="icon icon-note-important light-green-text" />
                            Form Validation (Bootstrap)
                          </a>
                        </li>
                        <li>
                          <a href="panel-element-editor.html">
                            <i className="icon icon-pen2 light-green-text" />
                            Editor
                          </a>
                        </li>
                        <li>
                          <a href="panel-element-toast.html">
                            <i className="icon icon-notifications_active light-green-text" />
                            Toasts
                          </a>
                        </li>
                        <li>
                          <a href="panel-element-stepper.html">
                            <i className="icon icon-burst_mode light-green-text" />
                            Stepper
                          </a>
                        </li>
                        <li>
                          <a href="panel-element-date-time-picker.html">
                            <i className="icon icon-date_range light-green-text" />
                            Date Time Picker
                          </a>
                        </li>
                        <li>
                          <a href="panel-element-color-picker.html">
                            <i className="icon icon-adjust light-green-text" />
                            Color Picker
                          </a>
                        </li>
                        <li>
                          <a href="panel-element-range-slider.html">
                            <i className="icon icon-space_bar light-green-text" />
                            Range Slider
                          </a>
                        </li>
                        <li>
                          <a href="panel-element-select2.html">
                            <i className="icon  icon-one-finger-click light-green-text" />
                            Select 2
                          </a>
                        </li>
                        <li>
                          <a href="panel-element-tags.html">
                            <i className="icon  icon-tags3 light-green-text" />
                            Tags
                          </a>
                        </li>
                        <li>
                          <a href="panel-element-data-tables.html">
                            <i className="icon icon-table light-green-text" />
                            Data Tables
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="treeview">
                      <a href="#">
                        <i className="icon icon-bar-chart2 s-24" />
                        <span>Charts</span>
                        <i className="icon-angle-left pull-right" />
                      </a>
                      <ul className="treeview-menu">
                        <li>
                          <a href="panel-element-charts-js.html">
                            <i className="icon icon-area-chart pink-text s-14" />
                            <span>Charts.Js</span>
                          </a>
                        </li>
                        <li>
                          <a href="panel-element-morris.html">
                            <i className="icon icon-bubble_chart pink-text s-14" />
                            Morris Charts
                          </a>
                        </li>
                        <li>
                          <a href="panel-element-echarts.html">
                            <i className="icon icon-bar-chart-o pink-text s-14" />
                            Echarts
                          </a>
                        </li>
                        <li>
                          <a href="panel-element-easy-pie-charts.html">
                            <i className="icon icon-area-chart pink-text s-14" />
                            Easy Pie Charts
                          </a>
                        </li>
                        <li>
                          <a href="panel-element-jqvmap.html">
                            <i className="icon icon-map pink-text s-14" />
                            Jqvmap
                          </a>
                        </li>
                        <li>
                          <a href="panel-element-sparklines.html">
                            <i className="icon icon-line-chart2 pink-text s-14" />
                            Sparklines
                          </a>
                        </li>
                        <li>
                          <a href="panel-element-float.html">
                            <i className="icon icon-pie-chart pink-text s-14" />
                            Float Charts
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="treeview">
                      <a href="#">
                        <i className="icon icon-dialpad s-24" />
                        <span>Extra</span>
                        <i className="icon-angle-left pull-right" />
                      </a>
                      <ul className="treeview-menu">
                        <li>
                          <a href="panel-element-letters.html">
                            <i className="icon icon-brightness_auto light-blue-text s-14" />
                            <span>Avatar Placeholders</span>
                          </a>
                        </li>
                        <li>
                          <a href="panel-element-icons.html">
                            <i className="icon icon-camera2 light-blue-text s-14" />
                            <span>Icons</span>
                          </a>
                        </li>
                        <li>
                          <a href="panel-element-colors.html">
                            <i className="icon icon-palette light-blue-text s-14" />
                            <span>Colors</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <div
                  className="tab-pane fade"
                  id="v-pills-profile"
                  role="tabpanel"
                  aria-labelledby="v-pills-profile-tab"
                >
                  <div className="relative brand-wrapper sticky b-b p-3">
                    <form>
                      <div className="form-group input-group-sm has-right-icon">
                        <input
                          className="form-control form-control-sm light r-30"
                          placeholder="Search"
                          type="text"
                        />
                        <i className="icon-search" />
                      </div>
                    </form>
                  </div>
                  <div className="sticky slimScroll">
                    <div className="p-2">
                      <ul className="list-unstyled">
                        {/* Alphabet with number of contacts */}
                        <li className="pt-3 pb-3 sticky p-3 b-b white">
                          <span className="badge r-3 badge-success">A</span>
                        </li>
                        {/* Single contact */}
                        <li className="my-1">
                          <div className="card no-b p-3">
                            <div>
                              <div className="image mr-3  float-left">
                                <img
                                  className="w-40px"
                                  src="assets/img/dummy/u1.png"
                                  alt="User Image"
                                />
                              </div>
                              <div>
                                <div>
                                  <strong>Alexander Pierce</strong>
                                </div>
                                <small> alexander@paper.com</small>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="my-1">
                          <div className="card no-b p-3">
                            <div>
                              <div className="image mr-3  float-left">
                                <img
                                  className="w-40px"
                                  src="assets/img/dummy/u6.png"
                                  alt="User Image"
                                />
                              </div>
                              <div>
                                <div>
                                  <strong>Alexander Pierce</strong>
                                </div>
                                <small> alexander@paper.com</small>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="my-1">
                          <div className="card no-b p-3">
                            <div>
                              <div className="image mr-3  float-left">
                                <img
                                  className="w-40px"
                                  src="assets/img/dummy/u6.png"
                                  alt="User Image"
                                />
                              </div>
                              <div>
                                <div>
                                  <strong>Alexander Pierce</strong>
                                </div>
                                <small> alexander@paper.com</small>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                      <ul className="list-unstyled">
                        <li className="pt-3 pb-3 sticky p-3 b-b white">
                          <span className="badge r-3 badge-danger">B</span>
                        </li>
                        <li className="my-1">
                          <div className="card no-b p-3">
                            <div>
                              <div className="image mr-3  float-left">
                                <img
                                  className="w-40px"
                                  src="assets/img/dummy/u2.png"
                                  alt="User Image"
                                />
                              </div>
                              <div>
                                <div>
                                  <strong>Alexander Pierce</strong>
                                </div>
                                <small> alexander@paper.com</small>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="my-1">
                          <div className="card no-b p-3">
                            <div>
                              <div className="image mr-3  float-left">
                                <img
                                  className="w-40px"
                                  src="assets/img/dummy/u3.png"
                                  alt="User Image"
                                />
                              </div>
                              <div>
                                <div>
                                  <strong>Alexander Pierce</strong>
                                </div>
                                <small> alexander@paper.com</small>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="my-1">
                          <div className="card no-b p-3">
                            <div>
                              <div className="image mr-3  float-left">
                                <img
                                  className="w-40px"
                                  src="assets/img/dummy/u4.png"
                                  alt="User Image"
                                />
                              </div>
                              <div>
                                <div>
                                  <strong>Alexander Pierce</strong>
                                </div>
                                <small> alexander@paper.com</small>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                      <ul className="list-unstyled">
                        {/* Alphabet with number of contacts */}
                        <li className="pt-3 pb-3 sticky p-3 b-b white">
                          <span className="badge r-3 badge-success gradient">
                            C
                          </span>
                        </li>
                        {/* Single contact */}
                        <li className="my-1">
                          <div className="card no-b p-3">
                            <div>
                              <div className="image mr-3  float-left">
                                <img
                                  className="w-40px"
                                  src="assets/img/dummy/u1.png"
                                  alt="User Image"
                                />
                              </div>
                              <div>
                                <div>
                                  <strong>Alexander Pierce</strong>
                                </div>
                                <small> alexander@paper.com</small>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="my-1">
                          <div className="card no-b p-3">
                            <div>
                              <div className="image mr-3  float-left">
                                <img
                                  className="w-40px"
                                  src="assets/img/dummy/u6.png"
                                  alt="User Image"
                                />
                              </div>
                              <div>
                                <div>
                                  <strong>Alexander Pierce</strong>
                                </div>
                                <small> alexander@paper.com</small>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="my-1">
                          <div className="card no-b p-3">
                            <div>
                              <div className="image mr-3  float-left">
                                <img
                                  className="w-40px"
                                  src="assets/img/dummy/u6.png"
                                  alt="User Image"
                                />
                              </div>
                              <div>
                                <div>
                                  <strong>Alexander Pierce</strong>
                                </div>
                                <small> alexander@paper.com</small>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="my-4">
                          <span className="badge r-3 badge-danger purple">
                            D
                          </span>
                        </li>
                        <li className="my-1">
                          <div className="card no-b p-3">
                            <div>
                              <div className="image mr-3  float-left">
                                <img
                                  className="w-40px"
                                  src="assets/img/dummy/u2.png"
                                  alt="User Image"
                                />
                              </div>
                              <div>
                                <div>
                                  <strong>Alexander Pierce</strong>
                                </div>
                                <small> alexander@paper.com</small>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="my-1">
                          <div className="card no-b p-3">
                            <div>
                              <div className="image mr-3  float-left">
                                <img
                                  className="w-40px"
                                  src="assets/img/dummy/u3.png"
                                  alt="User Image"
                                />
                              </div>
                              <div>
                                <div>
                                  <strong>Alexander Pierce</strong>
                                </div>
                                <small> alexander@paper.com</small>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="my-1">
                          <div className="card no-b p-3">
                            <div>
                              <div className="image mr-3  float-left">
                                <img
                                  className="w-40px"
                                  src="assets/img/dummy/u4.png"
                                  alt="User Image"
                                />
                              </div>
                              <div>
                                <div>
                                  <strong>Alexander Pierce</strong>
                                </div>
                                <small> alexander@paper.com</small>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>
    );
  }
}
