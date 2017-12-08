import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

import moment from 'moment';
import uuid from 'node-uuid';

const _ = require('underscore');
const io = require('socket.io-client');
const config = require('../../../../config');

import auth from '../../auth/modules/auth';
import Display from '../../Parts/Display';
import Header from '../../Parts/Header';

import ChannelItem from './ChannelItem';
import FileItem from './FileItem';
import MessageItem from './MessageItem';

import DefaultUserPicture from '../../../assets/defaultUserPicture.jpg';

const oddMediaStyle = 'media g-brd-top g-brd-gray-light-v4 g-pt-30 g-mb-30';
const evenMediaStyle = 'media g-brd-top g-brd-gray-light-v4 g-pt-30 g-ml-40 g-mb-30';

const aActiveStyle = 'active d-block u-link-v5 g-brd-left g-brd-3 g-brd-transparent g-brd-primary--hover g-brd-primary--active g-color-main g-color-primary--hover g-color-primary--active g-bg-secondary g-font-weight-600 g-px-20 g-pl-25--hover g-pl-25--active g-py-12';
const aStyle = 'd-block u-link-v5 g-brd-left g-brd-3 g-brd-transparent g-brd-primary--hover g-brd-primary--active g-color-main g-color-primary--hover g-color-primary--active g-bg-secondary g-font-weight-600 g-px-20 g-pl-25--hover g-pl-25--active g-py-12';

const awaySpanStyle = 'u-badge-v2--xs g-bg-yellow g-brd-around g-brd-white g-mt-7 g-mr-7';
const onlineSpanStyle = 'u-badge-v2--xs g-bg-green g-brd-around g-brd-white g-mt-7 g-mr-7';
const offlineSpanStyle = 'u-badge-v2--xs g-bg-red g-brd-around g-brd-white g-mt-7 g-mr-7';

const away = 'away';
const online = 'online';
const offline = 'offline';

class Messages extends React.Component {
  static propTypes = {
    channels: PropTypes.array,
    messages: PropTypes.array.isRequired,
  }

  constructor(props) {
    super(props);

    this.state = {
      activeChannel: null,
      audience: [],
      channels: [
        { name: '1', id: '59eca251f0626a17ad08ddd2+59eca2d1f0626a17ad08ddd3', private: true, between: [ { _id: '59eca251f0626a17ad08ddd2', name: 'flatorez' }, { _id: '59eca2d1f0626a17ad08ddd3', name: 'SnowFlake' } ], status: offline, isActiveChannel: false, lastMessage: { id: '4', channelId: '1', text: 'I am fine, thanks!', user: { _id: '2', name: 'SnowFlake' }, time: 'Dec 1, 2017 6:18 PM' }, },
        { name: '2', id: '59eca251f0626a17ad08ddd2+5a2928767ce45202194fba23', private: true, between: [ { _id: '59eca251f0626a17ad08ddd2', name: 'flatorez' }, { _id: '5a2928767ce45202194fba23', name: 'velhover' } ], status: offline, isActiveChannel: false, lastMessage: { id: '8', channelId: '2', text: 'I am fine, thanks!', user: { _id: '3', name: 'velhover' }, time: 'Dec 1, 2017 6:18 PM' }, },
      ],
      messages: [
        { id: '1', channelId: '59eca251f0626a17ad08ddd2+59eca2d1f0626a17ad08ddd3', text: 'Hi!', user: { _id: '59eca251f0626a17ad08ddd2', name: 'flatorez' }, time: 'Dec 1, 2017 6:16 PM' },
        { id: '2', channelId: '59eca251f0626a17ad08ddd2+59eca2d1f0626a17ad08ddd3', text: 'Good evening!', user: { _id: '59eca2d1f0626a17ad08ddd3', name: 'SnowFlake' }, time: 'Dec 1, 2017 6:17 PM' },
        { id: '3', channelId: '59eca251f0626a17ad08ddd2+59eca2d1f0626a17ad08ddd3', text: 'How are you?', user: { _id: '59eca251f0626a17ad08ddd2', name: 'flatorez' }, time: 'Dec 1, 2017 6:17 PM' },
        { id: '4', channelId: '59eca251f0626a17ad08ddd2+59eca2d1f0626a17ad08ddd3', text: 'I am fine, thanks!', user: { _id: '59eca2d1f0626a17ad08ddd3', name: 'SnowFlake' }, time: 'Dec 1, 2017 6:18 PM' },

        { id: '5', channelId: '59eca251f0626a17ad08ddd2+5a2928767ce45202194fba23', text: 'Good evening!', user: { _id: '59eca251f0626a17ad08ddd2', name: 'flatorez' }, time: 'Dec 1, 2017 6:16 PM' },
        { id: '6', channelId: '59eca251f0626a17ad08ddd2+5a2928767ce45202194fba23', text: 'Hello!', user: { _id: '5a2928767ce45202194fba23', name: 'velhover' }, time: 'Dec 1, 2017 6:17 PM' },
        { id: '7', channelId: '59eca251f0626a17ad08ddd2+5a2928767ce45202194fba23', text: 'Nice to see you!', user: { _id: '5a2928767ce45202194fba23', name: 'velhover' }, time: 'Dec 1, 2017 6:17 PM' },
        { id: '8', channelId: '59eca251f0626a17ad08ddd2+5a2928767ce45202194fba23', text: 'How are you?', user: { _id: '59eca251f0626a17ad08ddd2', name: 'flatorez' }, time: 'Dec 1, 2017 6:17 PM' },
        { id: '9', channelId: '59eca251f0626a17ad08ddd2+5a2928767ce45202194fba23', text: 'I am fine, thanks!', user: { _id: '5a2928767ce45202194fba23', name: 'velhover' }, time: 'Dec 1, 2017 6:18 PM' },
      ],
      files: [],
      newMessage: '',
      user: {
        id: auth.isUserAuthenticated() ? auth.getUserId() : null,
        name: auth.isUserAuthenticated() ? JSON.parse(auth.getUser()).name : null,
        picture: (auth.isUserAuthenticated() && JSON.parse(auth.getUser()).picture) ? JSON.parse(auth.getUser()).picture : DefaultUserPicture,
      },
    };

    this.updateAudience = this.updateAudience.bind(this);
  }

  componentWillMount() {
    this.socket = io(config.serverUrl);
    this.socket.on('connect', this.connect);
    this.socket.on('disconnect', this.disconnect);

    this.socket.on('joined', this.joined);
    this.socket.on('audience', this.updateAudience);

    this.socket.on('new bc message', this.receiveRawMessage);
    this.socket.on('receive private channel', this.receiveRawChannel);
  }

  componentDidMount() {
    // initialization of HSScrollBar component
    $.HSCore.components.HSScrollBar.init( $('.js-scrollbar') );
    // initialization of forms
    $.HSCore.components.HSFileAttachment.init('.js-file-attachment');
    // Form Focus
    $.HSCore.helpers.HSFocusState.init();
  }

  emit(eventName, payload) {
    this.socket.emit(eventName, payload);
  }

  receiveRawMessage = (message) => {
    const messages = this.state.messages.slice();
    messages.push(message);

    this.setState({ messages: messages });
  }

  receiveRawChannel = (channel) => {
    this.setState({ activeChannel: channel });

    this.emit('join channel', channel);
  }

  connect = () => {    
    var member = (sessionStorage.member) ? JSON.parse(sessionStorage.member) : null;
    
    if (member) {
      this.emit('join', member);
    } else {
      this.emit('join', { id: this.state.user.id, name: this.state.user.name });
    }
  }

  disconnect = () => {
    console.log('disconnected');
  }

  joined = (member) => {
    sessionStorage.member = JSON.stringify(member);    
  }

  changeActiveChannel = (channel) => {
    this.emit('leave channel', activeChannel);
    this.emit('join channel', channel);
  }

  updateAudience(audience) {console.log(audience);
    let channels = this.state.channels.slice();
    channels.map(channel => {
      let otherUser = _.first(_.filter(channel.between, user => { return this.state.user.id !== user._id; }));
      let user = _.findWhere(audience, { id: otherUser._id });

      channel.status = user ? online : away;
    })

    this.setState({ audience: audience });
    this.setState({ channels: channels });
  }

  changeMessage = (event) => {
    this.setState({ newMessage: event.target.value });
  }

  initNewPrivateChannel = (channelId) => {
    let otherUser = _.first(_.filter(this.state.audience, user => { return this.state.user.id !== user.id; }));
    if (!otherUser) {
      return;
    }

    let selectedChannel = _.first(_.filter(this.state.channels, channel => { return channelId === channel.id; }));
    let currentUser = _.first(_.filter(selectedChannel.between, user => { return this.state.user.id === user._id; }));
    let targetUser = _.first(_.filter(selectedChannel.between, user => { return this.state.user.id !== user._id; }));

    const newChannel = {
      id: `${currentUser._id}+${targetUser._id}`,
      name: `${currentUser.name}+${targetUser.name}`,      
      private: true,
      between: [ currentUser, targetUser ]
    };

    this.emit('new private channel', { socketId : otherUser.socketId, channel: newChannel, });
    
    this.setState({ activeChannel: newChannel });

    this.emit('join channel', newChannel);
  }

  sendMessage = () => {
    const newMessage = {
      id: `${Date.now()}${uuid.v4()}`,
      channelId: this.state.activeChannel.id,
      text: this.state.newMessage,
      time: moment.utc().format('lll'),
      user: this.state.user,
    };

    this.emit('new message', newMessage);
    // this.emit('stop typing', { user: user.username, channel: activeChannel });

    // console.log("Files: %s", this.state.files.length);
    // console.log(newMessage);
    // console.log('New message: %s, was sent!', this.state.newMessage);

    this.receiveRawMessage(newMessage);

    this.setState( { newMessage: '' });
  }

  onSelectChannel = (channelId) => {
    this.initNewPrivateChannel(channelId);

    let channels = this.state.channels.slice();
    channels.map(channel => {      
      channel.isActiveChannel = channelId === channel.id;
    });

    this.setState({ channels: channels });
  }

  onSelectFile = (event) => {
    if (event.target.files && event.target.files[0]) {      
      this.setState({ files: [ ...this.state.files, event.target.files[0] ] });

      // const user = this.state.user;

      // var reader = new FileReader();
      // var self = this;

      // reader.onload = function (e) {
      //   self.setState({ 
      //     user: { fname: user.fname, lname: user.lname, picture: e.target.result }
      //   }, function() {
      //     self.props.user.picture = self.state.user.picture;
      //     self.props.submit(self.props.user);
      //   });
      // }

      // reader.readAsDataURL(event.target.files[0]);
    }
  }

  onFileDelete = (fileName) => {
    const files = this.state.files.slice();
    const file = _.findWhere(files, { name: fileName });

    if (file) {
      files.splice(files.indexOf(file), 1);

      this.setState({ files: files });
    }
  }

  getChannelStatus(channel) {
    if (away === channel.status) {
      return awaySpanStyle;
    } else if (online === channel.status) {
      return onlineSpanStyle;
    } else {
      return offlineSpanStyle;
    }
  }

  getChannelUser(channel) {
    let otherUser = _.first(_.filter(channel.between, user => { return user.name !== this.state.user.name; }));

    return otherUser;
  }

  render () {
    const channels = this.state.channels.map((channel, index) =>
      <ChannelItem
        key={index}
        id={channel.id}
        isActiveChannel={channel.isActiveChannel}
        status={channel.status}
        message={channel.lastMessage}
        userName={this.getChannelUser(channel).name}
        onSelectChannel={this.onSelectChannel}>
      </ChannelItem>
    );

    const messages = this.state.messages.filter(f => this.state.activeChannel && this.state.activeChannel.id === f.channelId).map((message, index) =>
      <MessageItem 
        key={index}
        isOddMessage={this.state.user.id === message.user._id}
        text={message.text}
        time={message.time}
        userName={message.user.name}>
      </MessageItem>
    );

    const files = this.state.files.map((file, index) =>
      <FileItem 
        key={index}
        name={file.name}
        onFileDelete={this.onFileDelete}>
      </FileItem>
    );

    return (
      <div>
        <Header isTransparent={false}></Header>

        <section className="g-my-20 g-mb-100">
          <div className="container">
            <div className="row">

              {/* <!-- Sidebar --> */}
              <div className="col-lg-3 g-mb-50 g-mb-0--lg">
                <ul className="list-unstyled g-hidden-md-down mb-5">
                  {channels}
                </ul>
              </div>
              {/* <!-- End Sidebar --> */}

              {/* <!-- Content --> */}
              <div className="col-lg-9">

                {/* <!-- Panel Header --> */}
                <div className="card-header d-flex align-items-center justify-content-between g-bg-gray-light-v5 border-0 g-mb-15">
                  <h3 className="h6 mb-0">
                      <i className="icon-bubbles g-pos-rel g-top-1 g-mr-5"></i> Messages
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

                {/* <!-- Messages --> */}
                <div className="js-scrollbar g-height-350 g-brd-around g-brd-gray-light-v4 rounded g-pa-20 g-mb-30">
                  <div>
                    {messages}
                  </div>
                </div>
                {/* <!-- End Messages --> */}

                {/* <!-- New Message --> */}
                <div>
                  <div className="g-mb-30">
                    <div className="row g-mx-0">
                      <div className="table-responsive">
                        <table className="table table-bordered u-table--v2">                          
                          <tbody>
                            {files}
                          </tbody>
                        </table>
                      </div>
                    </div>

                    <div className="input-group g-brd-primary--focus">
                      <textarea onChange={this.changeMessage} value={this.state.newMessage} className="form-control form-control-md border-right-0 g-resize-none rounded-0 pr-0" rows="4" placeholder="Your message..."></textarea>
                      <div className="input-group-addon d-flex justify-content-start g-color-gray-light-v1 g-bg-white rounded-0 g-py-12">
                        <label className="u-file-attach-v2 g-color-gray-dark-v5 mb-0">
                          <input onChange={this.onSelectFile} id="fileAttachment" name="file-attachment" type="file" />
                          <i className="icon-cloud-upload g-font-size-16 g-pos-rel g-top-2 g-mr-5"></i>
                          <span className="js-value">Attach file</span>
                        </label>
                      </div>
                    </div>
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
