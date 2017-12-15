import React, { Component } from 'react';

export default class Spinner extends Component {

  render() {
		return (
      <div className="row">
        <div className="col-lg-4 offset-lg-4 g-mt-50 text-center">
          <i className="fa fa-spinner fa-pulse fa-5x fa-fw"></i>
        </div>
      </div>
    );
	}
}
