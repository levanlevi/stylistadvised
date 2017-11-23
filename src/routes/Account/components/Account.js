import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

import auth from '../../auth/modules/auth';
import Display from '../../Parts/Display';
import Header from '../../Parts/Header';

import Contacts from './Contacts';
import Settings from './Settings';

import DefaultUserPicture from '../assets/defaultUserPicture.jpg';

class Account extends React.Component {
  static propTypes = {
    user: PropTypes.object.isRequired,
    submit: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);

    this.state = {
      user: {
        _id: this.props.user._id,
        fname: this.props.user.fname,
        lname: this.props.user.lname,
        name: this.props.user.name,
        email: this.props.user.email,
        password: this.props.user.password,
        picture: this.props.user.picture ? this.props.user.picture : DefaultUserPicture,
        userType: this.props.user.userType,
      }
    };
    
    this.changeUserPicture = this.changeUserPicture.bind(this);
    this.selectPicture = this.selectPicture.bind(this);
    this.updateUser = this.updateUser.bind(this);
  }  

  changeUserPicture() {
    this.refs.fileUploader.click();
  }

  selectPicture(event) {
    if (event.target.files && event.target.files[0]) {
      const user = this.state.user;

      var reader = new FileReader();
      var self = this;

      reader.onload = function (e) {
        self.setState({ 
          user: { fname: user.fname, lname: user.lname, picture: e.target.result }
        }, function() {
          self.props.user.picture = self.state.user.picture;
          self.props.submit(self.props.user);
        });
      }

      reader.readAsDataURL(event.target.files[0]);
    }
  }

  updateUser(newUser) {
    const user = this.state.user;
    user.fname = newUser.fname;
    user.lname = newUser.lname;

    this.setState({ user });
  }

  render () {
    return (
      <div>
        <Header isTransparent={false}></Header>

        <section className="g-my-20 g-mb-100">
          <div className="container">
            <div className="row">

              {/* <!-- Profile Sidebar --> */}
              <div className="col-lg-3 g-mb-50 g-mb-0--lg">

                {/* <!-- User Image --> */}
                <div className="u-block-hover g-pos-rel">
                  <figure>
                    <img className="img-fluid w-100 u-block-hover__main--zoom-v1" src={this.state.user.picture} alt="Image Description" />
                  </figure>

                  {/* <!-- Figure Caption --> */}
                  <figcaption className="u-block-hover__additional--fade g-bg-black-opacity-0_5 g-pa-30">
                    <div className="u-block-hover__additional--fade u-block-hover__additional--fade-up g-flex-middle">
                      {/* <!-- Figure Social Icons --> */}
                      <ul className="list-inline text-center g-flex-middle-item--bottom g-mb-20">                        
                        <li className="list-inline-item align-middle g-mx-7">
                          <a onClick={this.changeUserPicture} className="u-icon-v1 u-icon-size--md g-color-white" href="#">
                            <i className="et-icon-upload"></i>
                          </a>
                          <input onChange={this.selectPicture} type="file" id="file" ref="fileUploader" style={{display: "none"}} />
                        </li>
                      </ul>
                      {/* <!-- End Figure Social Icons --> */}
                    </div>
                  </figcaption>
                  {/* <!-- End Figure Caption --> */}                  

                  {/* <!-- User Info --> */}
                  <span className="g-pos-abs g-top-20 g-left-0">
                    {!this.state.user.fname && <a className="btn btn-sm u-btn-primary rounded-0" href="#">{JSON.parse(auth.getUser()).name}</a>}
                    {this.state.user.fname && <a className="btn btn-sm u-btn-primary rounded-0" href="#">{this.state.user.fname} {this.state.user.lname}</a>}
                    <small className="d-block g-bg-black g-color-white g-pa-5">{this.state.user.userType}</small>
                  </span>
                  {/* <!-- End User Info --> */}
                </div>
                {/* <!-- User Image --> */}

                {/* <!-- Sidebar Navigation --> */}
                <div className="list-group list-group-border-0 g-mb-40">
                    
                  {/* <!-- Users Contacts --> */}
                  <a href="page-profile-users-1.html" className="list-group-item list-group-item-action justify-content-between">
                    <span><i className="icon-notebook g-pos-rel g-top-1 g-mr-8"></i> Users Contacts</span>
                  </a>
                  {/* <!-- End Users Contacts --> */}

                  {/* <!-- Settings --> */}
                  <a href="page-profile-settings-1.html" className="list-group-item list-group-item-action justify-content-between">
                    <span><i className="icon-settings g-pos-rel g-top-1 g-mr-8"></i> Settings</span>
                  </a>
                  {/* <!-- End Settings --> */}
                </div>
                {/* <!-- End Sidebar Navigation --> */}
              </div>
              {/* <!-- End Profile Sidebar --> */}

              {/* <!-- Content --> */}
              <div className="col-lg-9">
                {/* <!-- User Contacts --> */}
                <Display if={false}>
                  <Contacts />
                </Display>
                {/* <!-- End User Contacts --> */}

                {/* <!-- User Settings --> */}
                <Display if={true}>
                  <Settings user={this.state.user} submit={this.props.submit} updateUser={this.updateUser} />
                </Display>
                {/* <!-- End User Settings --> */}
              </div>
              {/* <!-- End Content --> */}
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default Account;
