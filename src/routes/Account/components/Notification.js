import React from 'react';
import PropTypes from 'prop-types';

class Notification extends React.Component {
  static propTypes = {
    notificationState: PropTypes.object,
  }

  constructor(props) {
    super(props);

    this.cancel = this.cancel.bind(this);
    this.submit = this.submit.bind(this);
  }

  cancel() {
    console.log('cancel');
  }

  submit() {
    console.log('Save Changes');
    //this.props.submit(this.state);
  }

  render () {
    return (
      <div>
        <h2 className="h4 g-font-weight-300">Manage your Notifications</h2>
        <p className="g-mb-25">Below are the notifications you may manage.</p>

        <form>
          {/* <!-- Email Notification --> */}
          <div className="form-group">
            <label className="d-flex align-items-center justify-content-between">
              <span>Email notification</span>
              <div className="u-check">
                <input className="g-hidden-xs-up g-pos-abs g-top-0 g-right-0" name="emailNotification" type="checkbox" defaultChecked />
                <div className="u-check-icon-radio-v7">
                  <i className="d-inline-block"></i>
                </div>
              </div>
            </label>
          </div>
          {/* <!-- End Email Notification --> */}

          <hr className="g-brd-gray-light-v4 g-my-20" />

          {/* <!-- Comments Notification --> */}
          <div className="form-group">
            <label className="d-flex align-items-center justify-content-between">
              <span>Send me email notification when a user comments on my blog</span>
              <div className="u-check">
                <input className="g-hidden-xs-up g-pos-abs g-top-0 g-right-0" name="commentNotification" type="checkbox" />
                <div className="u-check-icon-radio-v7">
                  <i className="d-inline-block"></i>
                </div>
              </div>
            </label>
          </div>
          {/* <!-- End Comments Notification --> */}

          <hr className="g-brd-gray-light-v4 g-my-20" />

          {/* <!-- Update Notification --> */}
          <div className="form-group">
            <label className="d-flex align-items-center justify-content-between">
              <span>Send me email notification for the latest update</span>
              <div className="u-check">
                <input className="g-hidden-xs-up g-pos-abs g-top-0 g-right-0" name="updateNotification" type="checkbox" defaultChecked />
                <div className="u-check-icon-radio-v7">
                  <i className="d-inline-block"></i>
                </div>
              </div>
            </label>
          </div>
          {/* <!-- End Update Notification --> */}

          <hr className="g-brd-gray-light-v4 g-my-25" />

          {/* <!-- Message Notification --> */}
          <div className="form-group">
            <label className="d-flex align-items-center justify-content-between">
              <span>Send me email notification when a user sends me message</span>
              <div className="u-check">
                <input className="g-hidden-xs-up g-pos-abs g-top-0 g-right-0" name="messageNotification" type="checkbox" defaultChecked />
                <div className="u-check-icon-radio-v7">
                  <i className="d-inline-block"></i>
                </div>
              </div>
            </label>
          </div>
          {/* <!-- End Message Notification --> */}

          <hr className="g-brd-gray-light-v4 g-my-25" />

          {/* <!-- Newsletter Notification --> */}
          <div className="form-group">
            <label className="d-flex align-items-center justify-content-between">
              <span>Receive our monthly newsletter</span>
              <div className="u-check">
                <input className="g-hidden-xs-up g-pos-abs g-top-0 g-right-0" name="newsletterNotification" type="checkbox" />
                <div className="u-check-icon-radio-v7">
                  <i className="d-inline-block"></i>
                </div>
              </div>
            </label>
          </div>
          {/* <!-- End Newsletter Notification --> */}

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

export default Notification;
