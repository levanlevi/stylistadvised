import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

import auth from '../../auth/modules/auth';
import Header from '../../Parts/Header';

import FirstImage from '../assets/first.jpg';
import SecondImage from '../assets/second.jpg';

const errorStyle = 'u-has-error-v1';

var firstImageCarouselStyle = {
  backgroundImage: "url(" + FirstImage + ")"
};

var secondImageCarouselStyle = {
  backgroundImage: "url(" + SecondImage + ")"
};

class Signup extends React.Component {
  static propTypes = {
    state: PropTypes.object.isRequired, 
    submit: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);

    this.state = {
      user: {
        name: "",
        email: "",
        password: "",
        userType: this.props.state.userType,
      },      
    };

    this.userTypeOnChange = this.userTypeOnChange.bind(this);
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
      nextProps.router.push('/');
    }
  }

  userTypeOnChange(event) {
    const user = this.state.user;
    user.userType = event.target.value;

    this.setState({ user });
  }

  onChange(event) {
    const field = event.target.name;
    const user = this.state.user;
    user[field] = event.target.value;

    this.setState({ user });
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
              <div className="g-pa-40 g-mx-70--xl">
                <form className="g-py-15">
                  <h2 className="h3 g-color-black mb-4">Signup</h2>

                  {/* <!-- User type --> */}
                  <div className="md-4">
                    <div className="form-group g-mb-20 justified-content">
                      <label className="u-check">
                        <input onChange={this.userTypeOnChange} value="customer" checked={'customer' === this.state.user.userType} className="g-hidden-xs-up g-pos-abs g-top-0 g-left-0" name="radGroupBtn1_1" type="radio" />
                        <span className="btn btn-md btn-block u-btn-outline-lightgray g-color-white--checked g-bg-primary--checked rounded-0">Customer</span>
                      </label>
                      <label className="u-check">
                        <input onChange={this.userTypeOnChange} value="stylist" checked={'stylist' === this.state.user.userType} className="g-hidden-xs-up g-pos-abs g-top-0 g-left-0" name="radGroupBtn1_1" type="radio" />
                        <span className="btn btn-md btn-block u-btn-outline-lightgray g-color-white--checked g-bg-primary--checked g-brd-left-none--md rounded-0">Stylist</span>
                      </label>
                    </div>
                  </div>
                  {/* <!-- End User type --> */}

                  {/* <!-- User name --> */}
                  <div className="mb-4">
                    {!this.props.state.errors.name &&
                      <div className='form-group g-mb-20'>
                        <div className="input-group g-brd-primary--focus">
                          <div className="input-group-addon d-flex align-items-center g-color-gray-light-v1 rounded-0">
                            <i className="icon-finance-067 u-line-icon-pro"></i>
                          </div>
                          <input onChange={this.onChange} value={this.state.user.name} name="name" className="form-control form-control-md rounded-0" type="text" placeholder="User name" />
                        </div>
                      </div>
                    }
                    {!this.props.state.success && this.props.state.errors.name &&
                      <div className={'form-group g-mb-20 ' + errorStyle}>
                        <div className="input-group g-brd-primary--focus">
                          <div className="input-group-addon d-flex align-items-center g-color-gray-light-v1 rounded-0">
                            <i className="icon-finance-067 u-line-icon-pro"></i>
                          </div>
                          <input onChange={this.onChange} name="name" className="form-control form-control-md rounded-0" type="text" placeholder="User name" />
                        </div>
                        <small className="form-control-feedback">Error: {this.props.state.errors.name}</small>
                      </div>
                    }
                  </div>
                  {/* <!-- End User name --> */}

                  {/* <!-- User email --> */}
                  <div className="mb-4">
                    {!this.props.state.errors.email &&
                      <div className='form-group g-mb-20'>
                        <div className="input-group g-brd-primary--focus">
                          <div className="input-group-addon d-flex align-items-center g-color-gray-light-v1 rounded-0">
                            <i className="icon-communication-062 u-line-icon-pro"></i>
                          </div>
                          <input onChange={this.onChange} value={this.state.user.email} name="email" className="form-control form-control-md rounded-0" type="email" placeholder="Your email" />
                        </div>
                      </div>
                    }
                    {!this.props.state.success && this.props.state.errors.email &&
                      <div className={'form-group g-mb-20 ' + errorStyle}>
                        <div className="input-group g-brd-primary--focus">
                          <div className="input-group-addon d-flex align-items-center g-color-gray-light-v1 rounded-0">
                            <i className="icon-communication-062 u-line-icon-pro"></i>
                          </div>
                          <input onChange={this.onChange} name="email" className="form-control form-control-md rounded-0" type="email" placeholder="Your email" />
                        </div>
                        <small className="form-control-feedback">Error: {this.props.state.errors.email}</small>
                      </div>
                    }
                  </div>
                  {/* <!-- End User email --> */}

                  {/* <!-- User password --> */}
                  <div className="mb-4">
                    {!this.props.state.errors.password && 
                      <div className='form-group g-mb-20'>
                        <div className="input-group g-brd-primary--focus">
                          <div className="input-group-addon d-flex align-items-center g-color-gray-light-v1 rounded-0">
                            <i className="icon-media-094 u-line-icon-pro"></i>
                          </div>
                          <input onChange={this.onChange} value={this.state.user.password} name="password" className="form-control form-control-md rounded-0" type="password" placeholder="Password" />
                        </div>
                      </div>
                    }
                    {!this.props.state.success && this.props.state.errors.password &&
                      <div className={'form-group g-mb-20 ' + errorStyle}>
                        <div className="input-group g-brd-primary--focus">
                          <div className="input-group-addon d-flex align-items-center g-color-gray-light-v1 rounded-0">
                            <i className="icon-media-094 u-line-icon-pro"></i>
                          </div>
                          <input onChange={this.onChange} name="password" className="form-control form-control-md rounded-0" type="password" placeholder="Password" />
                        </div>
                        <small className="form-control-feedback">Error: {this.props.state.errors.password}</small>
                      </div>
                    }
                  </div>
                  {/* <!-- End User password --> */}

                  <div className="g-mb-50">
                    <button onClick={this.submit} className="btn btn-md btn-block u-btn-primary rounded text-uppercase g-py-13" type="button">Signup</button>
                  </div>

                  <p className="g-font-size-13 text-center mb-0">Already have an account? <Link className="g-font-weight-600" to='/signin'>signin</Link></p>
                </form>
              </div>
            </div>
          </div>
        </section>    
      </div>
    )
  }
}

export default Signup;
