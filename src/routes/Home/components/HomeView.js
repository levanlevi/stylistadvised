import React from 'react';
import { Button, Col, Grid, Row } from 'react-bootstrap';

//import './HomeView.scss'

export const HomeView = () => (
  <div class="container">
    <Grid>
      <Row className="show-grid">
        <Col xs={4} xsOffset={1}>
          <div class="header-content">
            <div class="header-content-inner">
              <h1>Welcome!</h1>
              <h1>Here you can find a personal stylist. He will advise you on new fashion trends, clothing styles, colours and make-up.</h1>
              <Button bsStyle="btn btn-outline btn-xl page-scroll">Learn more</Button>
            </div>
          </div>
        </Col>
      </Row>
    </Grid>
  </div>
)

export default HomeView
