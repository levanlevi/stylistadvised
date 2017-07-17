import React from 'react';
import { Button, Col, Grid, Form, FormGroup, FormControl, Row } from 'react-bootstrap';

//import './HomeView.scss'

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
  <div className="container">
    <Grid>
      <Row className="show-grid">
        <Col xs={5}>
          <div className="header-content">
            <div className="header-content-inner">
              <h1>Welcome!</h1>
              <h1>Here you can find a personal stylist. He will advise you on new fashion trends, clothing styles, colours and make-up.</h1>
              <Form horizontal>
                <FormGroup bsSize="lg" controlId="formHorizontalEmail">
                  <Col sm={10}>
                    <FormControl type="email" placeholder="Email" onChange={onEmailChange} />
                  </Col>
                </FormGroup>
              </Form>              
               <button onClick={submit} className="btn btn-outline btn-xl page-scroll">Send me letter, when goes online</button> 
            </div>
          </div>
        </Col>
      </Row>
    </Grid>
  </div>
)

export default HomeView
