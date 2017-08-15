import React from 'react';
import { Button, Col, ControlLabel, Form, FormGroup, FormControl, Grid, Row, Well } from 'react-bootstrap';
import PropTypes from 'prop-types';

export const Signup = ({ signup, submit, doubleAsync }) => (
  <div className="header-content">
    <Grid>
      <Row>
        <Col xs={5}>
          <Form horizontal>
            <FormGroup bsSize="lg" controlId="formHorizontalFirstName">
              <Col sm={12}>
                <FormControl type="text" placeholder="First name" value={signup.firstName} />
              </Col>
            </FormGroup>

            <FormGroup bsSize="lg" controlId="formHorizontalLastName">
              <Col sm={12}>
                <FormControl type="text" placeholder="Last name" />
              </Col>
            </FormGroup>

            <FormGroup bsSize="lg" controlId="formHorizontalEmail">
              <Col sm={12}>
                <FormControl type="email" placeholder="Email" />
              </Col>
            </FormGroup>

            <FormGroup bsSize="lg" controlId="formHorizontalPassword">
              <Col sm={12}>
                <FormControl type="password" placeholder="Password" />
              </Col>
            </FormGroup>      

            <FormGroup>
              <Col sm={12}>
                <Button className="btn btn-outline btn-xl page-scroll" onClick={submit}>Sign in</Button>
              </Col>
            </FormGroup>
          </Form>
        </Col>
      </Row>
    </Grid>
  </div>
)
Signup.propTypes = {
  signup: PropTypes.object.isRequired,
  submit: PropTypes.func.isRequired,
  doubleAsync: PropTypes.func.isRequired,
}

export default Signup
