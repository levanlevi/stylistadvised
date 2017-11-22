import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

import auth from '../../auth/modules/auth';
import Header from '../../Parts/Header';

import FirstImage from '../assets/first.jpg';
import SecondImage from '../assets/second.jpg';

const errorStyle = 'u-has-error-v1';

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
      user: {
        email: 'snowflake33@yandex.ru', //'flatorez@gmail.com',
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
    }
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
              <div className="g-pa-50 g-mx-70--xl">
                <form className="g-py-15">
                  <h2 className="h3 g-color-black mb-4">Signin</h2>

                  <div className="mb-4">                    
                    {this.props.state.success && 
                      <div className='form-group g-mb-20'>
                        <div className="input-group g-brd-primary--focus">
                          <div className="input-group-addon d-flex align-items-center g-color-gray-light-v1 rounded-0">
                            <i className="icon-finance-067 u-line-icon-pro"></i>
                          </div>
                          <input onChange={this.onChange} name="email" className="form-control form-control-md rounded-0" type="email" placeholder="Email" />
                        </div>
                      </div>
                    }
                    {!this.props.state.success && 
                      <div className={'form-group g-mb-20 ' + errorStyle}>
                        <div className="input-group g-brd-primary--focus">
                          <div className="input-group-addon d-flex align-items-center g-color-gray-light-v1 rounded-0">
                            <i className="icon-finance-067 u-line-icon-pro"></i>
                          </div>
                          <input onChange={this.onChange} name="email" className="form-control form-control-md rounded-0" type="email" placeholder="Email" />
                        </div>
                        <small className="form-control-feedback">Error: {this.props.state.errors.email}</small>
                      </div>
                    }
                  </div>

                  <div className="mb-4">                    
                    {this.props.state.success && 
                      <div className='form-group g-mb-20'>
                        <div className="input-group g-brd-primary--focus">
                          <div className="input-group-addon d-flex align-items-center g-color-gray-light-v1 rounded-0">
                            <i className="icon-media-094 u-line-icon-pro"></i>
                          </div>
                          <input onChange={this.onChange} name="password" className="form-control form-control-md rounded-0" type="password" placeholder="Password" />
                        </div>
                      </div>
                    }
                    {!this.props.state.success && 
                      <div className={'form-group g-mb-20 ' + errorStyle}>
                        <div className="input-group g-brd-primary--focus">
                          <div className="input-group-addon d-flex align-items-center g-color-gray-light-v1 rounded-0">
                            <i className="icon-media-094 u-line-icon-pro"></i>
                          </div>
                          <input onChange={this.onChange} name="password" className="form-control form-control-md rounded-0" type="password" placeholder="Password" />
                        </div>
                        {!this.props.state.success && <small className="form-control-feedback">Error: {this.props.state.errors.password}</small>}
                      </div>
                    }
                  </div>

                  <div className="row justify-content-between mb-4">                    
                    <div className="col align-self-center text-right">
                      <a className="g-color-gray-dark-v4 g-color-primary--hover" href="#">Forgot password?</a>
                    </div>
                  </div>

                  <div className="g-mb-50">
                    <button onClick={this.submit} className="btn btn-md btn-block u-btn-primary rounded text-uppercase g-py-13" type="button">Login</button>
                  </div>

                  <p className="g-font-size-13 text-center mb-0">Don't have an account? <Link className="g-font-weight-600" to='/signup'>signup</Link></p>
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
