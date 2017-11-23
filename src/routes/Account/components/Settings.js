import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

import auth from '../../auth/modules/auth';

import Notifications from './SettingsNotifications';
import Payments from './SettingsPayments';
import Profile from './SettingsProfile';
import Security from './SettingsSecurity';

import DefaultUserPicture from '../assets/defaultUserPicture.jpg';

class Settings extends React.Component {
  static propTypes = {
    user: PropTypes.object.isRequired,
    submit: PropTypes.func.isRequired,
    updateUser: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);

    this.submit = this.submit.bind(this);
  }  

  submit() {
    this.props.submit(this.props.user);
  }

  render () {
    return (      
      <div>
        {/* <!-- Nav tabs --> */}
        <ul className="nav nav-justified u-nav-v1-1 u-nav-primary g-brd-bottom--md g-brd-bottom-2 g-brd-primary g-mb-20" role="tablist" data-target="nav-1-1-default-hor-left-underline" data-tabs-mobile-type="slide-up-down" data-btn-classes="btn btn-md btn-block rounded-0 u-btn-outline-primary g-mb-20">
          <li className="nav-item">
            <a className="nav-link g-py-10 active" data-toggle="tab" href="#nav-1-1-default-hor-left-underline--1" role="tab">Edit Profile</a>
          </li>
          <li className="nav-item">
            <a className="nav-link g-py-10" data-toggle="tab" href="#nav-1-1-default-hor-left-underline--2" role="tab">Security Settings</a>
          </li>
          <li className="nav-item">
            <a className="nav-link g-py-10" data-toggle="tab" href="#nav-1-1-default-hor-left-underline--3" role="tab">Payment Options</a>
          </li>
          <li className="nav-item">
            <a className="nav-link g-py-10" data-toggle="tab" href="#nav-1-1-default-hor-left-underline--4" role="tab">Notification Settings</a>
          </li>
        </ul>
        {/* <!-- End Nav tabs --> */}

        {/* <!-- Tab panes --> */}
        <div id="nav-1-1-default-hor-left-underline" className="tab-content">
          {/* <!-- Edit Profile --> */}
          <div className="tab-pane fade show active" id="nav-1-1-default-hor-left-underline--1" role="tabpanel">
            <Profile user={this.props.user} submit={this.submit} updateUser={this.props.updateUser} />
          </div>
          {/* <!-- End Edit Profile --> */}
            
          {/* <!-- Security Settings --> */}
          <div className="tab-pane fade" id="nav-1-1-default-hor-left-underline--2" role="tabpanel">
            <Security user={this.props.user} submit={this.submit} />
          </div>
          {/* <!-- End Security Settings --> */}

          {/* <!-- Payment Options --> */}
          <div className="tab-pane fade" id="nav-1-1-default-hor-left-underline--3" role="tabpanel">
            <Payments paymentState={this.props.user} />
          </div>
          {/* <!-- End Payment Options --> */}

          {/* <!-- Notification Settings --> */}
          <div className="tab-pane fade" id="nav-1-1-default-hor-left-underline--4" role="tabpanel">
            <Notifications notificationState={this.props.user} />
          </div>
          {/* <!-- End Notification Settings --> */}
        </div>
        {/* <!-- End Tab panes --> */}
      </div>
    )
  }
}

export default Settings;
