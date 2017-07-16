import React from 'react'
import { IndexLink, Link } from 'react-router'
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import PropTypes from 'prop-types'

//import './PageLayout.scss';

export const PageLayout = ({ children }) => (
  <div>
    <header>
      <Navbar id="mainNav" navbar navbar-default navbar-fixed-top affix>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/">Stylist advised me</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav pullRight>        
          <NavItem eventKey={1}>
              <Link to='/'>How it works</Link> 
          </NavItem>
          <NavItem eventKey={2}>
            <Link to='/signup'>Sing Up</Link>
          </NavItem> 
        </Nav>
      </Navbar>
      <div className='page-layout__viewport'>
        {children}
      </div> 
    </header>
  </div>
)
PageLayout.propTypes = {
  children: PropTypes.node,
}

export default PageLayout
