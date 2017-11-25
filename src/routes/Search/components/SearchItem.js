import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

import DefaultUserPicture from '../assets/defaultUserPicture.jpg';

import auth from '../../auth/modules/auth';

class SearchItem extends React.Component {
  static propTypes = {
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    name: PropTypes.string.isRequired,
    email: PropTypes.string,
    picture: PropTypes.string,
  }

  constructor(props) {
    super(props);

    this.state = {
      user: {
        name: (this.props.firstName && this.props.lastName) ? this.props.firstName + ' ' + this.props.lastName : this.props.name,
        picture: this.props.picture ? this.props.picture : DefaultUserPicture,
      }
    };
  }

  componentDidMount() {
    // initialization of rating
    $.HSCore.components.HSRating.init($('.js-rating'), {
      spacing: 2
    });
  }

  setName(event) {
    this.setState({ name: event.target.value });
  }

  setIsKeepSignedIn(event) {
    this.setState({ isKeepSignedIn: event.target.checked });
  }

  setPassword(event) {
    this.setState({ password: event.target.value });
  }

  cancel() {
    console.log('cancel');
  }

  submit() {
    console.log('Save Changes');
    //this.props.submit(this.state);
  }

  render () {
    return (
      <div>

        {/* <!-- Search Result --> */}
        <article>
        <h2 className="h4 g-mb-15">
          {/* <!-- Search Info --> */}
          <ul className="list-inline g-mb-10 g-mb-0--lg">
            <li className="list-inline-item g-mr-30">
              <span className="d-inline-block g-pos-rel g-mr-20 g-mb-20">
                <span className="u-badge-v2--sm g-mt-7 g-mr-7"></span>
                {/* g-bg-yellow g-bg-red */}
                <img className="media-object g-rounded-50x u-image-icon-size-md" src={this.state.user.picture} alt="Image Description" />
              </span>
              {/* <img className="g-height-25 g-width-25 rounded-circle g-mr-5" src={this.state.user.picture} alt="Image Description" />  */}
              <a className="u-link-v5 g-color-main g-color-primary--hover" href="#!">{this.state.user.name}</a>
            </li>
            <li className="list-inline-item g-mr-30">
              <i className="icon-calendar g-pos-rel g-top-1 g-color-gray-dark-v5 g-mr-5"></i> 2 weeks ago
            </li>
            <li className="list-inline-item g-mr-30">
              <i className="icon-eye g-pos-rel g-top-1 g-color-gray-dark-v5 g-mr-5"></i> 722,538
            </li>
          </ul>
          {/* <!-- End Search Info --> */}
        </h2>

        <div className="d-lg-flex justify-content-between align-items-center g-mb-15">                

          {/* <!-- Share, Print and More --> */}
          <ul className="list-inline mb-0">
            <li className="list-inline-item g-mr-20">
              <a className="u-link-v5 g-color-gray-dark-v5 g-color-primary--hover" href="#!">
                <i className="icon-share g-pos-rel g-top-1 g-mr-5"></i> Share
              </a>
            </li>
            <li className="list-inline-item g-mr-20">
              <a className="u-link-v5 g-color-gray-dark-v5 g-color-primary--hover" href="#!">
                <i className="icon-printer g-pos-rel g-top-1 g-mr-5"></i> Print
              </a>
            </li>
            <li className="list-inline-item">
              <div className="dropdown g-mb-10 g-mb-0--md">
                <span className="d-block g-color-gray-dark-v5 g-color-primary--hover g-cursor-pointer" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i className="icon-arrow-down-circle g-pos-rel g-top-1"></i> More
                  </span>
                <div className="dropdown-menu dropdown-menu-right rounded-0 g-mt-10">
                  <a className="dropdown-item g-px-10" href="#!">
                    <i className="icon-directions g-font-size-12 g-color-gray-dark-v5 g-mr-5"></i> Report
                  </a>
                  <a className="dropdown-item g-px-10" href="#!">
                    <i className="icon-star g-font-size-12 g-color-gray-dark-v5 g-mr-5"></i> Save
                  </a>
                  <a className="dropdown-item g-px-10" href="#!">
                    <i className="icon-question g-font-size-12 g-color-gray-dark-v5 g-mr-5"></i> Info
                  </a>
                  <a className="dropdown-item g-px-10" href="#!">
                    <i className="icon-cloud-download g-font-size-12 g-color-gray-dark-v5 g-mr-5"></i> Ger More Info
                  </a>

                  <div className="dropdown-divider"></div>

                  <a className="dropdown-item g-px-10" href="#!">
                    <i className="icon-plus g-font-size-12 g-color-gray-dark-v5 g-mr-5"></i> View More
                  </a>
                </div>
              </div>
            </li>
          </ul>
          {/* <!-- End Share, Print and More --> */}
        </div>

        <p className="g-mb-15">Nullam elementum tincidunt massa, a pulvinar leo ultricies ut. Ut fringilla lectus tellusimp imperdiet molestie est volutpat at, sed viverra cursus nibh. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum
          deleniti atque corrupti quos dolores.</p>

        {/* <!-- Search Rating --> */}
        <span className="js-rating g-color-primary mr-2" data-rating="5"></span>
        <span className="g-color-gray-dark-v5">Relevance 5.0 out of 4902 votes</span>
        {/* <!-- End Search Rating --> */}
      </article>
      {/* <!-- End Search Result --> */}
      </div>
    )
  }
}

export default SearchItem;
