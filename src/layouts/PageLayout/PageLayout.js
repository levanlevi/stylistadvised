import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

export const PageLayout = ({ children }) => (
  <div>
    {/* <header id="js-header" className="u-header u-header--sticky-top u-header--toggle-section u-header--change-appearance"
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
                <li className="nav-item g-mx-20--lg">
                  <a href="#howitworks">How It Works</a>
                </li>                

                <li className="nav-item g-ml-20--lg g-mr-0--lg">
                  <a href="#about">About</a>
                </li>

                <Link className="nav-item g-mx-20--lg" to='/signup'>Sign Up</Link>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header> */}
    <div>
      {children}
    </div>
  </div>
)
PageLayout.propTypes = {
  children: PropTypes.node,
}

export default PageLayout
