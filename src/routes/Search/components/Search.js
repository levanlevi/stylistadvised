import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

import auth from '../../auth/modules/auth';
import Display from '../../Parts/Display';
import Header from '../../Parts/Header';

import Item from './SearchItem';

class Search extends React.Component {
  static propTypes = {
    users: PropTypes.array.isRequired,
  }

  constructor(props) {
    super(props);
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
        <Item user={user} />
      </div>
    );

    return (
      <div>
        <Header isTransparent={false}></Header>

        <Display if={false}>
          <h2>Loading...</h2>
        </Display>
        <Display if={true}>
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
        </Display>        
      </div>
    )
  }
}

export default Search;
