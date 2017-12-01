import React from 'react';
import PropTypes from 'prop-types';

class SettingsProfile extends React.Component {
  static propTypes = {
    user: PropTypes.object.isRequired,
    submit: PropTypes.func.isRequired,
    updateUser: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);

    this.state = {
      user: this.props.user,
      savedUser: { ...this.props.user },
    };

    this.changeUser = this.changeUser.bind(this);

    this.cancel = this.cancel.bind(this);
    this.submit = this.submit.bind(this);
  }

  componentDidMount() {
    // Form Focus
    $.HSCore.helpers.HSFocusState.init();
  }

  changeUser(event) {
    const field = event.target.name;
    const user = this.props.user;
    user[field] = event.target.value;

    this.setState({ user });
    this.props.updateUser(user);
  }

  cancel() {
    const user = this.props.user;
    user.fname = this.state.savedUser.fname;
    user.lname = this.state.savedUser.lname;
    user.name = this.state.savedUser.name;
    user.email = this.state.savedUser.email;
    user.location = this.state.savedUser.location;
    user.aboutMe = this.state.savedUser.aboutMe;

    this.setState({ user });
    this.props.updateUser(user);
  }

  submit() {
    this.props.submit();
  }

  render () {
    return (
      <div>
        <h2 className="h4 g-font-weight-300">Manage your First Name, Last Name and Email Address</h2>
        <p className="g-mb-25">Below are name, email addresse, contacts and more on file for your account.</p>

        <form>
          {/* <!-- First Name --> */}
          <div className="form-group row g-mb-25">
            <label className="col-sm-3 col-form-label g-color-gray-dark-v2 g-font-weight-700 text-sm-right g-mt-10 g-mb-10">First Name</label>
            <div className="col-sm-9">
              <div className="input-group g-brd-primary--focus">
                <input value={this.state.user.fname} onChange={this.changeUser} name="fname" className="form-control form-control-md border-right-0 rounded-0 g-py-13 pr-0" type="text" placeholder="First Name" />
                <div className="input-group-addon d-flex align-items-center g-bg-white g-color-gray-light-v1 rounded-0">
                  <i className="icon-pencil"></i>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- End First Name --> */}

          {/* <!-- Last Name --> */}
          <div className="form-group row g-mb-25">
            <label className="col-sm-3 col-form-label g-color-gray-dark-v2 g-font-weight-700 text-sm-right g-mt-10 g-mb-10">Last Name</label>
            <div className="col-sm-9">
              <div className="input-group g-brd-primary--focus">
                <input value={this.state.user.lname} onChange={this.changeUser} name="lname" className="form-control form-control-md border-right-0 rounded-0 g-py-13 pr-0" type="text" placeholder="Last Name" />
                <div className="input-group-addon d-flex align-items-center g-bg-white g-color-gray-light-v1 rounded-0">
                  <i className="icon-pencil"></i>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- End Last Name --> */}

          {/* <!-- Name --> */}
          <div className="form-group row g-mb-25">
            <label className="col-sm-3 col-form-label g-color-gray-dark-v2 g-font-weight-700 text-sm-right g-mt-10 g-mb-10">Name</label>
            <div className="col-sm-9">
              <div className="input-group g-brd-primary--focus">
                <input value={this.state.user.name} onChange={this.changeUser} name="name" className="form-control form-control-md border-right-0 rounded-0 g-py-13 pr-0" type="text" placeholder="Name" />
                <div className="input-group-addon d-flex align-items-center g-bg-white g-color-gray-light-v1 rounded-0">
                  <i className="icon-pencil"></i>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- End Name --> */}

          {/* <!-- Primary Email Address --> */}
          <div className="form-group row g-mb-25">
            <label className="col-sm-3 col-form-label g-color-gray-dark-v2 g-font-weight-700 text-sm-right g-mt-10 g-mb-10">Primary email address</label>
            <div className="col-sm-9">
              <div className="input-group g-brd-primary--focus">
                <input value={this.state.user.email} onChange={this.changeUser} name="email" className="form-control form-control-md border-right-0 rounded-0 g-py-13 pr-0" type="email" placeholder="Primary email address" />
                <div className="input-group-addon d-flex align-items-center g-bg-white g-color-gray-light-v1 rounded-0">
                  <i className="icon-pencil"></i>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- End Primary Email Address --> */}

          {/* <!-- Location --> */}
          <div className="form-group row g-mb-25">
            <label className="col-sm-3 col-form-label g-color-gray-dark-v2 g-font-weight-700 text-sm-right g-mt-10 g-mb-10">Location</label>
            <div className="col-sm-9">
              <div className="input-group g-brd-primary--focus">
                <input value={this.state.user.location} onChange={this.changeUser} name="location" className="form-control form-control-md border-right-0 rounded-0 g-py-13 pr-0" type="text" placeholder="Location" />
                <div className="input-group-addon d-flex align-items-center g-bg-white g-color-gray-light-v1 rounded-0">
                  <i className="icon-pencil"></i>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- End Location --> */}

          {/* <!-- About Me --> */}
          <div className="form-group row g-mb-25">
            <label className="col-sm-3 col-form-label g-color-gray-dark-v2 g-font-weight-700 text-sm-right g-mt-5 g-mb-10">About Me</label>
            <div className="col-sm-9">
              <div className="input-group g-brd-primary--focus">
                <textarea value={this.state.user.aboutMe} onChange={this.changeUser} name="aboutMe" className="form-control form-control-md border-right-0 g-resize-none rounded-0 pr-0" rows="4" placeholder="About Me"></textarea>
                <div className="input-group-addon d-flex align-items-center g-bg-white g-color-gray-light-v1 rounded-0">
                  <i className="icon-pencil"></i>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- End About Me --> */}

          <hr className="g-brd-gray-light-v4 g-my-25" />

          <div className="text-sm-right">
            <a onClick={this.cancel} className="btn u-btn-darkgray rounded-0 g-py-12 g-px-25 g-mr-10" href="#">Cancel</a>
            <a onClick={this.submit} className="btn u-btn-primary rounded-0 g-py-12 g-px-25" href="#">Save Changes</a>
          </div>
        </form>
      </div>
    )
  }
}

export default SettingsProfile;
