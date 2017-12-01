import React from 'react';
import PropTypes from 'prop-types';

const dangerAlertStyle = 'alert alert-dismissible fade show g-bg-red g-color-white rounded-0';
const dangerIconStyle = 'icon-ban g-font-size-25';

const successAlertStyle = 'alert alert-dismissible fade show g-bg-teal g-color-white rounded-0';
const successIconStyle = 'icon-check g-font-size-25';

const warningAlertStyle = 'alert alert-dismissible fade show g-bg-yellow rounded-0';
const warningIconStyle = 'icon-info g-font-size-25';

class Toast extends React.Component {
  static propTypes = {
    type: PropTypes.string,
    title: PropTypes.string,
    content: PropTypes.string,
  }

  constructor(props) {
    super(props);
  }

  render() {
    let alertStyle = successAlertStyle;
    let iconStyle = successIconStyle;
    if ('danger' === this.props.type) {
      alertStyle = dangerAlertStyle;
      iconStyle = dangerIconStyle;
    } else if ('warning' === this.props.type) {
      alertStyle = warningAlertStyle;
      iconStyle = warningIconStyle;
    }

    const title = this.props.title;
    const content = this.props.content;

		return (
      <div className={alertStyle} role="alert">
        <button type="button" className="close u-alert-close--light" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">×</span>
        </button>
  
        <div className="media">
          <span className="d-flex g-mr-10 g-mt-5">
            <i className={iconStyle}></i>
          </span>
          <span className="media-body align-self-center">
            <strong>{title}</strong> {content}
          </span>
        </div>
      </div>
    )
	}
}

export default Toast;
