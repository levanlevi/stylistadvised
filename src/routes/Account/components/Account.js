import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

import Notification from './Notification';
import Payment from './Payment';
import Profile from './Profile';
import Security from './Security';

import UserImage from '../assets/img5.jpg';

class Account extends React.Component {
  static propTypes = {
    submit: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);

    this.state = {
      firstName: this.props.state.fname,
      lastName: this.props.state.lname,
    };

    this.setFirstName = this.setFirstName.bind(this);
    this.setLastName = this.setLastName.bind(this);

    this.submitProfile = this.submitProfile.bind(this);
    this.submitSecurity = this.submitSecurity.bind(this);
  }

  setFirstName(value) {
    this.setState({ firstName: value });
  }

  setLastName(value) {
    this.setState({ lastName: value });
  }

  submitProfile(user) {
    this.props.state.fname = user.firstName;
    this.props.state.lname = user.lastName;
    this.props.state.email = user.email;

    this.props.submit(this.props.state);
  }

  submitSecurity(user) {
    this.props.state.password = user.password;

    this.props.submit(this.props.state);
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
                    <Profile
                      firstName={this.state.firstName}
                      lastName={this.state.lastName}
                      email={this.props.state.email}
                      setFirstName={this.setFirstName}
                      setLastName={this.setLastName}
                      submit={this.submitProfile}
                    />
                  </div>
                  {/* <!-- End Edit Profile --> */}
                    
                  {/* <!-- Security Settings --> */}
                  <div className="tab-pane fade" id="nav-1-1-default-hor-left-underline--2" role="tabpanel">
                    <Security 
                      password={this.state.password}
                      submit={this.submitSecurity}
                    />
                  </div>
                  {/* <!-- End Security Settings --> */}

                  {/* <!-- Payment Options --> */}
                  <div className="tab-pane fade" id="nav-1-1-default-hor-left-underline--3" role="tabpanel">
                    <Payment
                      paymentState={this.props.state}
                    />
                  </div>
                  {/* <!-- End Payment Options --> */}

                  {/* <!-- Notification Settings --> */}
                  <div className="tab-pane fade" id="nav-1-1-default-hor-left-underline--4" role="tabpanel">
                    <Notification
                      notificationState={this.props.state}
                    />
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
