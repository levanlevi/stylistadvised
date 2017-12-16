import React, { Component } from 'react';
import PropTypes from 'prop-types';

import auth from '../../auth/modules/auth';
import Display from '../../Parts/Display';
import Header from '../../Parts/Header';
import Spinner from '../../Parts/Spinner';

import Contacts from './Contacts';
import Settings from './Settings';

import DefaultUserPicture from '../assets/defaultUserPicture.jpg';

const listGroupItemStyle = 'list-group-item list-group-item-action justify-content-between';
const listGroupItemActiveStyle = 'list-group-item list-group-item-action justify-content-between active';

export default class Account extends Component {
  static propTypes = {
    user: PropTypes.object.isRequired,

    getUser: PropTypes.func.isRequired,
    submit: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);

    this.state = {
      loading: this.props.loading,
      navigation: {
        contacts: true,
        settings: false,
      },
      navigationStyle: {
        contacts: listGroupItemActiveStyle,
        settings: listGroupItemStyle,
      },
      user: {
        _id: this.props.user._id,
        fname: this.props.user.fname ? this.props.user.fname : '',
        lname: this.props.user.lname ? this.props.user.lname : '',
        name: this.props.user.name ? this.props.user.name : '',
        email: this.props.user.email,
        location: this.props.user.location ? this.props.user.location : '',
        aboutMe: this.props.user.aboutMe ? this.props.user.aboutMe : '',
        password: this.props.user.password,
        picture: this.props.user.picture ? this.props.user.picture : DefaultUserPicture,
        userType: this.props.user.userType,
      }
    };
    
    this.onSelectPicture = this.onSelectPicture.bind(this);
    this.showUserContacts = this.showUserContacts.bind(this);
    this.showUserSettings = this.showUserSettings.bind(this);
    this.updateUser = this.updateUser.bind(this);
  }

  componentDidMount() {
    const userId = this.props.routeParams.id;

    this.props.getUser(userId);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ loading: nextProps.loading });
    this.setState({ user: nextProps.user });
  }

  onSelectPicture(event) {
    if (event.target.files && event.target.files[0]) {
      const user = this.state.user;

      var reader = new FileReader();
      var self = this;

      reader.onload = function (e) {
        const user = self.state.user;
        user.picture = e.target.result;

        self.setState({ user }, function() {
          self.props.user.picture = self.state.user.picture;
          self.props.submit(self.props.user);
        });
      }

      reader.readAsDataURL(event.target.files[0]);
    }
  }

  showUserContacts() {
    const navigation = this.state.navigation;
    navigation.contacts = true;
    navigation.settings = false;

    this.setState({ navigation });

    const navigationStyle = this.state.navigationStyle;
    navigationStyle.contacts = listGroupItemActiveStyle;
    navigationStyle.settings = listGroupItemStyle;

    this.setState({ navigationStyle });
  }

  showUserSettings() {
    const navigation = this.state.navigation;
    navigation.contacts = false;
    navigation.settings = true;

    this.setState({ navigation });

    const navigationStyle = this.state.navigationStyle;
    navigationStyle.contacts = listGroupItemStyle;
    navigationStyle.settings = listGroupItemActiveStyle;

    this.setState({ navigationStyle });
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

        <Display if={this.state.loading}>
          <Spinner />
        </Display>
        <Display if={!this.state.loading}>
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
                            <label className="u-file-attach-v2 g-color-gray-dark-v5 mb-0">
                              <input onChange={this.onSelectPicture} id="fileAttachment" name="file-attachment" type="file" />
                              <i className="icon-cloud-upload g-font-size-16 g-pos-rel g-top-2 g-mr-5"></i>                            
                            </label>
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
                    <a onClick={this.showUserContacts} href="#" className={this.state.navigationStyle.contacts}>
                      <span><i className="icon-notebook g-pos-rel g-top-1 g-mr-8"></i> Users Contacts</span>
                    </a>
                    {/* <!-- End Users Contacts --> */}

                    {/* <!-- Settings --> */}
                    <a onClick={this.showUserSettings} href="#" className={this.state.navigationStyle.settings}>
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
                  <Display if={this.state.navigation.contacts}>
                    <Contacts />
                  </Display>
                  {/* <!-- End User Contacts --> */}

                  {/* <!-- User Settings --> */}
                  <Display if={this.state.navigation.settings}>
                    <Settings user={this.state.user} submit={this.props.submit} updateUser={this.updateUser} />
                  </Display>
                  {/* <!-- End User Settings --> */}
                </div>
                {/* <!-- End Content --> */}
              </div>
            </div>
          </section>
        </Display>
      </div>
    )
  }
}
