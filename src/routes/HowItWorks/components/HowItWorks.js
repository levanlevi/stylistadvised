import React from 'react';
import { Button, Col, ControlLabel, Form, FormGroup, FormControl, Grid, Row, Well } from 'react-bootstrap';
import PropTypes from 'prop-types';

export const HowItWorks = ({ signup, increment, doubleAsync }) => (
  <div>
    <Grid>
      <Row className="show-grid">
        <Col xs={6}>
          <Form horizontal>
            <FormGroup controlId="formHorizontalEmail">
              <Col sm={12}>
                <FormControl type="text" placeholder="First name" />
              </Col>
            </FormGroup>

            <FormGroup controlId="formHorizontalEmail">
              <Col sm={12}>
                <FormControl type="text" placeholder="Last name" />
              </Col>
            </FormGroup>

            <FormGroup controlId="formHorizontalEmail">
              <Col sm={12}>
                <FormControl type="email" placeholder="Email" />
              </Col>
            </FormGroup>

            <FormGroup controlId="formHorizontalPassword">
              <Col sm={12}>
                <FormControl type="password" placeholder="Password" />
              </Col>
            </FormGroup>      

            <FormGroup>
              <Col sm={12}>
                <Button bsStyle="btn btn-outline btn-xl page-scroll" type="submit">Sign in</Button>
              </Col>
            </FormGroup>
          </Form>
        </Col>
      </Row>
    </Grid>
  </div>
)
HowItWorks.propTypes = {
  counter: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
  doubleAsync: PropTypes.func.isRequired,
}

export default HowItWorks
