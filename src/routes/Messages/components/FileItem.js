import React from 'react';
import PropTypes from 'prop-types';

import DefaultUserPicture from '../../../assets/defaultUserPicture.jpg';

class FileItem extends React.Component {
  static propTypes = {   
    name: PropTypes.string.isRequired,
    
    onFileDelete: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);
  }

  onFileDelete = () => {
    this.props.onFileDelete(this.props.name);
  }
  render () {
    return (
      <tr>
        <td className="align-middle text-nowrap text-center" width="10%">
          <img className="g-brd-around g-brd-gray-light-v4 g-pa-2 g-width-50 g-height-50 rounded-circle" src={DefaultUserPicture} data-toggle="tooltip" data-placement="top" data-original-title="Pixeel Ltd" alt="Image Description" />
        </td>
        <td className="align-middle" width="80%">{this.props.name}</td>                              
        <td className="align-middle text-nowrap text-center" width="10%">                                
          <a onClick={this.onFileDelete} className="g-color-gray-dark-v5 g-text-underline--none--hover g-pa-5" data-toggle="tooltip" data-placement="top" data-original-title="Delete">
            <i className="icon-trash g-font-size-18 g-mr-7"></i>
          </a>
        </td>
      </tr>
    )
  }
}

export default FileItem;
