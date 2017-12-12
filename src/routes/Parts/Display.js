import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Display extends Component {
  static propTypes = {
    if: PropTypes.bool.isRequired,
  }

  render() {
		return (this.props.if) ? <div>{this.props.children}</div> : null;
	}
}
