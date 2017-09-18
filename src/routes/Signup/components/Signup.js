import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

import FirstImage from '../assets/first.jpg';
import SecondImage from '../assets/second.jpg';

var firstImageCarouselStyle = {
  backgroundImage: "url(" + FirstImage + ")"
};

var secondImageCarouselStyle = {
  backgroundImage: "url(" + SecondImage + ")"
};

class Signup extends React.Component {
  static propTypes = {
    submit: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);

    this.state = {
      user: {
        name: "",
        email: "",
        password: "",
      }
    };

    this.onChange = this.onChange.bind(this);
    this.submit = this.submit.bind(this);
  }

  componentDidMount() {
    $.HSCore.components.HSCarousel.init('.js-carousel');
  }

  onChange(event) {
    const field = event.target.name;
    const user = this.state.user;
    user[field] = event.target.value;

    this.setState({ user });
  }

  submit() {
    this.props.submit(this.state.user);
  }

  render () {
    return (
      <div>
        <header id="js-header" className="u-header u-header--sticky-top u-header--toggle-section u-header--change-appearance"
                data-header-fix-moment="300">
          <div className="u-header__section u-header__section--dark g-transition-0_3 g-py-10"
              data-header-fix-moment-exclude="g-py-10"
              data-header-fix-moment-classes="g-bg-black-opacity-0_7 g-py-0">
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
                    <li className="nav-item g-mx-100--lg"></li>

                    <Link className="nav-item g-mx-20--lg" to='/signin'>Sign In</Link>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </header>

        <section className="clearfix">
          <div className="row no-gutters align-items-center">
            <div className="col-lg-6">
              <div className="js-carousel" data-autoplay="1" data-infinite="1" data-fade="1" data-speed="5000">
                <div className="js-slide g-bg-size-cover g-min-height-100vh" style={firstImageCarouselStyle} data-calc-target="#js-header"></div>
                <div className="js-slide g-bg-size-cover g-min-height-100vh" style={secondImageCarouselStyle} data-calc-target="#js-header"></div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="g-pa-40 g-mx-70--xl">
                <form className="g-py-15">
                  <h2 className="h3 g-color-black mb-4">Signup</h2>

                  <div className="mb-4">
                    <div className="input-group rounded">
                      <span className="input-group-addon g-width-45 g-brd-gray-light-v4 g-color-primary">
                        <i className="icon-finance-067 u-line-icon-pro g-pos-rel g-top-2 g-px-5"></i>
                      </span>
                      <input onChange={this.onChange} name="name" className="form-control g-color-black g-brd-left-none g-bg-white g-bg-white--focus g-brd-gray-light-v4 rounded g-pl-0 g-pr-15 g-py-15" type="email" placeholder="User name"></input>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="input-group rounded">
                      <span className="input-group-addon g-width-45 g-brd-gray-light-v4 g-color-primary">
                        <i className="icon-communication-062 u-line-icon-pro g-pos-rel g-top-2 g-px-5"></i>
                      </span>
                      <input onChange={this.onChange} name="email" className="form-control g-color-black g-brd-left-none g-bg-white g-bg-white--focus g-brd-gray-light-v4 rounded g-pl-0 g-pr-15 g-py-15" type="email" placeholder="Your email"></input>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="input-group rounded">
                      <span className="input-group-addon g-width-45 g-brd-gray-light-v4 g-color-primary">
                        <i className="icon-media-094 u-line-icon-pro g-pos-rel g-top-2 g-px-5"></i>
                      </span>
                      <input onChange={this.onChange} name="password" className="form-control g-color-black g-brd-left-none g-bg-white g-bg-white--focus g-brd-gray-light-v4 rounded g-pl-0 g-pr-15 g-py-15" type="password" placeholder="Password"></input>
                    </div>
                  </div>

                  <div className="g-mb-50">
                    <button onClick={this.submit} className="btn btn-md btn-block u-btn-primary rounded text-uppercase g-py-13" type="button">Signup</button>
                  </div>

                  <p className="g-font-size-13 text-center mb-0">Already have an account? <Link className="g-font-weight-600" to='/signin'>signin</Link></p>
                </form>
              </div>
            </div>
          </div>
        </section>    
      </div>
    )
  }
}

export default Signup;
