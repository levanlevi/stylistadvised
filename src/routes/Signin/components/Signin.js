import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

import auth from '../../auth/modules/auth';
import Display from '../../Parts/Display';
import Header from '../../Parts/Header';

import FirstImage from '../assets/first.jpg';
import SecondImage from '../assets/second.jpg';

const errorStyle = 'u-has-error-v1';
const formGroupFirstStyle = 'form-group g-pos-rel mb-0';
const formGroupSecondStyle = 'form-group g-pos-rel ' + errorStyle + ' mb-0';
const inputGroupFirstStyle = 'input-group g-brd-primary--focus g-pt-10 pb-4';
const inputGroupSecondStyle = 'input-group g-brd-primary--focus g-pt-10 pb-0';

var firstImageCarouselStyle = {
  backgroundImage: 'url(' + FirstImage + ')'
};

var secondImageCarouselStyle = {
  backgroundImage: 'url(' + SecondImage + ')'
};

class Signin extends React.Component {
  static propTypes = {
    state: PropTypes.object.isRequired, 
    submit: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);

    this.state = {
      formGroupStyle: {
        email: formGroupFirstStyle,
        password: formGroupFirstStyle,
      },
      inputGroupStyle: {
        email: inputGroupFirstStyle,
        password: inputGroupFirstStyle,
      },
      errors: {
        email: null,
        password: null,
      },
      user: {
        email: 'flatorez@gmail.com', //'snowflake33@yandex.ru',
        password: 'cde32123',
      },
    };

    this.onChange = this.onChange.bind(this);
    this.submit = this.submit.bind(this);
  }

  componentDidMount() {
    $.HSCore.components.HSCarousel.init('.js-carousel');
    // Form Focus
    $.HSCore.helpers.HSFocusState.init();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.state.success) {
      auth.authenticateUser(nextProps.state.token, nextProps.state.user);
      nextProps.router.push('/');
    } else {
      const errors = nextProps.state.errors;
      errors.email = nextProps.state.errors.email;
      errors.password = nextProps.state.errors.password;

      const formGroupStyle = this.state.formGroupStyle;
      formGroupStyle.email = nextProps.state.errors.email ? formGroupSecondStyle : formGroupFirstStyle;
      formGroupStyle.password = nextProps.state.errors.password ? formGroupSecondStyle : formGroupFirstStyle;

      const inputGroupStyle = this.state.inputGroupStyle;
      inputGroupStyle.email = nextProps.state.errors.email ? inputGroupSecondStyle : inputGroupFirstStyle;      
      inputGroupStyle.password = nextProps.state.errors.password ? inputGroupSecondStyle : inputGroupFirstStyle;

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
    this.props.submit(this.state.user);
  }

  render () {
    return (
      <div>
        <Header isTransparent={true}></Header>

        <section className="clearfix">
          <div className="row no-gutters align-items-center">
            <div className="col-lg-6">
              <div className="js-carousel" data-autoplay="1" data-infinite="1" data-fade="1" data-speed="5000">
                <div className="js-slide g-bg-size-cover g-min-height-100vh" style={firstImageCarouselStyle} data-calc-target="#js-header"></div>
                <div className="js-slide g-bg-size-cover g-min-height-100vh" style={secondImageCarouselStyle} data-calc-target="#js-header"></div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="g-pa-50 g-mx-70--xl">
                <form className="g-py-15">
                  <h2 className="h3 g-color-black mb-2">Signin</h2>

                  {/* <!-- User email --> */}                    
                  <div className="mb-0">
                    <div className={this.state.formGroupStyle.email}>
                      <div className={this.state.inputGroupStyle.email}>
                        <div className="input-group-addon d-flex align-items-center g-color-gray-light-v1 rounded-0">
                          <i className="icon-communication-062 u-line-icon-pro"></i>
                        </div>
                        <input onChange={this.onChange} name="email" className="form-control form-control-md rounded-0" type="email" placeholder="Email" />
                      </div>
                      <Display if={!!this.state.errors.email}>
                        <small className="form-control-feedback">{this.state.errors.email}</small>
                      </Display>
                    </div>
                  </div>
                  {/* <!-- End User email --> */}

                  {/* <!-- User password --> */}
                  <div className="mb-0">
                    <div className={this.state.formGroupStyle.password}>
                      <div className={this.state.inputGroupStyle.password}>
                        <div className="input-group-addon d-flex align-items-center g-color-gray-light-v1 rounded-0">
                          <i className="icon-media-094 u-line-icon-pro"></i>
                        </div>
                        <input onChange={this.onChange} name="password" className="form-control form-control-md rounded-0" type="password" placeholder="Password" />
                      </div>
                      <Display if={!!this.state.errors.password}>
                        <small className="form-control-feedback">{this.state.errors.password}</small>
                      </Display>
                    </div>
                  </div>
                  {/* <!-- End User password --> */}

                  <div className="row justify-content-between mb-2">
                    <div className="col align-self-center text-right">
                      <a className="g-color-gray-dark-v4 g-color-primary--hover" href="#">Forgot password?</a>
                    </div>
                  </div>

                  <div className="g-mb-25">
                    <button onClick={this.submit} className="btn btn-md btn-block u-btn-primary rounded text-uppercase g-py-13" type="button">Login</button>
                  </div>

                  <p className="g-font-size-13 text-center mb-0">Don't have an account? <Link className="g-font-weight-600" to='/signup/customer'>signup</Link></p>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default Signin;
