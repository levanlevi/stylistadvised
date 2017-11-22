import React from 'react';
import PropTypes from 'prop-types';

class Display extends React.Component {
  static propTypes = {
    if: PropTypes.bool.isRequired,
  }

  render() {
		return (this.props.if) ? <div>{this.props.children}</div> : null;
	}
}

export default Display;
