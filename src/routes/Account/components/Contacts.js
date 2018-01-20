import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

import auth from '../../Auth/modules/auth';

import DefaultUserPicture from '../assets/defaultUserPicture.jpg';

const badgeAwayStyle = 'u-badge-v2--sm g-mt-15 g-mr-15 g-bg-yellow';
const badgeOfflineStyle = 'u-badge-v2--sm g-mt-15 g-mr-15 g-bg-red';
const badgeOnlineStyle = 'u-badge-v2--sm g-mt-15 g-mr-15';

export default class Contacts extends Component {  
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div>
        {/* <!-- User Contacts --> */}
        <div className="row g-mb-40">
          <div className="col-md-4 g-mb-30 g-mb-0--md">
            {/* <!-- Figure --> */}
            <figure className="g-bg-white g-brd-around g-brd-gray-light-v4 g-brd-cyan--hover g-transition-0_2 text-center">
              <div className="g-py-40 g-px-20">
                {/* <!-- Figure Image --> */}
                <span className="d-inline-block g-pos-rel">
                  <span className="u-badge-v2--sm g-mt-15 g-mr-15"></span>
                  <img className="g-width-100 g-height-100 rounded-circle g-mb-20" src={DefaultUserPicture} alt="Image Description" />
                </span>
                {/* <!-- Figure Image --> */}

                {/* <!-- Figure Info --> */}
                <h4 className="h5 g-mb-5">Mikel Andrews</h4>
                <div className="d-block">
                  <span className="g-color-cyan g-font-size-default g-mr-3">
                    <i className="icon-user"></i>
                  </span>
                  <em className="g-color-gray-dark-v4 g-font-style-normal g-font-size-default">Employee</em>
                </div>
                {/* <!-- End Figure Info --> */}
              </div>

              <hr className="g-brd-gray-light-v4 g-my-0" />

              {/* <!-- Figure List --> */}
              <ul className="row list-inline g-py-20 g-ma-0">
                <li className="col g-brd-right g-brd-gray-light-v4">
                  <a className="u-icon-v1 u-icon-size--sm g-color-gray-dark-v5 g-bg-transparent g-color-cyan--hover" href="#!">
                    <i className="icon-speech"></i>
                  </a>
                </li>
                <li className="col g-brd-right g-brd-gray-light-v4">
                  <a className="u-icon-v1 u-icon-size--sm g-color-gray-dark-v5 g-bg-transparent g-color-red--hover" href="#!">
                    <i className="icon-envelope-letter"></i>
                  </a>
                </li>
                <li className="col">
                  <a className="u-icon-v1 u-icon-size--sm g-color-gray-dark-v5 g-bg-transparent g-color-purple--hover" href="#!">
                    <i className="icon-screen-smartphone"></i>
                  </a>
                </li>
              </ul>
              {/* <!-- End Figure List --> */}
            </figure>
            {/* <!-- End Figure --> */}
          </div>

          <div className="col-md-4 g-mb-30 g-mb-0--md">
            {/* <!-- Figure --> */}
            <figure className="g-bg-white g-brd-around g-brd-gray-light-v4 g-brd-pink--hover g-transition-0_2 text-center">
              <div className="g-py-40 g-px-20">
                {/* <!-- Figure Image --> */}
                <img className="g-width-100 g-height-100 rounded-circle g-mb-20" src={DefaultUserPicture} alt="Image Description" />
                {/* <!-- Figure Image --> */}

                {/* <!-- Figure Info --> */}
                <h4 className="h5 g-mb-5">Natasha Kolnikova</h4>
                <div className="d-block">
                  <span className="g-color-pink g-font-size-default g-mr-3">
                    <i className="icon-user"></i>
                  </span>
                  <em className="g-color-gray-dark-v4 g-font-style-normal g-font-size-default">Family</em>
                </div>
                {/* <!-- End Figure Info --> */}
              </div>

              <hr className="g-brd-gray-light-v4 g-my-0" />

              {/* <!-- Figure List --> */}
              <ul className="row list-inline g-py-20 g-ma-0">
                <li className="col g-brd-right g-brd-gray-light-v4">
                  <a className="u-icon-v1 u-icon-size--sm g-color-gray-dark-v5 g-bg-transparent g-color-cyan--hover" href="#!">
                    <i className="icon-speech"></i>
                  </a>
                </li>
                <li className="col g-brd-right g-brd-gray-light-v4">
                  <a className="u-icon-v1 u-icon-size--sm g-color-gray-dark-v5 g-bg-transparent g-color-red--hover" href="#!">
                    <i className="icon-envelope-letter"></i>
                  </a>
                </li>
                <li className="col">
                  <a className="u-icon-v1 u-icon-size--sm g-color-gray-dark-v5 g-bg-transparent g-color-purple--hover" href="#!">
                    <i className="icon-screen-smartphone"></i>
                  </a>
                </li>
              </ul>
              {/* <!-- End Figure List --> */}
            </figure>
            {/* <!-- End Figure --> */}
          </div>

          <div className="col-md-4">
            {/* <!-- Figure --> */}
            <figure className="g-bg-white g-brd-around g-brd-gray-light-v4 g-brd-purple--hover g-transition-0_2 text-center">
              <div className="g-py-40 g-px-20">
                {/* <!-- Figure Image --> */}
                <img className="g-width-100 g-height-100 rounded-circle g-mb-20" src={DefaultUserPicture} alt="Image Description" />
                {/* <!-- Figure Image --> */}

                {/* <!-- Figure Info --> */}
                <h4 className="h5 g-mb-5">Frank Heller</h4>
                <div className="d-block">
                  <span className="g-color-purple g-font-size-default g-mr-3">
                    <i className="icon-user"></i>
                  </span>
                  <em className="g-color-gray-dark-v4 g-font-style-normal g-font-size-default">Friend</em>
                </div>
                {/* <!-- End Figure Info --> */}
              </div>

              <hr className="g-brd-gray-light-v4 g-my-0" />

              {/* <!-- Figure List --> */}
              <ul className="row list-inline g-py-20 g-ma-0">
                <li className="col g-brd-right g-brd-gray-light-v4">
                  <a className="u-icon-v1 u-icon-size--sm g-color-gray-dark-v5 g-bg-transparent g-color-cyan--hover" href="#!">
                    <i className="icon-speech"></i>
                  </a>
                </li>
                <li className="col g-brd-right g-brd-gray-light-v4">
                  <a className="u-icon-v1 u-icon-size--sm g-color-gray-dark-v5 g-bg-transparent g-color-red--hover" href="#!">
                    <i className="icon-envelope-letter"></i>
                  </a>
                </li>
                <li className="col">
                  <a className="u-icon-v1 u-icon-size--sm g-color-gray-dark-v5 g-bg-transparent g-color-purple--hover" href="#!">
                    <i className="icon-screen-smartphone"></i>
                  </a>
                </li>
              </ul>
              {/* <!-- End Figure List --> */}
            </figure>
            {/* <!-- End Figure --> */}
          </div>
        </div>
        {/* <!-- End User Contacts --> */}
      </div>
    )
  }
}
