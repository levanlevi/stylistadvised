import React from 'react';
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

export default class Search extends React.Component {
  static propTypes = {
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

    const page = this.props.routeParams.page;

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
                countOfItems={79}
                currentPage={9}
                itemsOnPage={5}>                
              </Pagination>
              {/* <!-- End Pagination --> */}
      
            </div>
          </section>
        </Display>        
      </div>
    )
  }
}
