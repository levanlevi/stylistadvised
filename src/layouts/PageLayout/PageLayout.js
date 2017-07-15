import React from 'react'
import { IndexLink, Link } from 'react-router'
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import PropTypes from 'prop-types'

//import './PageLayout.scss';

import Background from '../../assets/golddress.jpg';

var styleWithBackground = {
  width: "100%",
  height: "800px",
  backgroundImage: "url(" + Background + ")"
};

export const PageLayout = ({ children }) => (
  <div style={styleWithBackground}>
    <Navbar navbar-fixed-top>
       <Navbar.Header>
        <Navbar.Brand>
          <a href="/">Stylist advised me</a>
        </Navbar.Brand>
      </Navbar.Header>
      <Nav pullRight>
        <NavItem eventKey={1} href="/">How it works</NavItem>
        <NavItem eventKey={2}>
          <Link to='/signup'>Sing Up</Link>
        </NavItem>
      </Nav>
    </Navbar>
    <div className='page-layout__viewport'>
      {children}
    </div>
  </div>
)
PageLayout.propTypes = {
  children: PropTypes.node,
}

export default PageLayout
