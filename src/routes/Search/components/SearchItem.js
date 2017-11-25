import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

import DefaultUserPicture from '../assets/defaultUserPicture.jpg';

import auth from '../../auth/modules/auth';

const badgeAwayStyle = 'u-badge-v2--sm g-mt-15 g-mr-15 g-bg-yellow';
const badgeOfflineStyle = 'u-badge-v2--sm g-mt-15 g-mr-15 g-bg-red';
const badgeOnlineStyle = 'u-badge-v2--sm g-mt-15 g-mr-15';

class SearchItem extends React.Component {
  static propTypes = {
    user: PropTypes.object.isRequired,
  }

  constructor(props) {
    super(props);

    let userName = this.props.user.fname ? this.props.user.fname + ' ' + this.props.user.lname : this.props.user.name;

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

  render () {
    return (
      <div className="g-mb-30">
        {/* <!-- Figure --> */}
        <figure className="u-shadow-v19 g-bg-white g-rounded-4 g-pa-25"> 
          <div className="media g-mb-20">
            <div className="d-flex g-mr-20">
              {/* <!-- Figure Image --> */}
              <div className="g-brd-around g-brd-3 g-brd-gray-light-v3 rounded-circle">
                <span className="d-inline-block g-pos-rel">
                  <span className="u-badge-v2--sm g-mt-5 g-mr-5"></span>
                  {/* g-bg-yellow g-bg-red */}
                  <img className="rounded-circle g-width-50 g-height-50" src={this.state.user.picture} alt="Image Description" />
                </span>
              </div>
              {/* <!-- Figure Image --> */}
            </div>
            <div className="media-body">
              {/* <!-- Figure Info --> */}
              <h4 className="h5 g-mb-2">{this.state.user.name}</h4>
              <div className="d-block">              
                <a className="u-link-v5 g-color-gray-dark-v5 g-color-primary--hover" href="#!">
                  <i className="icon-finance-206 u-line-icon-pro"></i>
                </a>
              </div>
              {/* <!-- End Figure Info --> */}
            </div>
          </div>

          <p>{this.state.user.aboutMe}</p>          
        </figure>
        {/* <!-- End Figure --> */}
      </div>
    )
  }
}

export default SearchItem;
