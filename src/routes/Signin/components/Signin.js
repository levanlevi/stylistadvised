import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

import FirstUrl from '../../../assets/golddress.jpg';
import SecondUrl from '../../../assets/golddress.jpg';

var firstStyle = {
  backgroundImage: "url(" + FirstUrl + ")"
};

var secondStyle = {
  backgroundImage: "url(" + SecondUrl + ")"
};

export const Signin = ({ state, submit }) => (
  <div>
    <section className="clearfix">
      <div className="row no-gutters align-items-center">
        <div className="col-lg-6">
          <div className="js-carousel" data-autoplay="1" data-infinite="1" data-fade="1" data-speed="5000">
            <div className="js-slide g-bg-img-hero g-min-height-100vh--lg" style={firstStyle} data-calc-target="#js-header"></div>
            <div className="js-slide g-bg-img-hero g-min-height-100vh--lg" style={secondStyle} data-calc-target="#js-header"></div>
          </div>
        </div>

        <div className="col-lg-6">
          <div className="g-pa-50 g-mx-70--xl">
            <form className="g-py-15">
              <h2 className="h3 g-color-black mb-4">Start your free trial</h2>

              <div className="mb-4">
                <div className="input-group rounded">
                  <span className="input-group-addon g-width-45 g-brd-gray-light-v4 g-color-primary">
                    <i className="icon-finance-067 u-line-icon-pro"></i>
                  </span>
                  <input className="form-control g-color-black g-brd-left-none g-bg-white g-bg-white--focus g-brd-gray-light-v4 rounded g-pl-0 g-pr-15 g-py-15" type="email" placeholder="Username"></input>
                </div>
              </div>

              <div className="mb-4">
                <div className="input-group rounded">
                  <span className="input-group-addon g-width-45 g-brd-gray-light-v4 g-color-primary">
                    <i className="icon-media-094 u-line-icon-pro"></i>
                  </span>
                  <input className="form-control g-color-black g-brd-left-none g-bg-white g-bg-white--focus g-brd-gray-light-v4 rounded g-pl-0 g-pr-15 g-py-15" type="password" placeholder="Password"></input>
                </div>
              </div>

              <div className="row justify-content-between mb-4">
                <div className="col align-self-center">
                  <label className="form-check-inline u-check g-pl-25 mb-0">
                    <input className="hidden-xs-up g-pos-abs g-top-0 g-left-0" type="checkbox"></input>
                    <div className="u-check-icon-checkbox-v6 g-absolute-centered--y g-left-0">
                      <i className="fa" data-check-icon="&#xf00c"></i>
                    </div>
                    Keep signed in
                  </label>
                </div>
                <div className="col align-self-center text-right">
                  <a className="g-color-gray-dark-v4 g-color-primary--hover" href="#">Forgot password?</a>
                </div>
              </div>

              <div className="g-mb-50">
                <button className="btn btn-md btn-block u-btn-primary rounded text-uppercase g-py-13" type="button">Login</button>
              </div>

              <p className="g-font-size-13 text-center mb-0">Don't have an account? <Link className="g-font-weight-600" to='/signup'>signup</Link></p>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
)
Signin.propTypes = {
  state: PropTypes.object.isRequired,
  submit: PropTypes.func.isRequired,
}

export default Signin
