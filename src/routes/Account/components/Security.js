import React from 'react';
import PropTypes from 'prop-types';

class Security extends React.Component {
  static propTypes = {
    securityState: PropTypes.object,
  }

  constructor(props) {
    super(props);

    this.state = {
      password: this.props.securityState.password,
    };

    this.setPassword = this.setPassword.bind(this);

    this.cancel = this.cancel.bind(this);
    this.submit = this.submit.bind(this);
  }

  componentDidMount() {
    // Form Focus
    $.HSCore.helpers.HSFocusState.init();
  }

  setPassword(event) {
    this.setState({ password: event.target.value });
  }

  cancel() {
    console.log('cancel');
  }

  submit() {
    console.log('Save Changes');
    //this.props.submit(this.state);
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
                <input className="form-control form-control-md border-right-0 rounded-0 g-py-13 pr-0" type="password" placeholder="Current password" />
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
                <input className="form-control form-control-md border-right-0 rounded-0 g-py-13 pr-0" type="password" placeholder="New password" />
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
                <input className="form-control form-control-md border-right-0 rounded-0 g-py-13 pr-0" type="password" placeholder="Verify password" />
                <div className="input-group-addon d-flex align-items-center g-bg-white g-color-gray-light-v1 rounded-0">
                  <i className="icon-lock"></i>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- End Verify Password --> */}

          {/* <!-- Login Verification --> */}
          <div className="form-group row g-mb-25">
            <label className="col-sm-3 col-form-label g-color-gray-dark-v2 g-font-weight-700 text-sm-right g-mb-10">Login verification</label>
            <div className="col-sm-9">
              <label className="form-check-inline u-check g-pl-25">
                <input className="hidden-xs-up g-pos-abs g-top-0 g-left-0" type="checkbox" />
                <div className="u-check-icon-checkbox-v4 g-absolute-centered--y g-left-0">
                  <i className="fa" data-check-icon=""></i>
                </div>
                Verify login requests
              </label>
              <small className="d-block text-muted">You need to add a phone to your profile account to enable this feature.</small>
            </div>
          </div>
          {/* <!-- End Login Verification --> */}

          {/* <!-- Password Reset --> */}
          <div className="form-group row g-mb-25">
            <label className="col-sm-3 col-form-label g-color-gray-dark-v2 g-font-weight-700 text-sm-right g-mb-10">Password reset</label>
            <div className="col-sm-9">
              <label className="form-check-inline u-check g-pl-25">
                <input className="hidden-xs-up g-pos-abs g-top-0 g-left-0" type="checkbox" />
                <div className="u-check-icon-checkbox-v4 g-absolute-centered--y g-left-0">
                  <i className="fa" data-check-icon=""></i>
                </div>
                Require personal information to reset my password
              </label>
              <small className="d-block text-muted">When you check this box, you will be required to verify additional information before you can request a password reset with just your email address.</small>
            </div>
          </div>
          {/* <!-- End Password Reset --> */}

          {/* <!-- Save Password --> */}
          <div className="form-group row g-mb-25">
            <label className="col-sm-3 col-form-label g-color-gray-dark-v2 g-font-weight-700 text-sm-right g-mb-10">Save password</label>
            <div className="col-sm-9">
              <label className="form-check-inline u-check mx-0">
                <input className="hidden-xs-up g-pos-abs g-top-0 g-right-0" name="savePassword" type="checkbox" />
                <div className="u-check-icon-radio-v7">
                  <i className="d-inline-block"></i>
                </div>
              </label>
              <small className="d-block text-muted">When you check this box, you will be saved automatically login to your profile account. Also, you will be always logged in all our services.</small>
            </div>
          </div>
          {/* <!-- End Save Password --> */}

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
