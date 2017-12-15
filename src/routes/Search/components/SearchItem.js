import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

import DefaultUserPicture from '../assets/defaultUserPicture.jpg';

import auth from '../../auth/modules/auth';

const awayBadgeStyle = 'u-badge-v2--sm g-mt-15 g-mr-85 g-bg-yellow';
const offlineBadgeStyle = 'u-badge-v2--sm g-mt-15 g-mr-85 g-bg-red';
const onlineBadgeStyle = 'u-badge-v2--sm g-mt-15 g-mr-85';

const away = 'away';
const online = 'online';
const offline = 'offline';

export default class SearchItem extends Component {
  static propTypes = {
    index: PropTypes.number.isRequired,
    user: PropTypes.object.isRequired,
  }

  constructor(props) {
    super(props);

    const userName = this.props.user.fname ? this.props.user.fname + ' ' + this.props.user.lname : this.props.user.name;

    this.state = {
      user: {
        name: userName,
        email: this.props.user.email,
        location: this.props.user.location ? this.props.user.location : '',
        aboutMe: this.props.user.aboutMe ? this.props.user.aboutMe : '',
        picture: this.props.user.picture ? this.props.user.picture : DefaultUserPicture,
      },
    };
  }

  getStatusStyle = () => {
    if (away === this.props.user.status) {
      return awayBadgeStyle;
    } else if (online === this.props.user.status) {
      return onlineBadgeStyle;
    } else {
      return offlineBadgeStyle;
    }
  }

  sendMessage = () => {}

  render () {
    return (
      <div className="col-lg-6 g-mb-60">
        {/* <!-- Accordion --> */}
        <div id={"accordion-12-" + this.props.index} className="u-accordion u-accordion-color-primary" role="tablist" aria-multiselectable="true">
          {/* <!-- Card --> */}
          <div className="card g-brd-none rounded-0">
            <div className="row">
              <div className="col-md-7">
                {/* <!-- Info --> */}
                <div className="g-bg-secondary text-center g-pa-5">
                  <div className="mx-auto g-width-130 g-height-130 g-mb-15">
                    <span className={this.getStatusStyle()}></span>
                    <img className="g-width-115 g-height-120 rounded-circle" src={this.state.user.picture} alt="Image Description" />
                  </div>                  
                  <h3 className="h6 mb-0">{this.state.user.name}</h3>
                  <span className="d-block g-font-size-11 g-color-text">{this.state.user.location}</span>
                </div>
                {/* <!-- End Info --> */}

                {/* <!-- Accordion - Trigger --> */}
                <div id={"accordion-12-" + this.props.index + "-heading-01"} className="g-pa-0" role="tab">
                  <a className="btn btn-block u-btn-primary rounded-0 g-px-25 g-py-13" href={"#accordion-12-" + this.props.index + "-body-01"} data-toggle="collapse" data-parent={"#accordion-12-" + this.props.index} aria-expanded="false" aria-controls={"accordion-12-" + this.props.index + "-body-01"}>
                    Contact Me
                  </a>
                </div>
                {/* <!-- End Accordion - Trigger --> */}
              </div>

              <div className="col-md-5">
                {/* <!-- Content --> */}
                <h3 className="h5">About Me</h3>
                <p className="g-line-height-2">{this.state.user.aboutMe}</p>
                {/* <!-- End Content --> */}
              </div>
            </div>

            {/* <!-- Accordion - Content --> */}
            <div id={"accordion-12-" + this.props.index + "-body-01"} className="collapse" role="tabpanel" aria-labelledby={"accordion-12-" + this.props.index + "-heading-01"}>
              <div className="u-accordion__body g-color-gray-dark-v4 g-pl-0">
                {/* <!-- Accordion Form --> */}
                <form className="g-bg-secondary g-pa-20 g-pb-0">
                  <div className="row g-mx-minus-10">
                    <div className="col-sm-8 g-px-5 g-mb-20">
                      <textarea className="form-control g-color-main g-brd-gray-light-v4 g-brd-primary--focus g-bg-white g-font-size-13 rounded g-py-13 g-px-15" rows="4" placeholder="Hi there, I would like to ..."></textarea>
                    </div>
                    <div className="col-md-4 align-self-end g-mb-20">
                      <button onClick={this.sendMessage} className="btn u-btn-primary g-font-weight-600 g-font-size-12 text-uppercase g-py-12 g-px-25 mr-4" type="submit" role="button">Send</button>
                    </div>
                  </div>
                </form>
                {/* <!-- End Accordion Form --> */}
              </div>
            </div>
            {/* <!-- End Accordion - Content --> */}
          </div>
          {/* <!-- End Card --> */}
        </div>
        {/* <!-- End Accordion --> */}

        {0 === this.props.index%2 && <div className="w-100 g-mb-30"></div>}
      </div>      
    )
  }
}
