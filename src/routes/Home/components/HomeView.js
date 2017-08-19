import React from 'react';

import FirstUrl from '../../../assets/golddress.jpg';
import SecondUrl from '../../../assets/golddress.jpg';

var firstStyle = {
  backgroundImage: "url(" + FirstUrl + ")"
};

var secondStyle = {
  backgroundImage: "url(" + SecondUrl + ")"
};

var eMail;

function fetchData(value) {
  let body = {
    'fname': 'testing',
    'lname': 'testing',
    'email': value,
    'password': 'testing',
  }
  
  const url = 'http://stylistadvised.me/api/users/';
  fetch(url, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: { 'Content-Type': 'application/json' },
  })
  .then((response) => { console.log("Success!"); })
  .catch((error) => { console.warn("Error!"); })
}

function submit() {
  if (eMail && validateEmail(eMail)) {
    alert("Thank you!");
    fetchData(eMail);    
    document.getElementById("emailInput").value = "";
  }
}

function onEmailChange(event) {
  eMail = event.target.value;
}

function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

export const HomeView = () => (
  <div>    
    <section className="g-pos-rel">
      <div className="js-carousel" data-autoplay="true" data-infinite="true" data-fade="true" data-speed="5000">
        <div className="js-slide g-min-height-100vh g-flex-centered g-bg-cover g-bg-pos-top-center g-bg-img-hero g-bg-black-opacity-0_2--after" style={firstStyle}></div>
        <div className="js-slide g-min-height-100vh g-flex-centered g-bg-cover g-bg-pos-top-center g-bg-img-hero g-bg-black-opacity-0_3--after" style={secondStyle}></div>
      </div>
      <div className="g-absolute-centered--y g-left-0 g-right-0">
        <div className="container g-z-index-1">
          <div className="g-max-width-600">
            <h1 className="g-color-white g-font-weight-700 g-font-size-40 g-font-size-60--md g-mb-30">Stylist advised me</h1>
            <p className="h3 g-color-white g-font-weight-300 g-letter-spacing-1 mb-5">Here you can find a personal stylist. He will advise you on new fashion trends, clothing styles, colours and make-up.</p>
            <p className="h3 g-color-white g-font-weight-300 g-letter-spacing-1 mb-5">We invite you to join us, and you will be among the first to know that we go online.</p>
          </div>
          <div className="input-group g-max-width-400 g-rounded-50">
            <input id="emailInput" onChange={onEmailChange} className="form-control u-shadow-v19 g-brd-none g-color-gray-dark-v4 g-placeholder-gray-dark-v3 g-rounded-50 g-px-25" type="email" placeholder="Enter email"></input>
            <span className="input-group-addon u-shadow-v19 g-brd-none g-bg-white">
              <button onClick={submit} className="btn u-btn-primary g-width-40 g-height-40 rounded-circle g-pa-0" type="submit">
                <i className="fa fa-send"></i>
              </button>
            </span>
          </div>
        </div>
      </div>
    </section>

    {/* <section id="howitworks" className="g-bg-secondary">
      <div className="container g-pt-100 g-pb-40">
        <div className="row justify-content-center g-mb-60">
          <div className="col-lg-7">
            <div className="text-center">
              <h2 className="h3 g-color-black text-uppercase mb-2">How It Works</h2>
              <div className="d-inline-block g-width-35 g-height-2 g-bg-primary mb-2"></div>
            </div>
          </div>
        </div>

        <div className="row g-pl-160">
          <div className="col-sm-6 col-lg-2 g-mb-60">
            <div className="text-center">
              <i className="u-dot-line-v1-2 g-brd-transparent--before g-brd-gray-light-v2--after g-mb-20">
                <span className="u-dot-line-v1__inner g-bg-white g-bg-primary--before g-brd-gray-light-v2"></span>
              </i>
              <h3 className="h5 g-color-black mb-20">Find</h3>
              <p className="mb-0">Use your job title to search for professionals. Find the right candidate.</p>
            </div>
          </div>

          <div className="col-sm-6 col-lg-2 g-mb-60">
            <div className="text-center">
              <i className="u-dot-line-v1-2 g-brd-gray-light-v2--before g-brd-gray-light-v2--after g-mb-20">
                <span className="u-dot-line-v1__inner g-bg-white g-bg-primary--before g-brd-gray-light-v2"></span>
              </i>
              <h3 className="h5 g-color-black mb-20">Hire</h3>
              <p className="mb-0">Send them your proposal.</p>
            </div>
          </div>

          <div className="col-sm-6 col-lg-2 g-mb-60">
            <div className="text-center">
              <i className="u-dot-line-v1-2 g-brd-gray-light-v2--before g-brd-gray-light-v2--after g-mb-20">
                <span className="u-dot-line-v1__inner g-bg-white g-bg-primary--before g-brd-gray-light-v2"></span>
              </i>
              <h3 className="h5 g-color-black mb-20">Schedule</h3>
              <p className="mb-0">Select the right date and time.</p>
            </div>
          </div>

          <div className="col-sm-6 col-lg-2 g-mb-60">
            <div className="text-center">
              <i className="u-dot-line-v1-2 g-brd-gray-light-v2--before g-brd-gray-light-v2--after g-mb-20">
                <span className="u-dot-line-v1__inner g-bg-white g-bg-primary--before g-brd-gray-light-v2"></span>
              </i>
              <h3 className="h5 g-color-black mb-20">Interview</h3>
              <p className="mb-0">Get in touch and have an interview.</p>
            </div>
          </div>

          <div className="col-sm-6 col-lg-2 g-mb-60">
            <div className="text-center">
              <i className="u-dot-line-v1-2 g-brd-gray-light-v2--before g-brd-transparent--after g-mb-20">
                <span className="u-dot-line-v1__inner g-bg-white g-bg-primary--before g-brd-gray-light-v2"></span>
              </i>
              <h3 className="h5 g-color-black mb-20">Pay</h3>
              <p className="mb-0">Was it helpful? - Payments happen through paypal! Provide feedback.</p>
            </div>
          </div>
        </div>
      </div>
    </section> */}
  </div>
)

export default HomeView
