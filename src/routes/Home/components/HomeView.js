import React from 'react';
import { Button, Col, Jumbotron, Grid, Row } from 'react-bootstrap';

import './HomeView.scss'

export const HomeView = () => (
  <Grid>
    <Row className="show-grid">
      <Col xs={8} xsOffset={2}>
        <Jumbotron>
          <h1>Welcome to the "stylist advised me" project!</h1>
          <p>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
          <p><Button bsStyle="primary">Learn more</Button></p>
        </Jumbotron>
      </Col>
    </Row>
  </Grid>
)

export default HomeView
