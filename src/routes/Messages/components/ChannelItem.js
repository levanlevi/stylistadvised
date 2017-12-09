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
    isActiveChannel: PropTypes.bool.isRequired,
    status: PropTypes.string.isRequired,
    message: PropTypes.object.isRequired,
    userName: PropTypes.string.isRequired,
    
    onSelectChannel: PropTypes.func.isRequired,
  }

  onSelectChannel = () => {
    this.props.onSelectChannel(this.props.id);
  }

  getChannelStyle = () => {
    return this.props.isActiveChannel ? aActiveStyle : aStyle;
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
    return (
      <li className="my-1">
        <a 
          onClick={this.onSelectChannel}
          className={this.getChannelStyle()}>
          <div className="media">
            <div className="g-pos-rel g-mr-5">
              <span className={this.getStatusStyle()}></span>
              <img className="g-width-50 g-height-50 rounded-circle" src={DefaultUserPicture} alt="Image Description" />
            </div>
            <div className="media-body">
              <p className="m-0"><strong>{this.props.userName}</strong> {this.props.message.text}</p>
              <span className="g-font-size-12 g-color-gray">{this.props.message.time}</span>
            </div>
          </div>
        </a>
      </li>
    )
  }
}
