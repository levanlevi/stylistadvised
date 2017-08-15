import React from 'react';
import { Button, Col, Grid, Form, FormGroup, FormControl, Row } from 'react-bootstrap';

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
  .then((response) => { console.log(response); })
  .catch((error) => { console.warn(error); })
}

function submit() {
  if (eMail && validateEmail(eMail)) {
    fetchData(eMail);
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
          </div>
          <div className="input-group g-max-width-400 g-rounded-50">
            <input onChange={onEmailChange} className="form-control u-shadow-v19 g-brd-none g-color-gray-dark-v4 g-placeholder-gray-dark-v3 g-rounded-50 g-px-25" type="email" placeholder="Enter email"></input>
            <span className="input-group-addon u-shadow-v19 g-brd-none g-bg-white">
              <button onClick={submit} className="btn u-btn-primary g-width-40 g-height-40 rounded-circle g-pa-0" type="submit">
                <i className="fa fa-send"></i>
              </button>
            </span>
          </div>
        </div>
      </div>
    </section>
  </div>
)

export default HomeView
