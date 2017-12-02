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
    channels: PropTypes.array,
    messages: PropTypes.array.isRequired,
  }

  constructor(props) {
    super(props);

    this.state = {
      channels: [
        { name: '1', id: '1', private: true, between: [ { _id: '123', name: 'flatorez' }, { _id: '321', name: 'snowFlake' } ], }
      ],
      messages: [
        { id: '1', channelId: '1', text: 'Hi!', user: { _id: '123', name: 'flatorez' }, time: 'Dec 1, 2017 6:16 PM' },
        { id: '2', channelId: '1', text: 'Good evening!', user: { _id: '321', name: 'snowFlake' }, time: 'Dec 1, 2017 6:17 PM' },
        { id: '3', channelId: '1', text: 'How are you?', user: { _id: '123', name: 'flatorez' }, time: 'Dec 1, 2017 6:17 PM' },
        { id: '4', channelId: '1', text: 'I am fine, thanks!', user: { _id: '321', name: 'snowFlake' }, time: 'Dec 1, 2017 6:18 PM' }
      ],
      newMessage: '',
      activeChannel: 1,
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
    const newMessage = {
      id: `${Date.now()}${uuid.v4()}`,
      channelId: this.state.activeChannel,
      text: this.state.newMessage,
      user: this.state.user,
      time: moment.utc().format('lll')
    };
    // socket.emit('new message', newMessage);
    console.log(newMessage);
    console.log('New message: %s, was sent!', this.state.newMessage);
  }

  render () {
    const channels = this.state.channels.map((channel, index) =>
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

    const messages = this.state.messages.map((message, index) =>
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

        <section className="g-my-20 g-mb-100">
          <div className="container">
            <div className="row">

              {/* <!-- Sidebar --> */}
              <div className="col-lg-3 g-mb-50 g-mb-0--lg">
                
                {/* <!-- Sidebar Navigation --> */}
                <ul className="list-unstyled g-hidden-md-down mb-5">
                  <li className="my-1">
                    <a className="active d-block u-link-v5 g-brd-left g-brd-3 g-brd-transparent g-brd-primary--hover g-brd-primary--active g-color-main g-color-primary--hover g-color-primary--active g-bg-secondary g-font-weight-600 g-px-20 g-pl-25--hover g-pl-25--active g-py-12" href="page-about-1.html">
                      <div className="media">
                        <div className="g-pos-rel g-mr-5">
                          <span className="u-badge-v2--xs g-bg-green g-brd-around g-brd-white g-mt-7 g-mr-7"></span>
                          <img className="g-width-50 g-height-50 rounded-circle" src={DefaultUserPicture} alt="Image Description" />
                        </div>
                        <div className="media-body">
                          <p className="m-0"><strong>James Coolman</strong> saved your pin</p>
                          <span className="g-font-size-12 g-color-gray">5 minutes ago</span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li className="my-1">
                    <a className="d-block u-link-v5 g-brd-left g-brd-3 g-brd-transparent g-brd-primary--hover g-brd-primary--active g-color-main g-color-primary--hover g-color-primary--active g-bg-secondary g-font-weight-600 g-px-20 g-pl-25--hover g-pl-25--active g-py-12" href="page-services-1.html">
                      <div className="media">
                        <div className="g-pos-rel g-mr-5">
                          <span className="u-badge-v2--xs g-bg-green g-brd-around g-brd-white g-mt-7 g-mr-7"></span>
                          <img className="g-width-50 g-height-50 rounded-circle" src={DefaultUserPicture} alt="Image Description" />
                        </div>
                        <div className="media-body">
                          <p className="m-0"><strong>James Coolman</strong> saved your pin</p>
                          <span className="g-font-size-12 g-color-gray">5 minutes ago</span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li className="my-1">
                    <a className="d-block u-link-v5 g-brd-left g-brd-3 g-brd-transparent g-brd-primary--hover g-brd-primary--active g-color-main g-color-primary--hover g-color-primary--active g-bg-secondary g-font-weight-600 g-px-20 g-pl-25--hover g-pl-25--active g-py-12" href="page-consultants-1.html">
                      <div className="media">
                        <div className="g-pos-rel g-mr-5">
                          <span className="u-badge-v2--xs g-bg-green g-brd-around g-brd-white g-mt-7 g-mr-7"></span>
                          <img className="g-width-50 g-height-50 rounded-circle" src={DefaultUserPicture} alt="Image Description" />
                        </div>
                        <div className="media-body">
                          <p className="m-0"><strong>James Coolman</strong> saved your pin</p>
                          <span className="g-font-size-12 g-color-gray">5 minutes ago</span>
                        </div>
                      </div>
                    </a>
                  </li>                  
                </ul>
                {/* <!-- End Sidebar Navigation --> */}
                
              </div>
              {/* <!-- End Sidebar --> */}
              
              {/* <!-- Content --> */}
              <div className="col-lg-9">

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
                  {messages}
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
              {/* <!-- End Content --> */}
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default Messages;
