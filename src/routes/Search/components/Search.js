import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

const _ = require('underscore');
const io = require('socket.io-client');
const config = require('../../../../config');

import auth from '../../auth/modules/auth';
import Display from '../../Parts/Display';
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

  render () {
    const listItems = this.state.users.map((user, index) =>
      <div key={index}>
        <Item user={user} />
      </div>
    );

    const pathName = this.props.location.pathname;
    const page = this.props.routeParams.page;console.log(this.props);

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
              <Pagination
                countOfItems={this.props.count}
                currentPage={page ? +page : 1}
                itemsOnPage={this.props.itemsOnPage}
                pathName={page ? '' : pathName.slice(1) + '/'}>
              </Pagination>
              {/* <!-- End Pagination --> */}
      
            </div>
          </section>
        </Display>        
      </div>
    )
  }
}
