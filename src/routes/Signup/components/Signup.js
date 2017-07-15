import React from 'react';
import { Button, Col, ControlLabel, Form, FormGroup, FormControl, Grid, Row, Well } from 'react-bootstrap';
import PropTypes from 'prop-types';

export const Signup = ({ signup, increment, doubleAsync }) => (
  <div>
    <Grid>
      <Row className="show-grid">
        <Col xs={8} xsOffset={2}>
          <Well>
            <Form horizontal>
              <FormGroup controlId="formHorizontalEmail">
                <Col componentClass={ControlLabel} sm={2}>First name</Col>
                <Col sm={10}>
                  <FormControl type="text" placeholder="First name" />
                </Col>
              </FormGroup>

              <FormGroup controlId="formHorizontalEmail">
                <Col componentClass={ControlLabel} sm={2}>Last name</Col>
                <Col sm={10}>
                  <FormControl type="text" placeholder="Last name" />
                </Col>
              </FormGroup>

              <FormGroup controlId="formHorizontalEmail">
                <Col componentClass={ControlLabel} sm={2}>Email</Col>
                <Col sm={10}>
                  <FormControl type="email" placeholder="Email" />
                </Col>
              </FormGroup>

              <FormGroup controlId="formHorizontalPassword">
                <Col componentClass={ControlLabel} sm={2}>Password</Col>
                <Col sm={10}>
                  <FormControl type="password" placeholder="Password" />
                </Col>
              </FormGroup>      

              <FormGroup>
                <Col smOffset={2} sm={10}>
                  <Button type="submit">Sign in</Button>
                </Col>
              </FormGroup>
            </Form>
          </Well>
        </Col>
      </Row>
    </Grid>
  </div>
)
Signup.propTypes = {
  counter: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
  doubleAsync: PropTypes.func.isRequired,
}

export default Signup
