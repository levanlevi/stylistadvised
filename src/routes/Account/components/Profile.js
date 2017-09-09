import React from 'react';
import PropTypes from 'prop-types';

class Profile extends React.Component {
  static propTypes = {
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    email: PropTypes.string,
    setFirstName: PropTypes.func.isRequired,
    setLastName: PropTypes.func.isRequired,
    submit: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);

    this.state = {
      firstName: this.props.firstName,
      lastName: this.props.lastName,
      email: this.props.email,
    };

    this.savedFirstName = this.props.firstName;
    this.savedLastName = this.props.lastName;
    this.savedEmail = this.props.email;

    this.setFirstName = this.setFirstName.bind(this);
    this.setLastName = this.setLastName.bind(this);
    this.setEmail = this.setEmail.bind(this);

    this.cancel = this.cancel.bind(this);
    this.submit = this.submit.bind(this);
  }

  componentDidMount() {
    // Form Focus
    $.HSCore.helpers.HSFocusState.init();
  }

  setFirstName(event) {
    this.setState({ firstName: event.target.value });
    this.props.setFirstName(event.target.value);
  }

  setLastName(event) {
    this.setState({ lastName: event.target.value });
    this.props.setLastName(event.target.value);
  }

  setEmail(event) {
    this.setState({ email: event.target.value });
  }

  cancel() {
    this.setState({ firstName: this.savedFirstName });
    this.props.setFirstName(this.savedFirstName);
    this.setState({ lastName: this.savedLastName });
    this.props.setLastName(this.savedLastName);
    this.setState({ email: this.savedEmail });
  }

  submit() {
    this.props.submit(this.state);
  }

  render () {
    return (
      <div>
        <h2 className="h4 g-font-weight-300">Manage your First Name, Last Name and Email Addresses</h2>
        <p className="g-mb-25">Below are name, email addresse, contacts and more on file for your account.</p>

        <form>
          {/* <!-- First Name --> */}
          <div className="form-group row g-mb-25">
            <label className="col-sm-3 col-form-label g-color-gray-dark-v2 g-font-weight-700 text-sm-right g-mb-10">First Name</label>
            <div className="col-sm-9">
              <div className="input-group g-brd-primary--focus">
                <input value={this.state.firstName} onChange={this.setFirstName} className="form-control form-control-md border-right-0 rounded-0 g-py-13 pr-0" type="text" placeholder="First Name" />
                <div className="input-group-addon d-flex align-items-center g-bg-white g-color-gray-light-v1 rounded-0">
                  <i className="icon-pencil"></i>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- End First Name --> */}

          {/* <!-- Last Name --> */}
          <div className="form-group row g-mb-25">
            <label className="col-sm-3 col-form-label g-color-gray-dark-v2 g-font-weight-700 text-sm-right g-mb-10">Last Name</label>
            <div className="col-sm-9">
              <div className="input-group g-brd-primary--focus">
                <input value={this.state.lastName} onChange={this.setLastName} className="form-control form-control-md border-right-0 rounded-0 g-py-13 pr-0" type="text" placeholder="Last Name" />
                <div className="input-group-addon d-flex align-items-center g-bg-white g-color-gray-light-v1 rounded-0">
                  <i className="icon-pencil"></i>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- End Last Name --> */}

          {/* <!-- Primary Email Address --> */}
          <div className="form-group row g-mb-25">
            <label className="col-sm-3 col-form-label g-color-gray-dark-v2 g-font-weight-700 text-sm-right g-mb-10">Primary email address</label>
            <div className="col-sm-9">
              <div className="input-group g-brd-primary--focus">
                <input value={this.state.email} onChange={this.setEmail} className="form-control form-control-md border-right-0 rounded-0 g-py-13 pr-0" type="text" placeholder="Primary email address" />
                <div className="input-group-addon d-flex align-items-center g-bg-white g-color-gray-light-v1 rounded-0">
                  <i className="icon-pencil"></i>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- End Primary Email Address --> */}

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

export default Profile
