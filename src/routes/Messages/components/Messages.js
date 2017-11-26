import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

import auth from '../../auth/modules/auth';
import Display from '../../Parts/Display';
import Header from '../../Parts/Header';

import DefaultUserPicture from '../../../assets/defaultUserPicture.jpg';

class Messages extends React.Component {
  static propTypes = {
    messages: PropTypes.array.isRequired,
  }

  constructor(props) {
    super(props);

    this.state = {
      navigation: {
        contacts: true,
        settings: false,
      },
      navigationStyle: {
        contacts: 'listGroupItemActiveStyle',
        settings: 'listGroupItemStyle',
      },
    };
  }  

  render () {
    return (
      <div>
        <Header isTransparent={false}></Header>

        <section className="g-my-20 g-mb-100">
          <div className="container">
            <div className="row">
              {/* <!-- Profile Sidebar --> */}
              <div className="col-lg-3 g-mb-50 g-mb-0--lg">
                
                {/* <!-- Sidebar Navigation --> */}
                <div className="list-group list-group-border-0 g-mb-40">                  

                  {/* <!-- Comments --> */}
                  <a href="page-profile-comments-1.html" className="list-group-item justify-content-between active">
                    <span><i className="icon-bubbles g-pos-rel g-top-1 g-mr-8"></i> Comments</span>
                    <span className="u-label g-font-size-11 g-bg-primary g-rounded-20 g-px-8">24</span>
                  </a>
                  {/* <!-- End Comments --> */}

                  {/* <!-- Comments --> */}
                  <a href="page-profile-comments-1.html" className="list-group-item justify-content-between">
                    <span><i className="icon-bubbles g-pos-rel g-top-1 g-mr-8"></i> Comments</span>
                  </a>
                  {/* <!-- End Comments --> */}

                  {/* <!-- Comments --> */}
                  <a href="page-profile-comments-1.html" className="list-group-item justify-content-between">
                    <span><i className="icon-bubbles g-pos-rel g-top-1 g-mr-8"></i> Comments</span>
                  </a>
                  {/* <!-- End Comments --> */}
                </div>
                {/* <!-- End Sidebar Navigation --> */}
                
              </div>
              {/* <!-- End Profile Sidebar --> */}

              {/* <!-- Profle Content --> */}
              <div className="col-lg-9">
                {/* <!-- Comments (Option 1) --> */}
                <div className="card border-0 g-mb-40">
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

                  {/* <!-- Panel Body --> */}
                  <div className="card-block g-pa-0">
                    <div className="media g-brd-around g-brd-gray-light-v4 g-pa-20 g-mb-20">
                      <img className="d-flex g-width-50 g-height-50 g-mt-3 g-mr-20" src={DefaultUserPicture} alt="Image Description" />
                      <div className="media-body">
                        <div className="d-sm-flex justify-content-sm-between align-items-sm-center g-mb-15 g-mb-10--sm">
                          <h5 className="h4 g-font-weight-300 g-mr-10 g-mb-5 g-mb-0--sm">James Coolman</h5>
                          <div className="text-nowrap g-font-size-12">
                            <span>2 days ago</span> / <a href="#!">Reply</a>
                          </div>
                        </div>

                        <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.</p>

                        <ul className="list-inline my-0">
                          <li className="list-inline-item g-mr-20">
                            <a className="g-color-gray-dark-v5 g-text-underline--none--hover" href="#!">
                              <i className="icon-like g-pos-rel g-top-1 g-mr-3"></i> 214
                            </a>
                          </li>
                          <li className="list-inline-item g-mr-20">
                            <a className="g-color-gray-dark-v5 g-text-underline--none--hover" href="#!">
                              <i className="icon-dislike g-pos-rel g-top-1 g-mr-3"></i> 35
                            </a>
                          </li>
                          <li className="list-inline-item g-mr-20">
                            <a className="g-color-gray-dark-v5 g-text-underline--none--hover" href="#!">
                              <i className="icon-share g-pos-rel g-top-1 g-mr-3"></i> 52
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="media g-brd-around g-brd-gray-light-v4 g-pa-20 g-ml-40 g-mb-20">
                      <img className="d-flex g-width-50 g-height-50 g-mt-3 g-mr-20" src={DefaultUserPicture} alt="Image Description" />
                      <div className="media-body">
                        <div className="d-sm-flex justify-content-sm-between align-items-sm-center g-mb-15 g-mb-10--sm">
                          <h5 className="h4 g-font-weight-300 g-mr-10 g-mb-5 g-mb-0--sm">Alberta Watson</h5>
                          <div className="text-nowrap g-font-size-12">
                            <span>7 hr ago</span> / <a href="#!">Reply</a>
                          </div>
                        </div>

                        <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.</p>

                        <ul className="list-inline g-mb-10 g-mb-20--md">
                          <li className="list-inline-item g-mb-10 g-mb-0--md">
                            <img className="g-width-100 g-height-100" src="../../assets/img-temp/100x100/img11.jpg" alt="Image Description" />
                          </li>
                          <li className="list-inline-item g-mb-10 g-mb-0--md">
                            <img className="g-width-100 g-height-100" src="../../assets/img-temp/100x100/img12.jpg" alt="Image Description" />
                          </li>
                          <li className="list-inline-item g-mb-10 g-mb-0--md">
                            <img className="g-width-100 g-height-100" src="../../assets/img-temp/100x100/img13.jpg" alt="Image Description" />
                          </li>
                          <li className="list-inline-item u-bg-overlay g-bg-black-opacity-0_5--after">
                            <img className="g-width-100 g-height-100" src="../../assets/img-temp/100x100/img8.jpg" alt="Image Description" />
                            <a className="u-link-v5 u-bg-overlay__inner g-absolute-centered g-color-white g-color-primary--hover text-center" href="#!">
                              <span className="g-font-size-20">10+</span> Photos
                            </a>
                          </li>
                        </ul>

                        <ul className="list-inline my-0">
                          <li className="list-inline-item g-mr-20">
                            <a className="g-color-gray-dark-v5 g-text-underline--none--hover" href="#!">
                              <i className="icon-like g-pos-rel g-top-1 g-mr-3"></i> 637
                            </a>
                          </li>
                          <li className="list-inline-item g-mr-20">
                            <a className="g-color-gray-dark-v5 g-text-underline--none--hover" href="#!">
                              <i className="icon-dislike g-pos-rel g-top-1 g-mr-3"></i> 08
                            </a>
                          </li>
                          <li className="list-inline-item g-mr-20">
                            <a className="g-color-gray-dark-v5 g-text-underline--none--hover" href="#!">
                              <i className="icon-share g-pos-rel g-top-1 g-mr-3"></i> 38
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="media g-brd-around g-brd-gray-light-v4 g-pa-20 g-mb-20">
                      <img className="d-flex g-width-50 g-height-50 g-mt-3 g-mr-20" src={DefaultUserPicture} alt="Image Description" />
                      <div className="media-body">
                        <div className="d-sm-flex justify-content-sm-between align-items-sm-center g-mb-15 g-mb-10--sm">
                          <h5 className="h4 g-font-weight-300 g-mr-10 g-mb-5 g-mb-0--sm">David Lee</h5>
                          <div className="text-nowrap g-font-size-12">
                            <span>2 days ago</span> / <a href="#!">Reply</a>
                          </div>
                        </div>

                        <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.</p>

                        <ul className="list-inline my-0">
                          <li className="list-inline-item g-mr-20">
                            <a className="g-color-gray-dark-v5 g-text-underline--none--hover" href="#!">
                              <i className="icon-like g-pos-rel g-top-1 g-mr-3"></i> 178
                            </a>
                          </li>
                          <li className="list-inline-item g-mr-20">
                            <a className="g-color-gray-dark-v5 g-text-underline--none--hover" href="#!">
                              <i className="icon-dislike g-pos-rel g-top-1 g-mr-3"></i> 14
                            </a>
                          </li>
                          <li className="list-inline-item g-mr-20">
                            <a className="g-color-gray-dark-v5 g-text-underline--none--hover" href="#!">
                              <i className="icon-share g-pos-rel g-top-1 g-mr-3"></i> 12
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <a className="btn btn-block u-btn-primary rounded-0 g-py-13" href="#!">Load More</a>
                  </div>
                  {/* <!-- End Panel Body --> */}
                </div>
                {/* <!-- End Comments (Option 1) --> */}
                
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
