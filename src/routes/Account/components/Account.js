import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

import UserImage from '../assets/img5.jpg';

class Account extends React.Component {
  static propTypes = {
    account: PropTypes.object,
    submit: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);

    this.state = {
      firstName: this.props.state.fname,
      lastName: this.props.state.lname,
      email: this.props.state.email,
      city: this.props.state.city,
      country: this.props.state.country,
      postCode: this.props.state.postCode,
    };

    this.setName = this.setName.bind(this);
    this.setIsKeepSignedIn = this.setIsKeepSignedIn.bind(this);
    this.setPassword = this.setPassword.bind(this);

    this.cancel = this.cancel.bind(this);
    this.submit = this.submit.bind(this);
  }

  componentDidMount() {
    // Form Select
    $.HSCore.components.HSSelect.init('.js-custom-select');
  }

  setName(event) {
    this.setState({ name: event.target.value });
  }

  setIsKeepSignedIn(event) {
    this.setState({ isKeepSignedIn: event.target.checked });
  }

  setPassword(event) {
    this.setState({ password: event.target.value });
  }

  cancel() {
    console.log('cancel');
  }

  submit() {
    console.log('Save Changes');
    //this.props.submit(this.state);
  }

  render () {
    return (
      <div>
        <header id="js-header" className="u-header u-header--sticky-top u-header--toggle-section u-header--change-appearance"
                data-header-fix-moment="300">
          <div className="u-header__section u-header__section--dark g-bg-black g-transition-0_3 g-py-10"
              data-header-fix-moment-exclude="g-py-10"
              data-header-fix-moment-classes="g-py-0">
            <nav className="navbar navbar-toggleable-md">
              <div className="container">
                <button className="navbar-toggler navbar-toggler-right btn g-line-height-1 g-brd-none g-pa-0 g-pos-abs g-right-0" type="button"
                        aria-label="Toggle navigation"
                        aria-expanded="false"
                        aria-controls="navBar"
                        data-toggle="collapse"
                        data-target="#navBar"
                >
                  <span className="hamburger hamburger--slider">
                    <span className="hamburger-box">
                      <span className="hamburger-inner"></span>
                    </span>
                  </span>
                </button>

                <a href="/" className="navbar-brand">
                  Stylist advised me <span className="sr-only">(current)</span>
                </a>

                <div className="collapse navbar-collapse align-items-center flex-sm-row g-pt-10 g-pt-5--lg" id="navBar">
                  <ul className="navbar-nav text-uppercase g-font-weight-600 ml-auto">                    
                    <li className="nav-item g-mx-120--lg"></li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </header>

        <section className="g-my-100 g-mb-100">
          <div className="container">
            <div className="row">
              {/* <!-- Profile Sidebar --> */}
              <div className="col-lg-3 g-mb-50 g-mb-0--lg">
                {/* <!-- User Image --> */}
                <div className="u-block-hover g-pos-rel">
                  <figure>
                    <img className="img-fluid w-100 u-block-hover__main--zoom-v1" src={UserImage} alt="Image Description" />
                  </figure>                

                  {/* <!-- User Info --> */}
                  <span className="g-pos-abs g-top-20 g-left-0">
                    <a className="btn btn-sm u-btn-primary rounded-0" href="#">{this.state.firstName} {this.state.lastName}</a>
                    <small className="d-block g-bg-black g-color-white g-pa-5">Project Manager</small>
                  </span>
                  {/* <!-- End User Info --> */}
                </div>
                {/* <!-- User Image --> */}
              </div>
              {/* <!-- End Profile Sidebar --> */}

              {/* <!-- Profle Content --> */}
              <div className="col-lg-9">
                {/* <!-- Nav tabs --> */}
                <ul className="nav nav-justified u-nav-v1-1 u-nav-primary g-brd-bottom--md g-brd-bottom-2 g-brd-primary g-mb-20" role="tablist" data-target="nav-1-1-default-hor-left-underline" data-tabs-mobile-type="slide-up-down" data-btn-classes="btn btn-md btn-block rounded-0 u-btn-outline-primary g-mb-20">
                  <li className="nav-item">
                    <a className="nav-link g-py-10 active" data-toggle="tab" href="#nav-1-1-default-hor-left-underline--1" role="tab">Edit Profile</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link g-py-10" data-toggle="tab" href="#nav-1-1-default-hor-left-underline--2" role="tab">Security Settings</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link g-py-10" data-toggle="tab" href="#nav-1-1-default-hor-left-underline--3" role="tab">Payment Options</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link g-py-10" data-toggle="tab" href="#nav-1-1-default-hor-left-underline--4" role="tab">Notification Settings</a>
                  </li>
                </ul>
                {/* <!-- End Nav tabs --> */}

                {/* <!-- Tab panes --> */}
                <div id="nav-1-1-default-hor-left-underline" className="tab-content">
                  {/* <!-- Edit Profile --> */}
                  <div className="tab-pane fade show active" id="nav-1-1-default-hor-left-underline--1" role="tabpanel">
                    <h2 className="h4 g-font-weight-300">Manage your Name, ID and Email Addresses</h2>
                    <p>Below are name, email addresse, contacts and more on file for your account.</p>

                    <ul className="list-unstyled g-mb-30">
                      {/* <!-- First Name --> */}
                      <li className="d-flex align-items-center justify-content-between g-brd-bottom g-brd-gray-light-v4 g-py-15">
                        <div className="g-pr-10">
                          <strong className="d-block d-md-inline-block g-color-gray-dark-v2 g-width-200 g-pr-10">First Name</strong>
                          <span className="align-top">{this.state.firstName}</span>
                        </div>
                        <span>
                          <i className="icon-pencil g-color-gray-dark-v5 g-color-primary--hover g-cursor-pointer g-pos-rel g-top-1"></i>
                        </span>
                      </li>
                      {/* <!-- End First Name --> */}

                      {/* <!-- Last Name --> */}
                      <li className="d-flex align-items-center justify-content-between g-brd-bottom g-brd-gray-light-v4 g-py-15">
                        <div className="g-pr-10">
                          <strong className="d-block d-md-inline-block g-color-gray-dark-v2 g-width-200 g-pr-10">Last Name</strong>
                          <span className="align-top">{this.state.lastName}</span>
                        </div>
                        <span>
                          <i className="icon-pencil g-color-gray-dark-v5 g-color-primary--hover g-cursor-pointer g-pos-rel g-top-1"></i>
                        </span>
                      </li>
                      {/* <!-- End Last Name --> */}

                      {/* <!-- Your ID --> */}
                      <li className="d-flex align-items-center justify-content-between g-brd-bottom g-brd-gray-light-v4 g-py-15">
                        <div className="g-pr-10">
                          <strong className="d-block d-md-inline-block g-color-gray-dark-v2 g-width-200 g-pr-10">Your ID</strong>
                          <span className="align-top">FKJ-032440</span>
                        </div>
                        <span>
                          <i className="icon-pencil g-color-gray-dark-v5 g-color-primary--hover g-cursor-pointer g-pos-rel g-top-1"></i>
                        </span>
                      </li>
                      {/* <!-- End Your ID --> */}

                      {/* <!-- Company Name --> */}
                      <li className="d-flex align-items-center justify-content-between g-brd-bottom g-brd-gray-light-v4 g-py-15">
                        <div className="g-pr-10">
                          <strong className="d-block d-md-inline-block g-color-gray-dark-v2 g-width-200 g-pr-10">Company name</strong>
                          <span className="align-top">Htmlstream</span>
                        </div>
                        <span>
                          <i className="icon-pencil g-color-gray-dark-v5 g-color-primary--hover g-cursor-pointer g-pos-rel g-top-1"></i>
                        </span>
                      </li>
                      {/* <!-- End Company Name --> */}

                      {/* <!-- Position --> */}
                      <li className="d-flex align-items-center justify-content-between g-brd-bottom g-brd-gray-light-v4 g-py-15">
                        <div className="g-pr-10">
                          <strong className="d-block d-md-inline-block g-color-gray-dark-v2 g-width-200 g-pr-10">Position</strong>
                          <span className="align-top">Project Manager</span>
                        </div>
                        <span>
                          <i className="icon-pencil g-color-gray-dark-v5 g-color-primary--hover g-cursor-pointer g-pos-rel g-top-1"></i>
                        </span>
                      </li>
                      {/* <!-- End Position --> */}

                      {/* <!-- Primary Email Address --> */}
                      <li className="d-flex align-items-center justify-content-between g-brd-bottom g-brd-gray-light-v4 g-py-15">
                        <div className="g-pr-10">
                          <strong className="d-block d-md-inline-block g-color-gray-dark-v2 g-width-200 g-pr-10">Primary email address</strong>
                          <span className="align-top">{this.state.email}</span>
                        </div>
                        <span>
                          <i className="icon-pencil g-color-gray-dark-v5 g-color-primary--hover g-cursor-pointer g-pos-rel g-top-1"></i>
                        </span>
                      </li>
                      {/* <!-- End Primary Email Address --> */}

                      {/* <!-- Linked Account --> */}
                      <li className="d-flex align-items-center justify-content-between g-brd-bottom g-brd-gray-light-v4 g-py-15">
                        <div className="g-pr-10">
                          <strong className="d-block d-md-inline-block g-color-gray-dark-v2 g-width-200 g-pr-10">Linked account</strong>
                          <span className="align-top">Facebook</span>
                        </div>
                        <span>
                          <i className="icon-pencil g-color-gray-dark-v5 g-color-primary--hover g-cursor-pointer g-pos-rel g-top-1"></i>
                        </span>
                      </li>
                      {/* <!-- End Linked Account --> */}

                      {/* <!-- Website --> */}
                      <li className="d-flex align-items-center justify-content-between g-brd-bottom g-brd-gray-light-v4 g-py-15">
                        <div className="g-pr-10">
                          <strong className="d-block d-md-inline-block g-color-gray-dark-v2 g-width-200 g-pr-10">Website</strong>
                          <span className="align-top">https://htmlstream.com</span>
                        </div>
                        <span>
                          <i className="icon-pencil g-color-gray-dark-v5 g-color-primary--hover g-cursor-pointer g-pos-rel g-top-1"></i>
                        </span>
                      </li>
                      {/* <!-- End Website --> */}

                      {/* <!-- Phone Number --> */}
                      <li className="d-flex align-items-center justify-content-between g-brd-bottom g-brd-gray-light-v4 g-py-15">
                        <div className="g-pr-10">
                          <strong className="d-block d-md-inline-block g-color-gray-dark-v2 g-width-200 g-pr-10">Phone number</strong>
                          <span className="align-top">(+123) 456 7890</span>
                        </div>
                        <span>
                          <i className="icon-pencil g-color-gray-dark-v5 g-color-primary--hover g-cursor-pointer g-pos-rel g-top-1"></i>
                        </span>
                      </li>
                      {/* <!-- End Phone Number --> */}

                      {/* <!-- Office Number --> */}
                      <li className="d-flex align-items-center justify-content-between g-brd-bottom g-brd-gray-light-v4 g-py-15">
                        <div className="g-pr-10">
                          <strong className="d-block d-md-inline-block g-color-gray-dark-v2 g-width-200 g-pr-10">Office number</strong>
                          <span className="align-top">(+123) 456 7891</span>
                        </div>
                        <span>
                          <i className="icon-pencil g-color-gray-dark-v5 g-color-primary--hover g-cursor-pointer g-pos-rel g-top-1"></i>
                        </span>
                      </li>
                      {/* <!-- End Office Number --> */}

                      {/* <!-- Address --> */}
                      <li className="d-flex align-items-center justify-content-between g-brd-bottom g-brd-gray-light-v4 g-py-15">
                        <div className="g-pr-10">
                          <strong className="d-block d-md-inline-block g-color-gray-dark-v2 g-width-200 g-pr-10">Address</strong>
                          <span className="align-top">795 Folsom Ave, Suite 600, San Francisco CA, US </span>
                        </div>
                        <span>
                          <i className="icon-pencil g-color-gray-dark-v5 g-color-primary--hover g-cursor-pointer g-pos-rel g-top-1"></i>
                        </span>
                      </li>
                      {/* <!-- End Address --> */}
                    </ul>

                    <div className="text-sm-right">
                      <a className="btn u-btn-darkgray rounded-0 g-py-12 g-px-25 g-mr-10" href="#">Cancel</a>
                      <a className="btn u-btn-primary rounded-0 g-py-12 g-px-25" href="#">Save Changes</a>
                    </div>
                  </div>
                  {/* <!-- End Edit Profile --> */}

                  {/* <!-- Security Settings --> */}
                  <div className="tab-pane fade" id="nav-1-1-default-hor-left-underline--2" role="tabpanel">
                    <h2 className="h4 g-font-weight-300">Security Settings</h2>
                    <p className="g-mb-25">Reset your password, change verifications and so on.</p>

                    <form>
                      {/* <!-- Current Password --> */}
                      <div className="form-group row g-mb-25">
                        <label className="col-sm-3 col-form-label g-color-gray-dark-v2 g-font-weight-700 text-sm-right g-mb-10">Current password</label>
                        <div className="col-sm-9">
                          <div className="input-group g-brd-primary--focus">
                            <input className="form-control form-control-md border-right-0 rounded-0 g-py-13 pr-0" type="password" placeholder="Current password" />
                            <div className="input-group-addon d-flex align-items-center g-bg-white g-color-gray-light-v1 rounded-0">
                              <i className="icon-lock"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* <!-- End Current Password --> */}

                      {/* <!-- New Password --> */}
                      <div className="form-group row g-mb-25">
                        <label className="col-sm-3 col-form-label g-color-gray-dark-v2 g-font-weight-700 text-sm-right g-mb-10">New password</label>
                        <div className="col-sm-9">
                          <div className="input-group g-brd-primary--focus">
                            <input className="form-control form-control-md border-right-0 rounded-0 g-py-13 pr-0" type="password" placeholder="New password" />
                            <div className="input-group-addon d-flex align-items-center g-bg-white g-color-gray-light-v1 rounded-0">
                              <i className="icon-lock"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* <!-- End New Password --> */}

                      {/* <!-- Verify Password --> */}
                      <div className="form-group row g-mb-25">
                        <label className="col-sm-3 col-form-label g-color-gray-dark-v2 g-font-weight-700 text-sm-right g-mb-10">Verify password</label>
                        <div className="col-sm-9">
                          <div className="input-group g-brd-primary--focus">
                            <input className="form-control form-control-md border-right-0 rounded-0 g-py-13 pr-0" type="password" placeholder="Verify password" />
                            <div className="input-group-addon d-flex align-items-center g-bg-white g-color-gray-light-v1 rounded-0">
                              <i className="icon-lock"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* <!-- End Verify Password --> */}

                      {/* <!-- Login Verification --> */}
                      <div className="form-group row g-mb-25">
                        <label className="col-sm-3 col-form-label g-color-gray-dark-v2 g-font-weight-700 text-sm-right g-mb-10">Login verification</label>
                        <div className="col-sm-9">
                          <label className="form-check-inline u-check g-pl-25">
                            <input className="hidden-xs-up g-pos-abs g-top-0 g-left-0" type="checkbox" />
                            <div className="u-check-icon-checkbox-v4 g-absolute-centered--y g-left-0">
                              <i className="fa" data-check-icon=""></i>
                            </div>
                            Verify login requests
                          </label>
                          <small className="d-block text-muted">You need to add a phone to your profile account to enable this feature.</small>
                        </div>
                      </div>
                      {/* <!-- End Login Verification --> */}

                      {/* <!-- Password Reset --> */}
                      <div className="form-group row g-mb-25">
                        <label className="col-sm-3 col-form-label g-color-gray-dark-v2 g-font-weight-700 text-sm-right g-mb-10">Password reset</label>
                        <div className="col-sm-9">
                          <label className="form-check-inline u-check g-pl-25">
                            <input className="hidden-xs-up g-pos-abs g-top-0 g-left-0" type="checkbox" />
                            <div className="u-check-icon-checkbox-v4 g-absolute-centered--y g-left-0">
                              <i className="fa" data-check-icon=""></i>
                            </div>
                            Require personal information to reset my password
                          </label>
                          <small className="d-block text-muted">When you check this box, you will be required to verify additional information before you can request a password reset with just your email address.</small>
                        </div>
                      </div>
                      {/* <!-- End Password Reset --> */}

                      {/* <!-- Save Password --> */}
                      <div className="form-group row g-mb-25">
                        <label className="col-sm-3 col-form-label g-color-gray-dark-v2 g-font-weight-700 text-sm-right g-mb-10">Save password</label>
                        <div className="col-sm-9">
                          <label className="form-check-inline u-check mx-0">
                            <input className="hidden-xs-up g-pos-abs g-top-0 g-right-0" name="savePassword" type="checkbox" />
                            <div className="u-check-icon-radio-v7">
                              <i className="d-inline-block"></i>
                            </div>
                          </label>
                          <small className="d-block text-muted">When you check this box, you will be saved automatically login to your profile account. Also, you will be always logged in all our services.</small>
                        </div>
                      </div>
                      {/* <!-- End Save Password --> */}

                      <hr className="g-brd-gray-light-v4 g-my-25" />

                      <div className="text-sm-right">
                        <a className="btn u-btn-darkgray rounded-0 g-py-12 g-px-25 g-mr-10" href="#">Cancel</a>
                        <a className="btn u-btn-primary rounded-0 g-py-12 g-px-25" href="#">Save Changes</a>
                      </div>
                    </form>
                  </div>
                  {/* <!-- End Security Settings --> */}

                  {/* <!-- Payment Options --> */}
                  <div className="tab-pane fade" id="nav-1-1-default-hor-left-underline--3" role="tabpanel">
                    <h2 className="h4 g-font-weight-300">Manage your Payment Settings</h2>
                    <p className="g-mb-25">Below are the payment options for your account.</p>

                    <form>
                      {/* <!-- Payment Options --> */}
                      <div className="row">
                        {/* <!-- Paypal --> */}
                        <div className="col-md-12">
                          <label className="u-check w-100 g-mb-25">
                            <strong className="d-block g-color-gray-dark-v2 g-font-weight-700 g-mb-10">Paypal</strong>
                            <input className="hidden-xs-up g-pos-abs g-top-10 g-right-10" type="radio" name="profilePayments" />

                            <div className="g-brd-primary--checked g-bg-primary-opacity-0_2--checked g-brd-around g-brd-gray-light-v2 g-rounded-5">
                              <div className="media g-pa-12">
                                <div className="media-body align-self-center g-color-darkblue">
                                  <i className="fa fa-paypal g-font-size-30 align-self-center mx-auto"></i>
                                </div>

                                <div className="d-flex align-self-center g-width-20 g-ml-15">
                                  <div className="u-check-icon-radio-v5 g-pos-rel g-width-20 g-height-20"><i></i></div>
                                </div>
                              </div>
                            </div>
                          </label>
                        </div>
                        {/* <!-- End Paypal --> */}                                              
                      </div>
                      {/* <!-- End Payment Options --> */}

                      {/* <!-- Card Expiration Dates and CVV Code --> */}
                      <div className="row">
                        {/* <!-- Expiration Month --> */}
                        <div className="col-md-4">
                          <label className="g-color-gray-dark-v2 g-font-weight-700 g-mb-10" htmlFor="inputGroup1_1">Expiration month</label>
                          <select defaultValue="0" className="js-custom-select u-select-v1 g-brd-gray-light-v2 g-color-gray-dark-v5 w-100 g-pt-11 g-pb-10" data-placeholder="Month" data-open-icon="fa fa-angle-down" data-close-icon="fa fa-angle-up">
                            <option value="0">Month</option>
                            <option value="1">January</option>
                            <option value="1">February</option>
                            <option value="3">March</option>
                            <option value="4">April</option>
                            <option value="5">May</option>
                            <option value="6">June</option>
                            <option value="7">July</option>
                            <option value="8">August</option>
                            <option value="9">September</option>
                            <option value="10">October</option>
                            <option value="11">November</option>
                            <option value="12">December</option>
                          </select>
                        </div>
                        {/* <!-- End Expiration Month --> */}

                        {/* <!-- Expiration Year --> */}
                        <div className="col-md-4">
                          <div className="form-group g-mb-20">
                            <label className="g-color-gray-dark-v2 g-font-weight-700 g-mb-10" htmlFor="inputGroup1_1">Expiration year</label>
                            <div className="input-group g-brd-primary--focus">
                              <input className="form-control form-control-md border-right-0 rounded-0 g-py-13 pr-0" type="text" placeholder="2021" />
                              <div className="input-group-addon d-flex align-items-center g-bg-white g-color-gray-light-v1 rounded-0">
                                <i className="icon-calendar"></i>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* <!-- End Expiration Year --> */}

                        {/* <!-- CVV Code --> */}
                        <div className="col-md-4">
                          <div className="form-group g-mb-20">
                            <label className="g-color-gray-dark-v2 g-font-weight-700 g-mb-10" htmlFor="inputGroup1_1">CVV code</label>
                            <div className="input-group g-brd-primary--focus">
                              <input className="form-control form-control-md border-right-0 rounded-0 g-py-13 pr-0" type="text" placeholder="2021" />
                              <div className="input-group-addon d-flex align-items-center g-bg-white g-color-gray-light-v1 rounded-0">
                                <i className="icon-lock"></i>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* <!-- End CVV Code --> */}
                      </div>
                      {/* <!-- End Card Expiration Dates and CVV Code --> */}

                      {/* <!-- Billing Address --> */}
                      <div className="form-group">
                        <label className="d-block g-color-gray-dark-v2 g-font-weight-700 1text-sm-right g-mb-10">Billing address</label>
                        <label className="u-check g-pl-25 mb-0">
                          <input className="hidden-xs-up g-pos-abs g-top-0 g-left-0" type="checkbox" />
                          <div className="u-check-icon-checkbox-v4 g-absolute-centered--y g-left-0">
                            <i className="fa" data-check-icon=""></i>
                          </div>
                          Same as shipping address?
                        </label>
                      </div>
                      {/* <!-- End Billing Address --> */}

                      <hr className="g-brd-gray-light-v4 g-my-25" />

                      <div className="text-sm-right">
                        <a className="btn u-btn-darkgray rounded-0 g-py-12 g-px-25 g-mr-10" href="#">Cancel</a>
                        <a className="btn u-btn-primary rounded-0 g-py-12 g-px-25" href="#">Save Changes</a>
                      </div>
                    </form>
                  </div>
                  {/* <!-- End Payment Options --> */}

                  {/* <!-- Notification Settings --> */}
                  <div className="tab-pane fade" id="nav-1-1-default-hor-left-underline--4" role="tabpanel">
                    <h2 className="h4 g-font-weight-300">Manage your Notifications</h2>
                    <p className="g-mb-25">Below are the notifications you may manage.</p>

                    <form>
                      {/* <!-- Email Notification --> */}
                      <div className="form-group">
                        <label className="d-flex align-items-center justify-content-between">
                          <span>Email notification</span>
                          <div className="u-check">
                            <input className="hidden-xs-up g-pos-abs g-top-0 g-right-0" name="emailNotification" type="checkbox" defaultChecked />
                            <div className="u-check-icon-radio-v7">
                              <i className="d-inline-block"></i>
                            </div>
                          </div>
                        </label>
                      </div>
                      {/* <!-- End Email Notification --> */}

                      <hr className="g-brd-gray-light-v4 g-my-20" />

                      {/* <!-- Comments Notification --> */}
                      <div className="form-group">
                        <label className="d-flex align-items-center justify-content-between">
                          <span>Send me email notification when a user comments on my blog</span>
                          <div className="u-check">
                            <input className="hidden-xs-up g-pos-abs g-top-0 g-right-0" name="commentNotification" type="checkbox" />
                            <div className="u-check-icon-radio-v7">
                              <i className="d-inline-block"></i>
                            </div>
                          </div>
                        </label>
                      </div>
                      {/* <!-- End Comments Notification --> */}

                      <hr className="g-brd-gray-light-v4 g-my-20" />

                      {/* <!-- Update Notification --> */}
                      <div className="form-group">
                        <label className="d-flex align-items-center justify-content-between">
                          <span>Send me email notification for the latest update</span>
                          <div className="u-check">
                            <input className="hidden-xs-up g-pos-abs g-top-0 g-right-0" name="updateNotification" type="checkbox" defaultChecked />
                            <div className="u-check-icon-radio-v7">
                              <i className="d-inline-block"></i>
                            </div>
                          </div>
                        </label>
                      </div>
                      {/* <!-- End Update Notification --> */}

                      <hr className="g-brd-gray-light-v4 g-my-25" />

                      {/* <!-- Message Notification --> */}
                      <div className="form-group">
                        <label className="d-flex align-items-center justify-content-between">
                          <span>Send me email notification when a user sends me message</span>
                          <div className="u-check">
                            <input className="hidden-xs-up g-pos-abs g-top-0 g-right-0" name="messageNotification" type="checkbox" defaultChecked />
                            <div className="u-check-icon-radio-v7">
                              <i className="d-inline-block"></i>
                            </div>
                          </div>
                        </label>
                      </div>
                      {/* <!-- End Message Notification --> */}

                      <hr className="g-brd-gray-light-v4 g-my-25" />

                      {/* <!-- Newsletter Notification --> */}
                      <div className="form-group">
                        <label className="d-flex align-items-center justify-content-between">
                          <span>Receive our monthly newsletter</span>
                          <div className="u-check">
                            <input className="hidden-xs-up g-pos-abs g-top-0 g-right-0" name="newsletterNotification" type="checkbox" />
                            <div className="u-check-icon-radio-v7">
                              <i className="d-inline-block"></i>
                            </div>
                          </div>
                        </label>
                      </div>
                      {/* <!-- End Newsletter Notification --> */}

                      <hr className="g-brd-gray-light-v4 g-my-25" />

                      <div className="text-sm-right">
                        <a onClick={this.cancel} className="btn u-btn-darkgray rounded-0 g-py-12 g-px-25 g-mr-10" href="#">Cancel</a>
                        <a onClick={this.submit} className="btn u-btn-primary rounded-0 g-py-12 g-px-25" href="#">Save Changes</a>
                      </div>
                    </form>
                  </div>
                  {/* <!-- End Notification Settings --> */}
                </div>
                {/* <!-- End Tab panes --> */}
              </div>
              {/* <!-- End Profle Content --> */}
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default Account
