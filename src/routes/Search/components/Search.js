import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

import Item from './SearchItem';

import auth from '../../auth/modules/auth';

class Search extends React.Component {
  static propTypes = {
    users: PropTypes.array.isRequired,
  }

  componentDidMount() {
    // initialization of rating
    $.HSCore.components.HSRating.init($('.js-rating'), {
      spacing: 2
    });
  }

  render () {
    const listItems = this.props.users.map((user, index) =>
      <div key={index}>
        <Item
          firstName={user.fname}
          lastName={user.lname}
          name={user.name}
          email={user.email}
          picture={user.picture}
        />
        <hr className="g-brd-gray-light-v4 g-my-40" />
      </div>
    );

    return (
      <div>
        <header id="js-header" className="u-header u-header--static">
          <div className="u-header__section u-header__section--dark g-bg-black g-transition-0_3 g-py-10">
            <nav className="js-mega-menu navbar navbar-expand-lg">
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

                    <li className="nav-item g-ml-20--lg g-mr-0--lg">
                      <div className="btn-group">
                        <button className="btn btn-primary btn-sm dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          {JSON.parse(auth.getUser()).name}
                        </button>
                        <div className="dropdown-menu">
                          <a className="dropdown-item" href={'/account/' + auth.getUserId()}>Account</a>
                          <div className="dropdown-divider"></div>
                          <a onClick={this.logout} className="dropdown-item" href="/">Logout</a>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </header>

        <section className="g-pt-50 g-pb-90">
          <div className="container">            
    
            {listItems}
    
            {/* <!-- Pagination --> */}
            <nav className="g-mb-50" aria-label="Page Navigation">
              <ul className="list-inline">
                <li className="list-inline-item">
                  <a className="u-pagination-v1__item u-pagination-v1-5 rounded g-pa-4-13" href="#!" aria-label="Previous">
                    <span aria-hidden="true">
                      <i className="fa fa-angle-left"></i>
                    </span>
                    <span className="sr-only">Previous</span>
                  </a>
                </li>
                <li className="list-inline-item g-hidden-sm-down">
                  <a className="u-pagination-v1__item u-pagination-v1-5 u-pagination-v1-5--active rounded g-pa-4-11" href="#!">1</a>
                </li>
                <li className="list-inline-item g-hidden-sm-down">
                  <a className="u-pagination-v1__item u-pagination-v1-5 rounded g-pa-4-11" href="#!">2</a>
                </li>
                <li className="list-inline-item g-hidden-sm-down">
                  <a className="u-pagination-v1__item u-pagination-v1-5 rounded g-pa-4-11" href="#!">3</a>
                </li>
                <li className="list-inline-item g-hidden-sm-down">
                  <span className="g-pa-4-11">...</span>
                </li>
                <li className="list-inline-item g-hidden-sm-down">
                  <a className="u-pagination-v1__item u-pagination-v1-5 rounded g-pa-4-11" href="#!">80</a>
                </li>
                <li className="list-inline-item">
                  <a className="u-pagination-v1__item u-pagination-v1-5 rounded g-pa-4-13" href="#!" aria-label="Next">
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
    
          </div>
        </section>
      </div>
    )
  }
}

export default Search;
