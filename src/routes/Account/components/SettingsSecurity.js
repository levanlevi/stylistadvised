import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class SettingsSecurity extends Component {
  static propTypes = {
    user: PropTypes.object.isRequired,
    submit: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);

    this.state = {
      password: {
        current: "",
        new: "",
        verify: "",
      },      
      user: this.props.user,
    };

    this.changePassword = this.changePassword.bind(this);

    this.submit = this.submit.bind(this);
  }

  componentDidMount() {
    // Form Focus
    $.HSCore.helpers.HSFocusState.init();
    // Form Select
    $.HSCore.components.HSSelect.init('.js-custom-select');
  }

  changePassword(event) {
    const field = event.target.name;
    const password = this.state.password;
    password[field] = event.target.value;

    this.setState({ password });
  }

  submit() {
    if (this.state.user.password === this.state.password.current && this.state.password.new === this.state.password.verify) {
      this.state.user.password = this.state.password.new;
      this.props.submit();
    }
  }

  render () {
    return (
      <div>
        <h2 className="h4 g-font-weight-300">Security Settings</h2>
        <p className="g-mb-25">Reset your password, change verifications and so on.</p>

        <form>
          {/* <!-- Visibility --> */}          
          <div className="form-group row g-mb-25">
            <label className="col-sm-3 col-form-label g-color-gray-dark-v2 g-font-weight-700 text-sm-right g-mt-10 g-mb-10">Visibility</label>
            <div className="col-sm-9">
              <select defaultValue="0" className="js-custom-select u-select-v1 g-brd-gray-light-v2 g-color-gray-dark-v5 w-100 g-pt-11 g-pb-10" data-placeholder="Month" data-open-icon="fa fa-angle-down" data-close-icon="fa fa-angle-up">
                <option value="0">Public</option>
                <option value="1">Private</option>
              </select>
            </div>
          </div>
          {/* <!-- Visibility --> */}

          {/* <!-- Current Password --> */}
          <div className="form-group row g-mb-25">
            <label className="col-sm-3 col-form-label g-color-gray-dark-v2 g-font-weight-700 text-sm-right g-mt-10 g-mb-10">Current password</label>
            <div className="col-sm-9">
              <div className="input-group g-brd-primary--focus">
                <input onChange={this.changePassword} name="current" autoComplete="current-password" className="form-control form-control-md border-right-0 rounded-0 g-py-13 pr-0" type="password" placeholder="Current password" />
                <div className="input-group-addon d-flex align-items-center g-bg-white g-color-gray-light-v1 rounded-0">
                  <i className="icon-lock"></i>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- End Current Password --> */}

          {/* <!-- New Password --> */}
          <div className="form-group row g-mb-25">
            <label className="col-sm-3 col-form-label g-color-gray-dark-v2 g-font-weight-700 text-sm-right g-mt-10 g-mb-10">New password</label>
            <div className="col-sm-9">
              <div className="input-group g-brd-primary--focus">
                <input onChange={this.changePassword} name="new" autoComplete="new-password" className="form-control form-control-md border-right-0 rounded-0 g-py-13 pr-0" type="password" placeholder="New password" />
                <div className="input-group-addon d-flex align-items-center g-bg-white g-color-gray-light-v1 rounded-0">
                  <i className="icon-lock"></i>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- End New Password --> */}

          {/* <!-- Verify Password --> */}
          <div className="form-group row g-mb-25">
            <label className="col-sm-3 col-form-label g-color-gray-dark-v2 g-font-weight-700 text-sm-right g-mt-10 g-mb-10">Verify password</label>
            <div className="col-sm-9">
              <div className="input-group g-brd-primary--focus">
                <input onChange={this.changePassword} name="verify" autoComplete="new-password" className="form-control form-control-md border-right-0 rounded-0 g-py-13 pr-0" type="password" placeholder="Verify password" />
                <div className="input-group-addon d-flex align-items-center g-bg-white g-color-gray-light-v1 rounded-0">
                  <i className="icon-lock"></i>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- End Verify Password --> */}

          <hr className="g-brd-gray-light-v4 g-my-25" />

          <div className="text-sm-right">
            <a onClick={this.submit} className="btn u-btn-primary rounded-0 g-py-12 g-px-25" href="#">Save Changes</a>
          </div>
        </form>
      </div>
    )
  }
}
