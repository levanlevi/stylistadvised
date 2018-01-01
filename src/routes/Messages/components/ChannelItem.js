import React, { Component } from 'react';
import PropTypes from 'prop-types';

import DefaultUserPicture from '../../../assets/defaultUserPicture.jpg';

const aActiveStyle = 'active d-block u-link-v5 g-brd-left g-brd-3 g-brd-transparent g-brd-primary--hover g-brd-primary--active g-color-main g-color-primary--hover g-color-primary--active g-bg-secondary g-font-weight-600 g-px-20 g-pl-25--hover g-pl-25--active g-py-12';
const aStyle = 'd-block u-link-v5 g-brd-left g-brd-3 g-brd-transparent g-brd-primary--hover g-brd-primary--active g-color-main g-color-primary--hover g-color-primary--active g-bg-secondary g-font-weight-600 g-px-20 g-pl-25--hover g-pl-25--active g-py-12';

const awaySpanStyle = 'u-badge-v2--xs g-bg-yellow g-brd-around g-brd-white g-mt-7 g-mr-7';
const onlineSpanStyle = 'u-badge-v2--xs g-bg-green g-brd-around g-brd-white g-mt-7 g-mr-7';
const offlineSpanStyle = 'u-badge-v2--xs g-bg-red g-brd-around g-brd-white g-mt-7 g-mr-7';

const away = 'away';
const online = 'online';
const offline = 'offline';

export default class ChannelItem extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    isActiveChannel: PropTypes.bool,
    status: PropTypes.string,
    message: PropTypes.object.isRequired,
    userName: PropTypes.string.isRequired,
    
    onSelectChannel: PropTypes.func.isRequired,
  }

  onSelectChannel = () => {
    this.props.onSelectChannel(this.props.id);
  }

  getStatusStyle = () => {
    if (away === this.props.status) {
      return awaySpanStyle;
    } else if (online === this.props.status) {
      return onlineSpanStyle;
    } else {
      return offlineSpanStyle;
    }
  }

  render () {
    const channelStyle = this.props.isActiveChannel ? aActiveStyle : aStyle;
    const messageText = (25 < this.props.message.text.length ? this.props.message.text.slice(0, 22) + '...' : this.props.message.text);
    const messageTime = (new Date(this.props.message.time)).toLocaleString();

    return (
      <li className="my-1">
        <a 
          onClick={this.onSelectChannel}
          className={channelStyle}>
          <div className="media">
            <div className="g-pos-rel g-mr-5">
              <span className={this.getStatusStyle()}></span>
              <img className="g-width-50 g-height-50 rounded-circle" src={DefaultUserPicture} alt="Image Description" />
            </div>
            <div className="media-body">
              <p className="m-0"><strong>{this.props.userName}</strong> {messageText}</p>
              <span className="g-font-size-12 g-color-gray">{messageTime}</span>
            </div>
          </div>
        </a>
      </li>
    )
  }
}
