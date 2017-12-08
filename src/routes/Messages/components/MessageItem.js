import React from 'react';
import PropTypes from 'prop-types';

import DefaultUserPicture from '../../../assets/defaultUserPicture.jpg';

const oddMediaStyle = 'media g-brd-top g-brd-gray-light-v4 g-pt-30 g-mb-30';
const evenMediaStyle = 'media g-brd-top g-brd-gray-light-v4 g-pt-30 g-ml-40 g-mb-30';

class MessageItem extends React.Component {
  static propTypes = {
    isOddMessage: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,    
    userName: PropTypes.string.isRequired,    
  }

  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div className={this.props.isOddMessage ? oddMediaStyle : evenMediaStyle}>
        <img className="d-flex g-width-60 g-height-60 rounded-circle g-mt-3 g-mr-15" src={DefaultUserPicture} alt="Image Description" />
        <div className="media-body">
          <div className="d-flex align-items-start g-mb-15 g-mb-10--sm">
            <div className="d-block">
              <h5 className="h6">{this.props.userName}</h5>
              <span className="d-block g-color-gray-dark-v5 g-font-size-11">{this.props.time}</span>
            </div>
          </div>
          <p>{this.props.text}</p>
        </div>
      </div>
    )
  }
}

export default MessageItem;
