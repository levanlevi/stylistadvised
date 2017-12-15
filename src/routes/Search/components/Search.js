import React, { Component } from 'react';
import PropTypes from 'prop-types';

const _ = require('underscore');
const io = require('socket.io-client');
const config = require('../../../../config');

import auth from '../../auth/modules/auth';
import Header from '../../Parts/Header';
import Pagination from '../../Parts/Pagination';

import Item from './SearchItem';

const away = 'away';
const online = 'online';
const offline = 'offline';

export default class Search extends Component {
  static propTypes = {    
    count: PropTypes.number.isRequired,
    itemsOnPage: PropTypes.number.isRequired,
    users: PropTypes.array.isRequired,
  }

  constructor(props) {
    super(props);

    this.state = {
      audience: [],
      users: this.props.users,
    }
  }

  componentWillMount() {
    this.socket = io(config.serverUrl);

    this.socket.on('audience', this.updateAudience);
  }

  componentDidMount() {
    // initialization of rating
    $.HSCore.components.HSRating.init($('.js-rating'), {
      spacing: 2
    });
  }

  updateAudience = (audience) => {
    let users = this.state.users.slice();
    users.map(user => {
      let onlineUser = _.findWhere(audience, { id: user._id });

      user.status = onlineUser ? online : away;
    })

    this.setState({ audience: audience });
    this.setState({ users: users });
  }

  sortByOnChange = (event) => {}

  render () {
    const listItems = this.state.users.map((user, index) =>
      <Item key={index} index={index} user={user} />
    );

    const countOfPages = Math.ceil(this.props.count / this.props.itemsOnPage);
    const pathName = this.props.location.pathname;
    const page = this.props.routeParams.page;

    return (
      <div>
        <Header isTransparent={false}></Header>

        <section className="g-pt-50 g-pb-90">
          <div className="container">
            <div className="row">

              {/* <!-- Sidebar --> */}
              <div className="col-lg-3 g-pr-40--lg g-mb-50 g-mb-0--lg">

                {/* <!-- Sort By --> */}
                <h2 className="h5 text-uppercase g-color-gray-dark-v1">Sort By</h2>
                <hr className="g-brd-gray-light-v4 g-my-15" />
                <div className="btn-group justified-content g-mb-40">
                  <label className="u-check">
                    <input onChange={this.sortByOnChange} className="g-hidden-xs-up g-pos-abs g-top-0 g-left-0" name="radGroupBtn1_1" type="radio" checked={true} />
                    <span className="btn btn-block u-btn-outline-lightgray g-color-white--checked g-bg-primary--checked rounded-0">Date Added</span>
                  </label>
                  <label className="u-check">
                    <input onChange={this.sortByOnChange} className="g-hidden-xs-up g-pos-abs g-top-0 g-left-0" name="radGroupBtn1_1" type="radio" checked={false} />
                    <span className="btn btn-block u-btn-outline-lightgray g-color-white--checked g-bg-primary--checked g-brd-left-none--md rounded-0">Relevance</span>
                  </label>
                </div>
                {/* <!-- End Sort By --> */}

              </div>
              {/* <!-- End Sidebar --> */}

              {/* <!-- Search Results --> */}
              <div className="col-lg-9">
                
                {/* <!-- Content --> */}
                <div className="row g-mb-40">
                  {listItems}
                </div>
                {/* <!-- End Content --> */}

                {/* <!-- Pagination --> */}
                <Pagination
                  countOfItems={this.props.count}
                  currentPage={(page && 0 < +page && countOfPages >= +page) ? +page : 1}
                  itemsOnPage={this.props.itemsOnPage}
                  pathName={page ? '' : pathName.slice(1) + '/'}>
                </Pagination>
                {/* <!-- End Pagination --> */}

              </div>
              {/* <!-- End Search Results --> */}
            </div>
          </div>
        </section>
      </div>
    )
  }
}
