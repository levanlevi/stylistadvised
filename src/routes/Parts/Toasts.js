import React from 'react';
import PropTypes from 'prop-types';

class Toasts extends React.Component {
  static propTypes = {
    toasts: PropTypes.array.isRequired,
  }

  constructor(props) {
    super(props);
  }

  render() {
		return (
      <div class="row">
        <div class="col-lg-6">
          {this.props.toasts.map((toast, index) => {
            return (
              <Toast
                type={toast.type}
                title={toast.title}
                content={toast.content}
                key={index} />
            );
          })}
        </div>
      </div>
    )
	}
}

export default Toasts;
