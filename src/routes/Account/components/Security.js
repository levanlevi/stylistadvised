import React from 'react';
import PropTypes from 'prop-types';

class Security extends React.Component {
  static propTypes = {
    password: PropTypes.string,
    submit: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);

    this.state = {
      password: this.props.password,
    };

    this.savedPassword = this.props.password;

    this.setCurrentPassword = this.setCurrentPassword.bind(this);
    this.setNewPassword = this.setNewPassword.bind(this);
    this.setVerifyPassword = this.setVerifyPassword.bind(this);

    this.cancel = this.cancel.bind(this);
    this.submit = this.submit.bind(this);
  }

  componentDidMount() {
    // Form Focus
    $.HSCore.helpers.HSFocusState.init();
  }

  setCurrentPassword(event) {
    //this.setState({ password: event.target.value });
  }

  setNewPassword(event) {
    //this.setState({ password: event.target.value });
  }

  setVerifyPassword(event) {
    //this.setState({ password: event.target.value });
  }

  cancel() {
    this.setState({ password: this.savedPassword });
  }

  submit() {
    this.props.submit(this.state);
  }

  render () {
    return (
      <div>
        <h2 className="h4 g-font-weight-300">Security Settings</h2>
        <p className="g-mb-25">Reset your password, change verifications and so on.</p>

        <form>
          {/* <!-- Current Password --> */}
          <div className="form-group row g-mb-25">
            <label className="col-sm-3 col-form-label g-color-gray-dark-v2 g-font-weight-700 text-sm-right g-mb-10">Current password</label>
            <div className="col-sm-9">
              <div className="input-group g-brd-primary--focus">
                <input onChange={this.setCurrentPassword} className="form-control form-control-md border-right-0 rounded-0 g-py-13 pr-0" type="password" placeholder="Current password" />
                <div className="input-group-addon d-flex align-items-center g-bg-white g-color-gray-light-v1 rounded-0">
                  <i className="icon-lock"></i>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- End Current Password --> */}

          {/* <!-- New Password --> */}
          <div className="form-group row g-mb-25">
            <label className="col-sm-3 col-form-label g-color-gray-dark-v2 g-font-weight-700 text-sm-right g-mb-10">New password</label>
            <div className="col-sm-9">
              <div className="input-group g-brd-primary--focus">
                <input onChange={this.setNewPassword} className="form-control form-control-md border-right-0 rounded-0 g-py-13 pr-0" type="password" placeholder="New password" />
                <div className="input-group-addon d-flex align-items-center g-bg-white g-color-gray-light-v1 rounded-0">
                  <i className="icon-lock"></i>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- End New Password --> */}

          {/* <!-- Verify Password --> */}
          <div className="form-group row g-mb-25">
            <label className="col-sm-3 col-form-label g-color-gray-dark-v2 g-font-weight-700 text-sm-right g-mb-10">Verify password</label>
            <div className="col-sm-9">
              <div className="input-group g-brd-primary--focus">
                <input onChange={this.setVerifyPassword} className="form-control form-control-md border-right-0 rounded-0 g-py-13 pr-0" type="password" placeholder="Verify password" />
                <div className="input-group-addon d-flex align-items-center g-bg-white g-color-gray-light-v1 rounded-0">
                  <i className="icon-lock"></i>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- End Verify Password --> */}

          <hr className="g-brd-gray-light-v4 g-my-25" />

          <div className="text-sm-right">
            <a className="btn u-btn-darkgray rounded-0 g-py-12 g-px-25 g-mr-10" href="#">Cancel</a>
            <a className="btn u-btn-primary rounded-0 g-py-12 g-px-25" href="#">Save Changes</a>
          </div>
        </form>
      </div>
    )
  }
}

export default Security
