import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

import auth from '../auth/modules/auth';

import Display from './Display';

import DefaultUserPicture from './assets/defaultUserPicture.jpg';

export default class Header extends Component {
  static propTypes = {
    isTransparent: PropTypes.bool.isRequired,
  }

  constructor(props) {
    super(props);

    this.state = {
      user: {
        accountLink: auth.isUserAuthenticated() ? '/account/' + auth.getUserId() : null,
        messagesLink: auth.isUserAuthenticated() ? '/messages/' + auth.getUserId() : null,
        name: auth.isUserAuthenticated() ? JSON.parse(auth.getUser()).name : null,        
        picture: (auth.isUserAuthenticated() && JSON.parse(auth.getUser()).picture) ? JSON.parse(auth.getUser()).picture : DefaultUserPicture,
      }
    };

    this.signout = this.signout.bind(this);
  }

  componentDidMount() {
    // initialization of HSDropdown component
    $.HSCore.components.HSDropdown.init($('[data-dropdown-target]'), {
      afterOpen: function () {
        $(this).find('input[type="search"]').focus();
      }
    });
  }

  signout() {
    auth.deauthenticateUser();
  }

  render() {
		return (
      <div>
        <Display if={!this.props.isTransparent}>
          <header id="js-header" className="u-header u-header--static">
            <div className="u-header__section u-header__section--dark g-bg-black g-transition-0_3 g-py-10">
              <nav className="js-mega-menu navbar navbar-expand-lg">
                <div className="container">
                  <button 
                    className="navbar-toggler navbar-toggler-right btn g-line-height-1 g-brd-none g-pa-0 g-pos-abs g-right-0" 
                    type="button"
                    aria-label="Toggle navigation"
                    aria-expanded="false"
                    aria-controls="navBar"
                    data-toggle="collapse"
                    data-target="#navBar">
                    <span className="hamburger hamburger--slider">
                      <span className="hamburger-box">
                        <span className="hamburger-inner"></span>
                      </span>
                    </span>
                  </button>

                  <a href="/" className="navbar-brand">
                    Stylist advised me <span className="sr-only">(current)</span>
                  </a>
                  
                  <Display if={auth.isUserAuthenticated()}>
                    {/* <!-- Account --> */}
                    <div>
                      <a 
                        id="account-dropdown-invoker" 
                        className="media align-items-center float-right g-text-underline--none--hover" 
                        href="#!"
                        aria-controls="account-dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                        data-dropdown-event="hover"
                        data-dropdown-target="#account-dropdown"
                        data-dropdown-type="css-animation"
                        data-dropdown-duration="300"
                        data-dropdown-hide-on-scroll="false"
                        data-dropdown-animation-in="fadeIn"
                        data-dropdown-animation-out="fadeOut">
                        <div className="d-flex g-width-30 g-height-30 mr-2">
                          <img className="img-fluid rounded-circle" src={this.state.user.picture} alt="Image Description" />
                        </div>
                        <div className="media-body">
                          <span className="d-block g-hidden-sm-down g-color-white g-font-weight-600 g-font-size-13">{this.state.user.name}</span>
                        </div>
                      </a>

                      <ul id="account-dropdown" className="list-unstyled text-right g-width-160 g-brd-around g-brd-secondary-light-v2 g-bg-black rounded g-pos-abs g-right-0 g-py-5 g-mt-50"
                          aria-labelledby="account-dropdown-invoker">
                        <li>
                          <a className="d-block g-color-secondary-dark-v1 g-color-primary--hover g-text-underline--none--hover g-py-5 g-px-20" href={this.state.user.accountLink}>My Account</a>
                        </li>
                        <li>
                          <a className="d-block g-color-secondary-dark-v1 g-color-primary--hover g-text-underline--none--hover g-py-5 g-px-20" href={this.state.user.messagesLink}>Messages</a>
                        </li>
                        <li>
                          <a onClick={this.signout} className="d-block g-color-secondary-dark-v1 g-color-primary--hover g-text-underline--none--hover g-py-5 g-px-20" href="/">Signout</a>
                        </li>
                      </ul>
                    </div>
                    {/* <!-- End Account --> */}
                  </Display>
                  <Display if={!auth.isUserAuthenticated()}>
                    <Link className="nav-item g-mx-20--lg" to='/signin'>Login</Link>
                    <Link className="nav-item g-mx-20--lg" to='/signup/customer'>Sign Up</Link>
                  </Display>
                </div>
              </nav>
            </div>
          </header>
        </Display>
        <Display if={this.props.isTransparent}>
          <header 
            id="js-header" 
            className="u-header u-header--sticky-top u-header--toggle-section u-header--change-appearance"
            data-header-fix-moment="300">
            <div 
              className="u-header__section u-header__section--dark g-transition-0_3 g-py-10"
              data-header-fix-moment-exclude="g-py-10"
              data-header-fix-moment-classes="g-bg-black-opacity-0_7 g-py-0">
              <nav className="navbar navbar-toggleable-md">
                <div className="container">
                  <button 
                    className="navbar-toggler navbar-toggler-right btn g-line-height-1 g-brd-none g-pa-0 g-pos-abs g-right-0" 
                    type="button"
                    aria-label="Toggle navigation"
                    aria-expanded="false"
                    aria-controls="navBar"
                    data-toggle="collapse"
                    data-target="#navBar">
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
                      <li className="nav-item g-mx-100--lg"></li>

                      <Link className="nav-item g-mx-20--lg" to='/signup'>Sign Up</Link>
                    </ul>
                  </div>
                </div>
              </nav>
            </div>
          </header>
        </Display>
      </div>
    )
	}
}
