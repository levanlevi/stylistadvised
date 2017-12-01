import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

import moment from 'moment';
import uuid from 'node-uuid';

const io = require('socket.io-client');
const config = require('../../../../config');

import auth from '../../auth/modules/auth';
import Display from '../../Parts/Display';
import Header from '../../Parts/Header';

import DefaultUserPicture from '../../../assets/defaultUserPicture.jpg';

const oddMediaStyle = 'media g-brd-top g-brd-gray-light-v4 g-pt-30 g-mb-30';
const evenMediaStyle = 'media g-brd-top g-brd-gray-light-v4 g-pt-30 g-ml-40 g-mb-30';

class Messages extends React.Component {
  static propTypes = {
    messages: PropTypes.array.isRequired,
  }

  constructor(props) {
    super(props);

    this.state = {
      messages: [1, 2, 3],
      newMessage: '',
      user: {
        name: auth.isUserAuthenticated() ? JSON.parse(auth.getUser()).name : null,        
        picture: (auth.isUserAuthenticated() && JSON.parse(auth.getUser()).picture) ? JSON.parse(auth.getUser()).picture : DefaultUserPicture,
      },
    };
  }

  componentWillMount() {
    this.socket = io(config.serverUrl);
    this.socket.on('connect', this.connect);
    this.socket.on('disconnect', this.disconnect);

    this.socket.on('joined', this.joined);
    this.socket.on('audience', this.updateAudience);    
  }

  componentDidMount() {
    // initialization of HSScrollBar component
    $.HSCore.components.HSScrollBar.init( $('.js-scrollbar') );
  }

  emit(eventName, payload) {
    this.socket.emit(eventName, payload);
  }

  connect() {    
    var member = (sessionStorage.member) ? JSON.parse(sessionStorage.member) : null;
    
    if (member) {
      this.emit('join', member);
    } else {
      this.emit('join', { name: this.state.user.name });
    }
  }

  disconnect() {
    console.log('disconnected');
  }

  joined(member) {
    sessionStorage.member = JSON.stringify(member);
    console.log(member);
  }

  updateAudience(newAudience) {
    console.log(newAudience);
  }

  changeMessage = (event) => {
    this.setState({ newMessage:  event.target.value});
  }

  sendMessage = () => {
    // const newMessage = {
    //   id: `${Date.now()}${uuid.v4()}`,
    //   channelID: this.props.activeChannel,
    //   text: text,
    //   user: user,
    //   time: moment.utc().format('lll')
    // };
    // socket.emit('new message', newMessage);
    console.log('New message: %s, was sent!', this.state.newMessage);
  }

  render () {
    const listItems = this.state.messages.map((message, index) =>
      <div key={index} className={0 === index%2 ? oddMediaStyle : evenMediaStyle}>
        <img className="d-flex g-width-60 g-height-60 rounded-circle g-mt-3 g-mr-15" src={DefaultUserPicture} alt="Image Description" />
        <div className="media-body">
          <div className="d-flex align-items-start g-mb-15 g-mb-10--sm">
            <div className="d-block">
              <h5 className="h6">Alberta Watson</h5>
              <span className="d-block g-color-gray-dark-v5 g-font-size-11">June 7, 2017</span>
            </div>
            <div className="ml-auto">
              <a className="u-link-v5 g-color-primary--hover g-font-weight-600 g-font-size-12 text-uppercase" href="#">Reply</a>
            </div>
          </div>

          <p>Now that your brand is all dressed up and ready to party, it's time to release it to the world. By the way, let's celebrate already.</p>

          <ul className="list-inline my-0">
            <li className="list-inline-item g-mr-20">
              <a className="g-color-gray-dark-v5 g-color-primary--hover g-text-underline--none--hover" href="#">
                <i className="icon-medical-022 u-line-icon-pro g-pos-rel g-top-1 g-mr-3"></i> 2
              </a>
            </li>
            <li className="list-inline-item g-mr-20">
              <a className="g-color-gray-dark-v5 g-color-primary--hover g-text-underline--none--hover" href="#">
                <i className="icon-finance-206 u-line-icon-pro g-pos-rel g-top-1 g-mr-3"></i> 0
              </a>
            </li>
          </ul>
        </div>
      </div>
    );

    return (
      <div>
        <Header isTransparent={false}></Header>        

        {/* <!-- Shortcode Sidebar Navigation --> */}
        <div id="sideNav" className="u-header u-header--side u-sidebar-navigation" aria-labelledby="sideNav-toggler" data-header-behavior="push" data-header-position="left" data-header-breakpoint="lg" data-header-classes="g-transition-0_5" data-header-body-classes="g-transition-0_5"
        data-header-overlay-classes="g-bg-black-opacity-0_8 g-transition-0_5">
          {/* <!-- Header Toggle Button --> */}
          <button className="btn u-sidebar-navigation__toggler" id="sideNav-toggler" aria-haspopup="true" aria-expanded="false" aria-controls="sideNav" aria-label="Toggle Header" data-target="#sideNav">
            <i className="icon-list"></i>
          </button>
          {/* <!-- End Header Toggle Button --> */}
          <div className="u-header__sections-container">
            <div className="u-sidebar-navigation-inner">

              <h3 className="h5 g-px-20 g-mb-20">Unify Shortcodes</h3>

              <div className="form-group g-px-20 g-mb-20">
                <input id="u-sidebar-navigation__search-autocomplete" className="form-control form-control-md u-sidebar-navigation__search-input g-py-13" type="text" placeholder="Search over 1610 shortcodes" data-url="../../assets/include/ajax/autocomplete-data-shortcode-search.json" />
              </div>

              <ul className="js-shortcode-filter list-inline d-flex justify-content-between u-hs-filter">
                <li className="list-inline-item active g-mr-10 g-mb-10">
                  <a href="#!" data-shortcode-filter="all">All</a>
                </li>
                <li className="list-inline-item g-mr-10 g-mb-10">
                  <a href="#!" data-shortcode-filter="bases">Bases</a>
                </li>
                <li className="list-inline-item">
                  <a href="#!" data-shortcode-filter="blocks">Blocks</a>
                </li>
              </ul>

              <ul className="js-shortcode-filter-result nav flex-column u-sidebar-navigation-list">
                <li className="js-shortcode-filter__item nav-item bases">
                  <a href="../../unify-main/shortcodes/shortcode-base-accordions.html" className="nav-link ">Accordions</a>
                </li>
                <li className="js-shortcode-filter__item nav-item bases">
                  <a href="../../unify-main/shortcodes/shortcode-base-alerts.html" className="nav-link ">Alerts</a>
                </li>
                <li className="js-shortcode-filter__item nav-item bases">
                  <a href="../../unify-main/shortcodes/shortcode-base-badges.html" className="nav-link ">Badges</a>
                </li>
              </ul>

              <button className="btn u-sidebar-navigation__closer" id="sideNav-toggler-closer" aria-haspopup="true" aria-expanded="false" aria-controls="sideNav" aria-label="Toggle Header" data-target="#sideNav">
                <i className="hs-icon hs-icon-close"></i>
              </button>
            </div>
          </div>
        </div>
        {/* <!-- End Shortcode Sidebar Navigation --> */}

        <section className="g-my-20 g-mb-100">
          <div className="container">
            <div className="row">

              {/* <!-- Profle Content --> */}
              <div className="col-lg">

                {/* <!-- Panel Header --> */}
                <div className="card-header d-flex align-items-center justify-content-between g-bg-gray-light-v5 border-0 g-mb-15">
                  <h3 className="h6 mb-0">
                      <i className="icon-bubbles g-pos-rel g-top-1 g-mr-5"></i> Comments <small>(option 1)</small>
                    </h3>
                  <div className="dropdown g-mb-10 g-mb-0--md">
                    <span className="d-block g-color-primary--hover g-cursor-pointer g-mr-minus-5 g-pa-5" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i className="icon-options-vertical g-pos-rel g-top-1"></i>
                      </span>
                    <div className="dropdown-menu dropdown-menu-right rounded-0 g-mt-10">
                      <a className="dropdown-item g-px-10" href="#!">
                        <i className="icon-layers g-font-size-12 g-color-gray-dark-v5 g-mr-5"></i> Projects
                      </a>
                      <a className="dropdown-item g-px-10" href="#!">
                        <i className="icon-wallet g-font-size-12 g-color-gray-dark-v5 g-mr-5"></i> Wallets
                      </a>
                      <a className="dropdown-item g-px-10" href="#!">
                        <i className="icon-fire g-font-size-12 g-color-gray-dark-v5 g-mr-5"></i> Reports
                      </a>
                      <a className="dropdown-item g-px-10" href="#!">
                        <i className="icon-settings g-font-size-12 g-color-gray-dark-v5 g-mr-5"></i> Users Setting
                      </a>

                      <div className="dropdown-divider"></div>

                      <a className="dropdown-item g-px-10" href="#!">
                        <i className="icon-plus g-font-size-12 g-color-gray-dark-v5 g-mr-5"></i> View More
                      </a>
                    </div>
                  </div>
                </div>
                {/* <!-- End Panel Header --> */}

                <div className="js-scrollbar g-height-350 g-brd-around g-brd-gray-light-v4 rounded g-pa-20 g-mb-30">
                  {/* <!-- Comments --> */}
                  {listItems}
                  {/* <!-- End Comments --> */}
                </div>

                {/* <!-- New Message --> */}
                <div>
                  <div className="g-mb-30">
                    <textarea onChange={this.changeMessage} className="form-control g-bg-secondary g-brd-gray-light-v4 g-brd-primary--focus g-resize-none rounded-3 g-py-13 g-px-15" rows="5" placeholder="Your message..."></textarea>
                  </div>

                  <div className="d-flex align-items-center">
                    <button onClick={this.sendMessage} className="btn u-btn-primary g-font-weight-600 g-font-size-12 text-uppercase g-py-12 g-px-25 mr-4" type="submit" role="button">Send</button>
                  </div>
                </div>
                {/* <!-- End New Message --> */}
                
              </div>
              {/* <!-- End Profle Content --> */}
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default Messages;
