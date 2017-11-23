import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

import auth from '../../auth/modules/auth';

import DefaultUserPicture from '../assets/defaultUserPicture.jpg';

class Contacts extends React.Component {  
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
                <img className="g-width-100 g-height-100 rounded-circle g-mb-20" src="../../assets/img-temp/125x125/img1.jpg" alt="Image Description" />
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
                <img className="g-width-100 g-height-100 rounded-circle g-mb-20" src="../../assets/img-temp/125x125/img2.jpg" alt="Image Description" />
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
                <img className="g-width-100 g-height-100 rounded-circle g-mb-20" src="../../assets/img-temp/125x125/img3.jpg" alt="Image Description" />
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

        {/* <!-- User Contacts --> */}
        <div className="row g-mb-40">
          <div className="col-md-4 g-mb-30 g-mb-0--md">
            {/* <!-- Figure --> */}
            <figure className="g-bg-white g-brd-around g-brd-gray-light-v4 g-brd-cyan--hover g-transition-0_2 text-center">
              <div className="g-py-40 g-px-20">
                {/* <!-- Figure Image --> */}
                <img className="g-width-100 g-height-100 rounded-circle g-mb-20" src="../../assets/img-temp/125x125/img4.jpg" alt="Image Description" />
                {/* <!-- Figure Image --> */}

                {/* <!-- Figure Info --> */}
                <h4 className="h5 g-mb-5">Maria Parker</h4>
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
                <img className="g-width-100 g-height-100 rounded-circle g-mb-20" src="../../assets/img-temp/125x125/img5.jpg" alt="Image Description" />
                {/* <!-- Figure Image --> */}

                {/* <!-- Figure Info --> */}
                <h4 className="h5 g-mb-5">Bryant Gordon</h4>
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
                <img className="g-width-100 g-height-100 rounded-circle g-mb-20" src="../../assets/img-temp/125x125/img6.jpg" alt="Image Description" />
                {/* <!-- Figure Image --> */}

                {/* <!-- Figure Info --> */}
                <h4 className="h5 g-mb-5">Kelly Harrington</h4>
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

        {/* <!-- User Contacts --> */}
        <div className="row g-mb-40">
          <div className="col-md-4 g-mb-30 g-mb-0--md">
            {/* <!-- Figure --> */}
            <figure className="g-bg-white g-brd-around g-brd-gray-light-v4 g-brd-cyan--hover g-transition-0_2 text-center">
              <div className="g-py-40 g-px-20">
                {/* <!-- Figure Image --> */}
                <img className="g-width-100 g-height-100 rounded-circle g-mb-20" src="../../assets/img-temp/125x125/img7.jpg" alt="Image Description" />
                {/* <!-- Figure Image --> */}

                {/* <!-- Figure Info --> */}
                <h4 className="h5 g-mb-5">Claire Jensen</h4>
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
                <img className="g-width-100 g-height-100 rounded-circle g-mb-20" src="../../assets/img-temp/125x125/img8.jpg" alt="Image Description" />
                {/* <!-- Figure Image --> */}

                {/* <!-- Figure Info --> */}
                <h4 className="h5 g-mb-5">Darrel Park</h4>
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
                <img className="g-width-100 g-height-100 rounded-circle g-mb-20" src="../../assets/img-temp/125x125/img9.jpg" alt="Image Description" />
                {/* <!-- Figure Image --> */}

                {/* <!-- Figure Info --> */}
                <h4 className="h5 g-mb-5">Sally Manning</h4>
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

        {/* <!-- User Contacts --> */}
        <div className="row g-mb-40">
          <div className="col-md-4 g-mb-30 g-mb-0--md">
            {/* <!-- Figure --> */}
            <figure className="g-bg-white g-brd-around g-brd-gray-light-v4 g-brd-cyan--hover g-transition-0_2 text-center">
              <div className="g-py-40 g-px-20">
                {/* <!-- Figure Image --> */}
                <img className="g-width-100 g-height-100 rounded-circle g-mb-20" src="../../assets/img-temp/125x125/img10.jpg" alt="Image Description" />
                {/* <!-- Figure Image --> */}

                {/* <!-- Figure Info --> */}
                <h4 className="h5 g-mb-5">Dave Carlson</h4>
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
                <img className="g-width-100 g-height-100 rounded-circle g-mb-20" src="../../assets/img-temp/125x125/img11.jpg" alt="Image Description" />
                {/* <!-- Figure Image --> */}

                {/* <!-- Figure Info --> */}
                <h4 className="h5 g-mb-5">Julia Copeland</h4>
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
                <img className="g-width-100 g-height-100 rounded-circle g-mb-20" src="../../assets/img-temp/125x125/img12.jpg" alt="Image Description" />
                {/* <!-- Figure Image --> */}

                {/* <!-- Figure Info --> */}
                <h4 className="h5 g-mb-5">Willis Roy</h4>
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

        {/* <!-- Pagination --> */}
        <nav className="text-center" aria-label="Page Navigation">
          <ul className="list-inline">
            <li className="list-inline-item float-sm-left">
              <a className="u-pagination-v1__item u-pagination-v1-4 g-rounded-50 g-pa-7-16" href="#!" aria-label="Previous">
                <span aria-hidden="true">
                  <i className="fa fa-angle-left g-mr-5"></i> Previous
                </span>
                <span className="sr-only">Previous</span>
              </a>
            </li>
            <li className="list-inline-item g-hidden-sm-down">
              <a className="u-pagination-v1__item u-pagination-v1-4 g-rounded-50 g-pa-7-14" href="#!">1</a>
            </li>
            <li className="list-inline-item g-hidden-sm-down">
              <a className="u-pagination-v1__item u-pagination-v1-4 u-pagination-v1-4--active g-rounded-50 g-pa-7-14" href="#!">2</a>
            </li>
            <li className="list-inline-item g-hidden-sm-down">
              <a className="u-pagination-v1__item u-pagination-v1-4 g-rounded-50 g-pa-7-14" href="#!">3</a>
            </li>
            <li className="list-inline-item g-hidden-sm-down">
              <a className="g-pa-7-14">...</a>
            </li>
            <li className="list-inline-item g-hidden-sm-down">
              <a className="u-pagination-v1__item u-pagination-v1-4 g-rounded-50 g-pa-7-14" href="#!">80</a>
            </li>
            <li className="list-inline-item float-sm-right">
              <a className="u-pagination-v1__item u-pagination-v1-4 g-rounded-50 g-pa-7-16" href="#!" aria-label="Next">
                <span aria-hidden="true">
                  Next <i className="fa fa-angle-right g-ml-5"></i>
                </span>
                <span className="sr-only">Next</span>
              </a>
            </li>
          </ul>
        </nav>
        {/* <!-- End Pagination --> */}
      </div>
    )
  }
}

export default Contacts;
