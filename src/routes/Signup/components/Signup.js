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

export const Signup = ({ signup, submit }) => (
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
          <div className="g-pa-40 g-mx-70--xl">
            <form className="g-py-15">
              <h2 className="h3 g-color-black mb-4">Signup</h2>

              <div className="mb-4">
                <div className="input-group rounded">
                  <span className="input-group-addon g-width-45 g-brd-gray-light-v4 g-color-primary">
                    <i className="icon-communication-128 u-line-icon-pro g-pos-rel g-top-2 g-px-5"></i>
                  </span>
                  <input className="form-control g-color-black g-brd-left-none g-bg-white g-bg-white--focus g-brd-gray-light-v4 rounded g-pl-0 g-pr-15 g-py-15" type="email" placeholder="Your name"></input>
                </div>
              </div>

              <div className="mb-4">
                <div className="input-group rounded">
                  <span className="input-group-addon g-width-45 g-brd-gray-light-v4 g-color-primary">
                    <i className="icon-finance-067 u-line-icon-pro g-pos-rel g-top-2 g-px-5"></i>
                  </span>
                  <input className="form-control g-color-black g-brd-left-none g-bg-white g-bg-white--focus g-brd-gray-light-v4 rounded g-pl-0 g-pr-15 g-py-15" type="email" placeholder="User name"></input>
                </div>
              </div>

              <div className="mb-4">
                <div className="input-group rounded">
                  <span className="input-group-addon g-width-45 g-brd-gray-light-v4 g-color-primary">
                    <i className="icon-communication-062 u-line-icon-pro g-pos-rel g-top-2 g-px-5"></i>
                  </span>
                  <input className="form-control g-color-black g-brd-left-none g-bg-white g-bg-white--focus g-brd-gray-light-v4 rounded g-pl-0 g-pr-15 g-py-15" type="tel" placeholder="Your email"></input>
                </div>
              </div>

              <div className="mb-4">
                <div className="input-group rounded">
                  <span className="input-group-addon g-width-45 g-brd-gray-light-v4 g-color-primary">
                    <i className="icon-media-094 u-line-icon-pro g-pos-rel g-top-2 g-px-5"></i>
                  </span>
                  <input className="form-control g-color-black g-brd-left-none g-bg-white g-bg-white--focus g-brd-gray-light-v4 rounded g-pl-0 g-pr-15 g-py-15" type="tel" placeholder="Password"></input>
                </div>
              </div>

              <div className="mb-1">
                <label className="form-check-inline u-check g-font-size-13 g-pl-25 mb-2">
                  <input className="hidden-xs-up g-pos-abs g-top-0 g-left-0" type="checkbox"></input>
                  <div className="u-check-icon-checkbox-v6 g-absolute-centered--y g-left-0">
                    <i className="fa" data-check-icon="&#xf00c"></i>
                  </div>
                  I accept the <a href="#">Terms and Conditions</a>
                </label>
              </div>

              <div className="mb-3">
                <label className="form-check-inline u-check g-font-size-13 g-pl-25 mb-2">
                  <input className="hidden-xs-up g-pos-abs g-top-0 g-left-0" type="checkbox"></input>
                  <div className="u-check-icon-checkbox-v6 g-absolute-centered--y g-left-0">
                    <i className="fa" data-check-icon="&#xf00c"></i>
                  </div>
                  Subscribe to our newsletter
                </label>
              </div>

              <div className="g-mb-50">
                <button className="btn btn-md btn-block u-btn-primary rounded text-uppercase g-py-13" type="button">Signup</button>
              </div>

              <p className="g-font-size-13 text-center mb-0">Already have an account? <Link className="g-font-weight-600" to='/signin'>signin</Link></p>
            </form>
          </div>
        </div>
      </div>
    </section>    
  </div>
)
Signup.propTypes = {
  signup: PropTypes.object.isRequired,
  submit: PropTypes.func.isRequired,
}

export default Signup
