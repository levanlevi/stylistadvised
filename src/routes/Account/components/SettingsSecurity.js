import React from 'react';
import PropTypes from 'prop-types';

class SettingsSecurity extends React.Component {
  static propTypes = {
    password: PropTypes.string,
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
      user: {
        password: this.props.password,
      }
    };

    this.changePassword = this.changePassword.bind(this);

    this.submit = this.submit.bind(this);
  }

  componentDidMount() {
    // Form Focus
    $.HSCore.helpers.HSFocusState.init();
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
      this.props.submit(this.state.user);
    }
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
                <input onChange={this.changePassword} name="current" className="form-control form-control-md border-right-0 rounded-0 g-py-13 pr-0" type="password" placeholder="Current password" />
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
                <input onChange={this.changePassword} name="new" className="form-control form-control-md border-right-0 rounded-0 g-py-13 pr-0" type="password" placeholder="New password" />
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
                <input onChange={this.changePassword} name="verify" className="form-control form-control-md border-right-0 rounded-0 g-py-13 pr-0" type="password" placeholder="Verify password" />
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

export default SettingsSecurity;
