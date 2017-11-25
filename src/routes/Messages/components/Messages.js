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

        
      </div>
    )
  }
}

export default Messages;
