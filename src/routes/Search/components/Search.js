import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

import UserImage from '../assets/img5.jpg';
import BackgroundImage from '../assets/img6.jpg';

var imageBackgroundStyle = {
  height: '140%',
  backgroundImage: "url(" + BackgroundImage + ")"
};

class Search extends React.Component {
  static propTypes = {
    account: PropTypes.object,
    submit: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);

    // this.state = {
    //   firstName: this.props.state.fname,
    //   lastName: this.props.state.lname,
    //   email: this.props.state.email,
    //   city: this.props.state.city,
    //   country: this.props.state.country,
    //   postCode: this.props.state.postCode,
    // };

    // this.setName = this.setName.bind(this);
    // this.setIsKeepSignedIn = this.setIsKeepSignedIn.bind(this);
    // this.setPassword = this.setPassword.bind(this);

    // this.cancel = this.cancel.bind(this);
    // this.submit = this.submit.bind(this);
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
        <header id="js-header" className="u-header u-header--sticky-top u-header--toggle-section u-header--change-appearance"
                data-header-fix-moment="300">
          <div className="u-header__section u-header__section--dark g-bg-black g-transition-0_3 g-py-10"
              data-header-fix-moment-exclude="g-py-10"
              data-header-fix-moment-classes="g-py-0">
            <nav className="navbar navbar-toggleable-md">
              <div className="container">
                <button className="navbar-toggler navbar-toggler-right btn g-line-height-1 g-brd-none g-pa-0 g-pos-abs g-right-0" type="button"
                        aria-label="Toggle navigation"
                        aria-expanded="false"
                        aria-controls="navBar"
                        data-toggle="collapse"
                        data-target="#navBar"
                >
                  <span className="hamburger hamburger--slider">
                    <span className="hamburger-box">
                      <span className="hamburger-inner"></span>
                    </span>
                  </span>
                </button>

                <a href="/" className="navbar-brand">
                  Stylist advised me <span className="sr-only">(current)</span>
                </a>

                <div className="collapse navbar-collapse align-items-center flex-sm-row g-pt-10 g-pt-5--lg" id="navBar">
                  <ul className="navbar-nav text-uppercase g-font-weight-600 ml-auto">                    
                    <li className="nav-item g-mx-120--lg"></li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </header>

        {/* <!-- Page Title --> */}
        <section className="dzsparallaxer auto-init height-is-based-on-content use-loading" data-options='{direction: "reverse", settings_mode_oneelement_max_offset: "150"}'>
          {/* <!-- Parallax Image --> */}
          <div className="divimage dzsparallaxer--target w-100 g-bg-cover g-bg-white-gradient-opacity-v3--after" style={imageBackgroundStyle}></div>
          {/* <!-- End Parallax Image --> */}
  
          <div className="container text-center g-py-100--md g-py-80">
            <h2 className="h1 text-uppercase g-font-weight-300 g-mb-30">Search Results</h2>
  
            {/* <!-- Search Form --> */}
            <form className="g-width-60x--md mx-auto">
              <div className="form-group g-mb-20">
                <div className="input-group u-shadow-v21 rounded g-mb-15">
                  <input className="form-control form-control-md g-brd-white g-font-size-16 border-right-0 pr-0 g-py-15" type="text" placeholder="Where can I download some freebies?" />
                  <div className="input-group-addon d-flex align-items-center g-bg-white g-brd-white g-color-gray-light-v1 g-pa-2">
                    <button className="btn u-btn-primary g-font-size-16 g-py-15 g-px-20" type="submit">
                      <i className="icon-magnifier g-pos-rel g-top-1"></i>
                    </button>
                  </div>
                </div>
                <small className="form-text g-opacity-0_8 g-font-size-default">Search any words, questions and so on here.</small>
              </div>
            </form>
            {/* <!-- End Search Form --> */}
          </div>
        </section>
        {/* <!-- Page Title --> */}
  
        <section className="g-pt-50 g-pb-90">
          <div className="container">
            <div className="row">
              {/* <!-- Sidebar --> */}
              <div className="col-lg-3 g-pr-40--lg g-mb-50 g-mb-0--lg">
                {/* <!-- Categories --> */}
                <h2 className="h5 text-uppercase g-color-gray-dark-v1">Categories</h2>
                <hr className="g-brd-gray-light-v4 g-my-15" />
                <ul className="list-unstyled g-mb-40">
                  <li className="my-3">
                    <a className="d-flex justify-content-between u-link-v5 g-color-gray-dark-v1 g-parent" href="#">
                      Design <span className="d-inline-block g-font-size-12 g-min-width-40 g-brd-around g-color-gray-dark-v5 g-brd-gray-light-v3 text-center rounded g-px-10 g-py-3">99</span>
                    </a>
                  </li>
                  <li className="my-3">
                    <a className="d-flex justify-content-between u-link-v5 g-color-gray-dark-v1" href="#">
                      Development <span className="d-inline-block g-font-size-12 g-min-width-40 g-brd-around g-color-gray-dark-v5 g-brd-gray-light-v3 g-bg-primary--parent-hover text-center rounded g-px-10 g-py-3">5</span>
                    </a>
                  </li>
                  <li className="my-3">
                    <a className="d-flex justify-content-between u-link-v5 g-color-gray-dark-v1" href="#">
                      Services <span className="d-inline-block g-font-size-12 g-min-width-40 g-brd-around g-color-gray-dark-v5 g-brd-gray-light-v3 g-bg-primary--parent-hover text-center rounded g-px-10 g-py-3">15</span>
                    </a>
                  </li>
                  <li className="my-3">
                    <a className="d-flex justify-content-between u-link-v5 g-color-gray-dark-v1" href="#">
                      Support <span className="d-inline-block g-font-size-12 g-min-width-40 g-brd-around g-color-gray-dark-v5 g-brd-gray-light-v3 g-bg-primary--parent-hover text-center rounded g-px-10 g-py-3">12</span>
                    </a>
                  </li>
                  <li className="my-3">
                    <a className="d-flex justify-content-between u-link-v5 g-color-gray-dark-v1" href="#">
                      Investment <span className="d-inline-block g-font-size-12 g-min-width-40 g-brd-around g-color-gray-dark-v5 g-brd-gray-light-v3 g-bg-primary--parent-hover text-center rounded g-px-10 g-py-3">5</span>
                    </a>
                  </li>
                  <li className="my-3">
                    <a className="d-flex justify-content-between u-link-v5 g-color-gray-dark-v1" href="#">
                      Financing <span className="d-inline-block g-font-size-12 g-min-width-40 g-brd-around g-color-gray-dark-v5 g-brd-gray-light-v3 g-bg-primary--parent-hover text-center rounded g-px-10 g-py-3">1</span>
                    </a>
                  </li>
                </ul>
                {/* <!-- End Categories --> */}
  
                {/* <!-- Tags --> */}
                <h2 className="h5 text-uppercase g-color-gray-dark-v1">Tags</h2>
                <hr className="g-brd-gray-light-v4 g-my-15" />
                <ul className="list-inline g-mb-40">
                  <li className="list-inline-item my-2">
                    <a className="u-tags-v1 g-color-main g-brd-around g-brd-gray-light-v3 g-bg-gray-dark-v2--hover g-brd-gray-dark-v2--hover g-color-white--hover rounded g-py-4 g-px-10" href="#">Web Design</a>
                  </li>
                  <li className="list-inline-item my-2">
                    <a className="u-tags-v1 g-color-main g-brd-around g-brd-gray-light-v3 g-bg-gray-dark-v2--hover g-brd-gray-dark-v2--hover g-color-white--hover rounded g-py-4 g-px-10" href="#">Unify</a>
                  </li>
                  <li className="list-inline-item my-2">
                    <a className="u-tags-v1 g-color-main g-brd-around g-brd-gray-light-v3 g-bg-gray-dark-v2--hover g-brd-gray-dark-v2--hover g-color-white--hover rounded g-py-4 g-px-10" href="#">Template</a>
                  </li>
                  <li className="list-inline-item my-2">
                    <a className="u-tags-v1 g-color-main g-brd-around g-brd-gray-light-v3 g-bg-gray-dark-v2--hover g-brd-gray-dark-v2--hover g-color-white--hover rounded g-py-4 g-px-10" href="#">HTML</a>
                  </li>
                  <li className="list-inline-item my-2">
                    <a className="u-tags-v1 g-color-main g-brd-around g-brd-gray-light-v3 g-bg-gray-dark-v2--hover g-brd-gray-dark-v2--hover g-color-white--hover rounded g-py-4 g-px-10" href="#">CSS</a>
                  </li>
                  <li className="list-inline-item my-2">
                    <a className="u-tags-v1 g-color-main g-brd-around g-brd-gray-light-v3 g-bg-gray-dark-v2--hover g-brd-gray-dark-v2--hover g-color-white--hover rounded g-py-4 g-px-10" href="#">Mobile</a>
                  </li>
                  <li className="list-inline-item my-2">
                    <a className="u-tags-v1 g-color-main g-brd-around g-brd-gray-light-v3 g-bg-gray-dark-v2--hover g-brd-gray-dark-v2--hover g-color-white--hover rounded g-py-4 g-px-10" href="#">iOS</a>
                  </li>
                  <li className="list-inline-item my-2">
                    <a className="u-tags-v1 g-color-main g-brd-around g-brd-gray-light-v3 g-bg-gray-dark-v2--hover g-brd-gray-dark-v2--hover g-color-white--hover rounded g-py-4 g-px-10" href="#">UI</a>
                  </li>
                  <li className="list-inline-item my-2">
                    <a className="u-tags-v1 g-color-main g-brd-around g-brd-gray-light-v3 g-bg-gray-dark-v2--hover g-brd-gray-dark-v2--hover g-color-white--hover rounded g-py-4 g-px-10" href="#">Web</a>
                  </li>
                </ul>
                {/* <!-- End Tags --> */}
  
                {/* <!-- Sort By --> */}
                <h2 className="h5 text-uppercase g-color-gray-dark-v1">Sort By</h2>
                <hr className="g-brd-gray-light-v4 g-my-15" />
                <div className="btn-group justified-content g-mb-40">
                  <label className="u-check">
                    <input className="hidden-xs-up g-pos-abs g-top-0 g-left-0" name="radGroupBtn1_1" type="radio" checked />
                    <span className="btn btn-block u-btn-outline-lightgray g-color-white--checked g-bg-primary--checked rounded-0">Date Added</span>
                  </label>
                  <label className="u-check">
                    <input className="hidden-xs-up g-pos-abs g-top-0 g-left-0" name="radGroupBtn1_1" type="radio" />
                    <span className="btn btn-block u-btn-outline-lightgray g-color-white--checked g-bg-primary--checked g-brd-left-none--md rounded-0">Relevance</span>
                  </label>
                </div>
                {/* <!-- End Sort By --> */}
  
                {/* <!-- Result Types --> */}
                <h2 className="h5 text-uppercase g-color-gray-dark-v1">Result Types</h2>
                <hr className="g-brd-gray-light-v4 g-my-15" />
                <form>
                  {/* <!-- Checkbox --> */}
                  <div className="form-group g-mb-10">
                    <label className="u-check g-pl-30">
                      <input className="hidden-xs-up g-pos-abs g-top-0 g-left-0" type="checkbox" />
                      <div className="u-check-icon-checkbox-v4 g-absolute-centered--y g-left-0">
                        <i className="fa" data-check-icon=""></i>
                      </div>
                      Design
                    </label>
                  </div>
                  {/* <!-- End Checkbox --> */}
  
                  {/* <!-- Checkbox --> */}
                  <div className="form-group g-mb-10">
                    <label className="u-check g-pl-30">
                      <input className="hidden-xs-up g-pos-abs g-top-0 g-left-0" type="checkbox" checked />
                      <div className="u-check-icon-checkbox-v4 g-absolute-centered--y g-left-0">
                        <i className="fa" data-check-icon=""></i>
                      </div>
                      Development
                    </label>
                  </div>
                  {/* <!-- End Checkbox --> */}
  
                  {/* <!-- Checkbox --> */}
                  <div className="form-group g-mb-10">
                    <label className="u-check g-pl-30">
                      <input className="hidden-xs-up g-pos-abs g-top-0 g-left-0" type="checkbox" />
                      <div className="u-check-icon-checkbox-v4 g-absolute-centered--y g-left-0">
                        <i className="fa" data-check-icon=""></i>
                      </div>
                      Services
                    </label>
                  </div>
                  {/* <!-- End Checkbox --> */}
  
                  {/* <!-- Checkbox --> */}
                  <div className="form-group g-mb-10">
                    <label className="u-check g-pl-30">
                      <input className="hidden-xs-up g-pos-abs g-top-0 g-left-0" type="checkbox" />
                      <div className="u-check-icon-checkbox-v4 g-absolute-centered--y g-left-0">
                        <i className="fa" data-check-icon=""></i>
                      </div>
                      Support
                    </label>
                  </div>
                  {/* <!-- End Checkbox --> */}
  
                  {/* <!-- Checkbox --> */}
                  <div className="form-group g-mb-10">
                    <label className="u-check g-pl-30">
                      <input className="hidden-xs-up g-pos-abs g-top-0 g-left-0" type="checkbox" />
                      <div className="u-check-icon-checkbox-v4 g-absolute-centered--y g-left-0">
                        <i className="fa" data-check-icon=""></i>
                      </div>
                      Investment
                    </label>
                  </div>
                  {/* <!-- End Checkbox --> */}
                </form>
                {/* <!-- End Result Types --> */}
              </div>
              {/* <!-- End Sidebar --> */}
  
              {/* <!-- Search Results --> */}
              <div className="col-lg-9">
                {/* <!-- Search Info --> */}
                <div className="d-md-flex justify-content-between g-mb-30">
                  <h3 className="h6 text-uppercase g-mb-10 g-mb--lg">About <span className="g-color-gray-dark-v1">384,907</span> results</h3>
                  <ul className="list-inline">
                    <li className="list-inline-item g-mr-30">
                      <a className="u-link-v5 g-color-gray-dark-v1 g-color-primary--hover" href="#">
                        <i className="icon-grid g-pos-rel g-top-1 g-mr-5"></i> List View
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a className="u-link-v5 g-color-gray-dark-v5 g-color-gray-dark-v5--hover" href="#">
                        <i className="icon-list g-pos-rel g-top-1 g-mr-5"></i> Grid View
                      </a>
                    </li>
                  </ul>
                </div>
                {/* <!-- End Search Info --> */}
  
                <div className="row">
                  <div className="col-lg-6 g-mb-30">
                    {/* <!-- Search Result --> */}
                    <article className="g-pa-25 u-shadow-v11 rounded">
                      <h2 className="h4 g-mb-15">
                        <a className="u-link-v5 g-color-gray-dark-v1 g-color-primary--hover" href="#">Unify - Responsive Website Template</a>
                      </h2>
  
                      {/* <!-- Search Info --> */}
                      <ul className="list-inline d-flex justify-content-between g-mb-20">
                        <li className="list-inline-item g-mr-10">
                          <img className="g-height-25 g-width-25 rounded-circle g-mr-5" src={UserImage} alt="Image Description" /> <a className="u-link-v5 g-color-main g-color-primary--hover" href="#">John Doe</a>
                        </li>
                        <li className="list-inline-item">
                          <i className="icon-eye g-pos-rel g-top-1 g-color-gray-dark-v5 g-mr-5"></i> 722,538
                        </li>
                      </ul>
                      {/* <!-- End Search Info --> */}
  
                      <p className="g-mb-15">Nullam elementum tincidunt massa, a pulvinar leo ultricies ut. Ut fringilla lectus tellusimp imperdiet molestie est volutpat at, sed viverra cursus nibh. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.</p>
  
                      {/* <!-- Search Rating --> */}
                      <div className="g-mb-15">
                        <span className="js-rating g-color-primary mr-2" data-rating="5"></span>
                        <span className="g-color-gray-dark-v5">Relevance 5.0 out of 4902 votes</span>
                      </div>
                      {/* <!-- End Search Rating --> */}
  
                      {/* <!-- Share, Print and More --> */}
                      <ul className="list-inline mb-0">
                        <li className="list-inline-item g-mr-20">
                          <a className="u-link-v5 g-color-gray-dark-v5 g-color-primary--hover" href="#">
                            <i className="icon-share g-pos-rel g-top-1 g-mr-5"></i> Share
                          </a>
                        </li>
                        <li className="list-inline-item g-mr-20">
                          <a className="u-link-v5 g-color-gray-dark-v5 g-color-primary--hover" href="#">
                            <i className="icon-printer g-pos-rel g-top-1 g-mr-5"></i> Print
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <div className="dropdown g-mb-10 g-mb-0--md">
                            <span className="d-block g-color-gray-dark-v5 g-color-primary--hover g-cursor-pointer" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                              <i className="icon-arrow-down-circle g-pos-rel g-top-1"></i> More
                            </span>
                            <div className="dropdown-menu dropdown-menu-right rounded-0 g-mt-10">
                              <a className="dropdown-item g-px-10" href="#">
                                <i className="icon-directions g-font-size-12 g-color-gray-dark-v5 g-mr-5"></i> Report
                              </a>
                              <a className="dropdown-item g-px-10" href="#">
                                <i className="icon-star g-font-size-12 g-color-gray-dark-v5 g-mr-5"></i> Save
                              </a>
                              <a className="dropdown-item g-px-10" href="#">
                                <i className="icon-question g-font-size-12 g-color-gray-dark-v5 g-mr-5"></i> Info
                              </a>
                              <a className="dropdown-item g-px-10" href="#">
                                <i className="icon-cloud-download g-font-size-12 g-color-gray-dark-v5 g-mr-5"></i> Ger More Info
                              </a>
  
                              <div className="dropdown-divider"></div>
  
                              <a className="dropdown-item g-px-10" href="#">
                                <i className="icon-plus g-font-size-12 g-color-gray-dark-v5 g-mr-5"></i> View More
                              </a>
                            </div>
                          </div>
                        </li>
                      </ul>
                      {/* <!-- End Share, Print and More --> */}
                    </article>
                    {/* <!-- End Search Result --> */}
                  </div>
  
                  <div className="col-lg-6 g-mb-30">
                    {/* <!-- Search Result --> */}
                    <article className="g-pa-25 u-shadow-v11 rounded">
                      <h2 className="h4 g-mb-15">
                        <a className="u-link-v5 g-color-gray-dark-v1 g-color-primary--hover" href="#">Stream - Bootstrap 4 UI Kit Pro Freebie</a>
                      </h2>
  
                      {/* <!-- Search Info --> */}
                      <ul className="list-inline d-flex justify-content-between g-mb-20">
                        <li className="list-inline-item g-mr-20">
                          <img className="g-height-25 g-width-25 rounded-circle g-mr-5" src={UserImage} alt="Image Description" /> <a className="u-link-v5 g-color-main g-color-primary--hover" href="#">Htmlstream</a>
                        </li>
                        <li className="list-inline-item">
                          <i className="icon-eye g-pos-rel g-top-1 g-color-gray-dark-v5 g-mr-5"></i> 168,273
                        </li>
                      </ul>
                      {/* <!-- End Search Info --> */}
  
                      <p className="g-mb-15">Nullam elementum tincidunt massa, a pulvinar leo ultricies ut. Ut fringilla lectus tellusimp imperdiet molestie est volutpat at, sed viverra cursus nibh. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.</p>
  
                      {/* <!-- Search Rating --> */}
                      <div className="g-mb-15">
                        <span className="js-rating g-color-primary mr-2" data-rating="4"></span>
                        <span className="g-color-gray-dark-v5">Relevance 4.0 out of 2029 votes</span>
                      </div>
                      {/* <!-- End Search Rating --> */}
  
                      {/* <!-- Share, Print and More --> */}
                      <ul className="list-inline mb-0">
                        <li className="list-inline-item g-mr-20">
                          <a className="u-link-v5 g-color-gray-dark-v5 g-color-primary--hover" href="#">
                            <i className="icon-share g-pos-rel g-top-1 g-mr-5"></i> Share
                          </a>
                        </li>
                        <li className="list-inline-item g-mr-20">
                          <a className="u-link-v5 g-color-gray-dark-v5 g-color-primary--hover" href="#">
                            <i className="icon-printer g-pos-rel g-top-1 g-mr-5"></i> Print
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <div className="dropdown g-mb-10 g-mb-0--md">
                            <span className="d-block g-color-gray-dark-v5 g-color-primary--hover g-cursor-pointer" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                              <i className="icon-arrow-down-circle g-pos-rel g-top-1"></i> More
                            </span>
                            <div className="dropdown-menu dropdown-menu-right rounded-0 g-mt-10">
                              <a className="dropdown-item g-px-10" href="#">
                                <i className="icon-directions g-font-size-12 g-color-gray-dark-v5 g-mr-5"></i> Report
                              </a>
                              <a className="dropdown-item g-px-10" href="#">
                                <i className="icon-star g-font-size-12 g-color-gray-dark-v5 g-mr-5"></i> Save
                              </a>
                              <a className="dropdown-item g-px-10" href="#">
                                <i className="icon-question g-font-size-12 g-color-gray-dark-v5 g-mr-5"></i> Info
                              </a>
                              <a className="dropdown-item g-px-10" href="#">
                                <i className="icon-cloud-download g-font-size-12 g-color-gray-dark-v5 g-mr-5"></i> Ger More Info
                              </a>
  
                              <div className="dropdown-divider"></div>
  
                              <a className="dropdown-item g-px-10" href="#">
                                <i className="icon-plus g-font-size-12 g-color-gray-dark-v5 g-mr-5"></i> View More
                              </a>
                            </div>
                          </div>
                        </li>
                      </ul>
                      {/* <!-- End Share, Print and More --> */}
                    </article>
                    {/* <!-- End Search Result --> */}
                  </div>
                </div>
  
                <div className="row">
                  <div className="col-lg-6 g-mb-30">
                    {/* <!-- Search Result --> */}
                    <article className="g-pa-25 u-shadow-v11 rounded">
                      <h2 className="h4 g-mb-15">
                        <a className="u-link-v5 g-color-gray-dark-v1 g-color-primary--hover" href="#">Dribbble Mockups - PSD Freebies For Themes</a>
                      </h2>
  
                      {/* <!-- Search Info --> */}
                      <ul className="list-inline d-flex justify-content-between g-mb-20">
                        <li className="list-inline-item g-mr-10">
                          <img className="g-height-25 g-width-25 rounded-circle g-mr-5" src={UserImage} alt="Image Description" /> <a className="u-link-v5 g-color-main g-color-primary--hover" href="#">David Miller</a>
                        </li>
                        <li className="list-inline-item">
                          <i className="icon-eye g-pos-rel g-top-1 g-color-gray-dark-v5 g-mr-5"></i> 201,032
                        </li>
                      </ul>
                      {/* <!-- End Search Info --> */}
  
                      <p className="g-mb-15">Nullam elementum tincidunt massa, a pulvinar leo ultricies ut. Ut fringilla lectus tellusimp imperdiet molestie est volutpat at, sed viverra cursus nibh. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.</p>
  
                      {/* <!-- Search Rating --> */}
                      <div className="g-mb-15">
                        <span className="js-rating g-color-gray-light-v2 mr-2" data-rating="0"></span>
                        <span className="g-color-gray-dark-v5"> Unknown rating</span>
                      </div>
                      {/* <!-- End Search Rating --> */}
  
                      {/* <!-- Share, Print and More --> */}
                      <ul className="list-inline mb-0">
                        <li className="list-inline-item g-mr-20">
                          <a className="u-link-v5 g-color-gray-dark-v5 g-color-primary--hover" href="#">
                            <i className="icon-share g-pos-rel g-top-1 g-mr-5"></i> Share
                          </a>
                        </li>
                        <li className="list-inline-item g-mr-20">
                          <a className="u-link-v5 g-color-gray-dark-v5 g-color-primary--hover" href="#">
                            <i className="icon-printer g-pos-rel g-top-1 g-mr-5"></i> Print
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <div className="dropdown g-mb-10 g-mb-0--md">
                            <span className="d-block g-color-gray-dark-v5 g-color-primary--hover g-cursor-pointer" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                              <i className="icon-arrow-down-circle g-pos-rel g-top-1"></i> More
                            </span>
                            <div className="dropdown-menu dropdown-menu-right rounded-0 g-mt-10">
                              <a className="dropdown-item g-px-10" href="#">
                                <i className="icon-directions g-font-size-12 g-color-gray-dark-v5 g-mr-5"></i> Report
                              </a>
                              <a className="dropdown-item g-px-10" href="#">
                                <i className="icon-star g-font-size-12 g-color-gray-dark-v5 g-mr-5"></i> Save
                              </a>
                              <a className="dropdown-item g-px-10" href="#">
                                <i className="icon-question g-font-size-12 g-color-gray-dark-v5 g-mr-5"></i> Info
                              </a>
                              <a className="dropdown-item g-px-10" href="#">
                                <i className="icon-cloud-download g-font-size-12 g-color-gray-dark-v5 g-mr-5"></i> Ger More Info
                              </a>
  
                              <div className="dropdown-divider"></div>
  
                              <a className="dropdown-item g-px-10" href="#">
                                <i className="icon-plus g-font-size-12 g-color-gray-dark-v5 g-mr-5"></i> View More
                              </a>
                            </div>
                          </div>
                        </li>
                      </ul>
                      {/* <!-- End Share, Print and More --> */}
                    </article>
                    {/* <!-- End Search Result --> */}
                  </div>
  
                  <div className="col-lg-6 g-mb-30">
                    {/* <!-- Search Result --> */}
                    <article className="g-pa-25 u-shadow-v11 rounded">
                      <h2 className="h4 g-mb-15">
                        <a className="u-link-v5 g-color-gray-dark-v1 g-color-primary--hover" href="#">Pixel UI Kit - Over 300 Sketch Layouts</a>
                      </h2>
  
                      {/* <!-- Search Info --> */}
                      <ul className="list-inline d-flex justify-content-between g-mb-20">
                        <li className="list-inline-item g-mr-20">
                          <img className="g-height-25 g-width-25 rounded-circle g-mr-5" src={UserImage} alt="Image Description" /> <a className="u-link-v5 g-color-main g-color-primary--hover" href="#">Pixeel Ltd</a>
                        </li>
                        <li className="list-inline-item">
                          <i className="icon-eye g-pos-rel g-top-1 g-color-gray-dark-v5 g-mr-5"></i> 442,371
                        </li>
                      </ul>
                      {/* <!-- End Search Info --> */}
  
                      <p className="g-mb-15">Nullam elementum tincidunt massa, a pulvinar leo ultricies ut. Ut fringilla lectus tellusimp imperdiet molestie est volutpat at, sed viverra cursus nibh. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.</p>
  
                      {/* <!-- Search Rating --> */}
                      <div className="g-mb-15">
                        <span className="js-rating g-color-primary mr-2" data-rating="4"></span>
                        <span className="g-color-gray-dark-v5">Relevance 4.0 out of 2029 votes</span>
                      </div>
                      {/* <!-- End Search Rating --> */}
  
                      {/* <!-- Share, Print and More --> */}
                      <ul className="list-inline mb-0">
                        <li className="list-inline-item g-mr-20">
                          <a className="u-link-v5 g-color-gray-dark-v5 g-color-primary--hover" href="#">
                            <i className="icon-share g-pos-rel g-top-1 g-mr-5"></i> Share
                          </a>
                        </li>
                        <li className="list-inline-item g-mr-20">
                          <a className="u-link-v5 g-color-gray-dark-v5 g-color-primary--hover" href="#">
                            <i className="icon-printer g-pos-rel g-top-1 g-mr-5"></i> Print
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <div className="dropdown g-mb-10 g-mb-0--md">
                            <span className="d-block g-color-gray-dark-v5 g-color-primary--hover g-cursor-pointer" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                              <i className="icon-arrow-down-circle g-pos-rel g-top-1"></i> More
                            </span>
                            <div className="dropdown-menu dropdown-menu-right rounded-0 g-mt-10">
                              <a className="dropdown-item g-px-10" href="#">
                                <i className="icon-directions g-font-size-12 g-color-gray-dark-v5 g-mr-5"></i> Report
                              </a>
                              <a className="dropdown-item g-px-10" href="#">
                                <i className="icon-star g-font-size-12 g-color-gray-dark-v5 g-mr-5"></i> Save
                              </a>
                              <a className="dropdown-item g-px-10" href="#">
                                <i className="icon-question g-font-size-12 g-color-gray-dark-v5 g-mr-5"></i> Info
                              </a>
                              <a className="dropdown-item g-px-10" href="#">
                                <i className="icon-cloud-download g-font-size-12 g-color-gray-dark-v5 g-mr-5"></i> Ger More Info
                              </a>
  
                              <div className="dropdown-divider"></div>
  
                              <a className="dropdown-item g-px-10" href="#">
                                <i className="icon-plus g-font-size-12 g-color-gray-dark-v5 g-mr-5"></i> View More
                              </a>
                            </div>
                          </div>
                        </li>
                      </ul>
                      {/* <!-- End Share, Print and More --> */}
                    </article>
                    {/* <!-- End Search Result --> */}
                  </div>
                </div>
  
                <div className="row">
                  <div className="col-lg-6 g-mb-30">
                    {/* <!-- Search Result --> */}
                    <article className="g-pa-25 u-shadow-v11 rounded">
                      <h2 className="h4 g-mb-15">
                        <a className="u-link-v5 g-color-gray-dark-v1 g-color-primary--hover" href="#">Admin UI Kit - Free PSD &amp; Sketch</a>
                      </h2>
  
                      {/* <!-- Search Info --> */}
                      <ul className="list-inline d-flex justify-content-between g-mb-20">
                        <li className="list-inline-item g-mr-20">
                          <img className="g-height-25 g-width-25 rounded-circle g-mr-5" src={UserImage} alt="Image Description" /> <a className="u-link-v5 g-color-main g-color-primary--hover" href="#">Sally Manning</a>
                        </li>
                        <li className="list-inline-item">
                          <i className="icon-eye g-pos-rel g-top-1 g-color-gray-dark-v5 g-mr-5"></i> 132,849
                        </li>
                      </ul>
                      {/* <!-- End Search Info --> */}
  
                      <p className="g-mb-15">Nullam elementum tincidunt massa, a pulvinar leo ultricies ut. Ut fringilla lectus tellusimp imperdiet molestie est volutpat at, sed viverra cursus nibh. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.</p>
  
                      {/* <!-- Search Rating --> */}
                      <div className="g-mb-15">
                        <span className="js-rating g-color-primary mr-2" data-rating="4.5"></span>
                        <span className="g-color-gray-dark-v5">Relevance 4.5 out of 1393 votes</span>
                      </div>
                      {/* <!-- End Search Rating --> */}
  
                      {/* <!-- Share, Print and More --> */}
                      <ul className="list-inline mb-0">
                        <li className="list-inline-item g-mr-20">
                          <a className="u-link-v5 g-color-gray-dark-v5 g-color-primary--hover" href="#">
                            <i className="icon-share g-pos-rel g-top-1 g-mr-5"></i> Share
                          </a>
                        </li>
                        <li className="list-inline-item g-mr-20">
                          <a className="u-link-v5 g-color-gray-dark-v5 g-color-primary--hover" href="#">
                            <i className="icon-printer g-pos-rel g-top-1 g-mr-5"></i> Print
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <div className="dropdown g-mb-10 g-mb-0--md">
                            <span className="d-block g-color-gray-dark-v5 g-color-primary--hover g-cursor-pointer" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                              <i className="icon-arrow-down-circle g-pos-rel g-top-1"></i> More
                            </span>
                            <div className="dropdown-menu dropdown-menu-right rounded-0 g-mt-10">
                              <a className="dropdown-item g-px-10" href="#">
                                <i className="icon-directions g-font-size-12 g-color-gray-dark-v5 g-mr-5"></i> Report
                              </a>
                              <a className="dropdown-item g-px-10" href="#">
                                <i className="icon-star g-font-size-12 g-color-gray-dark-v5 g-mr-5"></i> Save
                              </a>
                              <a className="dropdown-item g-px-10" href="#">
                                <i className="icon-question g-font-size-12 g-color-gray-dark-v5 g-mr-5"></i> Info
                              </a>
                              <a className="dropdown-item g-px-10" href="#">
                                <i className="icon-cloud-download g-font-size-12 g-color-gray-dark-v5 g-mr-5"></i> Ger More Info
                              </a>
  
                              <div className="dropdown-divider"></div>
  
                              <a className="dropdown-item g-px-10" href="#">
                                <i className="icon-plus g-font-size-12 g-color-gray-dark-v5 g-mr-5"></i> View More
                              </a>
                            </div>
                          </div>
                        </li>
                      </ul>
                      {/* <!-- End Share, Print and More --> */}
                    </article>
                    {/* <!-- End Search Result --> */}
                  </div>
                </div>
  
                <hr className="g-brd-gray-light-v4 g-mt-10 g-mb-40" />
  
                {/* <!-- Pagination --> */}
                <nav className="g-mb-50" aria-label="Page Navigation">
                  <ul className="list-inline">
                    <li className="list-inline-item">
                      <a className="u-pagination-v1__item u-pagination-v1-5 rounded g-pa-4-13" href="#" aria-label="Previous">
                      <span aria-hidden="true">
                        <i className="fa fa-angle-left"></i>
                      </span>
                        <span className="sr-only">Previous</span>
                      </a>
                    </li>
                    <li className="list-inline-item hidden-sm-down">
                      <a className="u-pagination-v1__item u-pagination-v1-5 u-pagination-v1-5--active rounded g-pa-4-11" href="#">1</a>
                    </li>
                    <li className="list-inline-item hidden-sm-down">
                      <a className="u-pagination-v1__item u-pagination-v1-5 rounded g-pa-4-11" href="#">2</a>
                    </li>
                    <li className="list-inline-item hidden-sm-down">
                      <a className="u-pagination-v1__item u-pagination-v1-5 rounded g-pa-4-11" href="#">3</a>
                    </li>
                    <li className="list-inline-item hidden-sm-down">
                      <span className="g-pa-4-11">...</span>
                    </li>
                    <li className="list-inline-item hidden-sm-down">
                      <a className="u-pagination-v1__item u-pagination-v1-5 rounded g-pa-4-11" href="#">80</a>
                    </li>
                    <li className="list-inline-item">
                      <a className="u-pagination-v1__item u-pagination-v1-5 rounded g-pa-4-13" href="#" aria-label="Next">
                      <span aria-hidden="true">
                        <i className="fa fa-angle-right"></i>
                      </span>
                        <span className="sr-only">Next</span>
                      </a>
                    </li>
                    <li className="list-inline-item float-right">
                      <span className="u-pagination-v1__item-info g-pa-4-11">Page 1 of 80</span>
                    </li>
                  </ul>
                </nav>
                {/* <!-- End Pagination --> */}
  
                <h3 className="h5 g-color-gray-dark-v1 g-mb-20">Searches Related to Unify Template</h3>
  
                {/* <!-- Tags --> */}
                <ul className="u-list-inline mb-0">
                  <li className="list-inline-item g-mb-10">
                    <a className="u-tags-v1 g-color-main g-brd-around g-brd-gray-light-v3 g-bg-gray-dark-v2--hover g-brd-gray-dark-v2--hover g-color-white--hover rounded g-py-4 g-px-10" href="#">Wrapbootstrap</a>
                  </li>
                  <li className="list-inline-item g-mb-10">
                    <a className="u-tags-v1 g-color-main g-brd-around g-brd-gray-light-v3 g-bg-gray-dark-v2--hover g-brd-gray-dark-v2--hover g-color-white--hover rounded g-py-4 g-px-10" href="#">Web Design</a>
                  </li>
                  <li className="list-inline-item g-mb-10">
                    <a className="u-tags-v1 g-color-main g-brd-around g-brd-gray-light-v3 g-bg-gray-dark-v2--hover g-brd-gray-dark-v2--hover g-color-white--hover rounded g-py-4 g-px-10" href="#">Best Responsive Bootstrap Template</a>
                  </li>
                  <li className="list-inline-item g-mb-10">
                    <a className="u-tags-v1 g-color-main g-brd-around g-brd-gray-light-v3 g-bg-gray-dark-v2--hover g-brd-gray-dark-v2--hover g-color-white--hover rounded g-py-4 g-px-10" href="#">Thematic Pages</a>
                  </li>
                  <li className="list-inline-item g-mb-10">
                    <a className="u-tags-v1 g-color-main g-brd-around g-brd-gray-light-v3 g-bg-gray-dark-v2--hover g-brd-gray-dark-v2--hover g-color-white--hover rounded g-py-4 g-px-10" href="#">Corporate &amp; Business Template</a>
                  </li>
                  <li className="list-inline-item g-mb-10">
                    <a className="u-tags-v1 g-color-main g-brd-around g-brd-gray-light-v3 g-bg-gray-dark-v2--hover g-brd-gray-dark-v2--hover g-color-white--hover rounded g-py-4 g-px-10" href="#">SASS</a>
                  </li>
                </ul>
                {/* <!-- End Tags --> */}
              </div>
              {/* <!-- End Search Results --> */}
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default Search
