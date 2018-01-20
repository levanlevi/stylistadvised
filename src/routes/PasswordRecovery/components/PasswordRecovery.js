import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

import auth from '../../Auth/modules/auth';
import Display from '../../Parts/Display';
import Header from '../../Parts/Header';

const errorStyle = 'u-has-error-v1';
const formGroupFirstStyle = 'form-group g-pos-rel mb-0';
const formGroupSecondStyle = 'form-group g-pos-rel ' + errorStyle + ' mb-0';
const inputGroupFirstStyle = 'input-group g-rounded-left-5 g-pt-10 pb-4';
const inputGroupSecondStyle = 'input-group g-rounded-left-5 g-pt-10 pb-0';

class PasswordRecovery extends React.Component {
  static propTypes = {
    state: PropTypes.object.isRequired, 
    submit: PropTypes.func.isRequired,
  }
  
  constructor(props) {
    super(props);

    this.state = {
      formGroupStyle: {
        email: formGroupFirstStyle,
      },
      inputGroupStyle: {
        email: inputGroupFirstStyle,
      },
      errors: {
        email: null,
      },
      user: {
        email: '',
      },
    };

    this.onChange = this.onChange.bind(this);

    this.submit = this.submit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.state.success) {
      nextProps.router.push('/');
    } else {
      const errors = nextProps.state.errors;
      errors.email = nextProps.state.errors.email;

      const formGroupStyle = this.state.formGroupStyle;
      formGroupStyle.email = nextProps.state.errors.email ? formGroupSecondStyle : formGroupFirstStyle;

      const inputGroupStyle = this.state.inputGroupStyle;
      inputGroupStyle.email = nextProps.state.errors.email ? inputGroupSecondStyle : inputGroupFirstStyle;      

      this.setState({ errors });
      this.setState({ formGroupStyle });
      this.setState({ inputGroupStyle });
    }
  }

  onChange(event) {
    const field = event.target.name;
    const user = this.state.user;
    user[field] = event.target.value;

    this.setState({ user });

    const errors = this.state.errors;
    errors[field] = null;

    this.setState({ errors });

    const formGroupStyle = this.state.formGroupStyle;
    formGroupStyle[field] = formGroupFirstStyle;

    this.setState({ formGroupStyle });

    const inputGroupStyle = this.state.inputGroupStyle;
    inputGroupStyle[field] = inputGroupFirstStyle;

    this.setState({ inputGroupStyle });
  }

  submit() {
    this.props.submit(this.state.user.email);
  }

  render () {
    return (
      <div>
        <Header isTransparent={false}></Header>

        <section className="container g-py-100">
          <div className="row justify-content-center">
            <div className="col-sm-9 col-md-7 col-lg-5">
              <div className="g-brd-around g-brd-gray-light-v3 g-bg-white rounded g-px-30 g-py-50 mb-4">
                <header className="text-center mb-4">
                  <h1 className="h4 g-color-black g-font-weight-400">Forgot Password?</h1>
                  <p>Enter your e-mail address to reset your password.</p>
                </header>

                {/* <!-- Form --> */}
                <form className="g-py-15">
                  {/* <!-- User email --> */}                    
                  <div className="mb-0">
                    <div className={this.state.formGroupStyle.email}>
                      <div className={this.state.inputGroupStyle.email}>
                        <div className="input-group-addon d-flex align-items-center g-color-gray-light-v1 rounded-0">
                          <i className="icon-communication-062 u-line-icon-pro"></i>
                        </div>
                        <input onChange={this.onChange} name="email" className="form-control form-control-md rounded-0" type="email" placeholder="Email Address" />
                      </div>
                      <Display if={!!this.state.errors.email}>
                        <small className="form-control-feedback">{this.state.errors.email}</small>
                      </Display>
                    </div>
                  </div>
                  {/* <!-- End User email --> */}

                  <button onClick={this.submit} className="btn btn-block u-btn-primary g-font-size-12 text-uppercase g-py-15 g-px-25" type="button">Get New Password</button>
                </form>
                {/* <!-- End Form --> */}
              </div>

              <div className="row justify-content-between mb-5">
                <div className="col align-self-center text-center">
                  <p className="g-font-size-13">Have not recieved an email? <a href="/signin">Click here</a></p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default PasswordRecovery;
