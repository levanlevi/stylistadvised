import React from 'react'
import { IndexLink, Link } from 'react-router'
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import PropTypes from 'prop-types'

import './PageLayout.scss';

export const PageLayout = ({ children }) => (
  <div>
    {/* <header>
      <nav id="mainNav" className="navbar navbar-default navbar-fixed-top affix-top">
        <div className="container">
          <div className="navbar-header">                
            <a className="navbar-brand" href="/">Stylist advised me</a>
          </div>
        </div>
      </nav>
    </header> */}
    <div className='page-layout__viewport'>
      {children}
    </div>
  </div>
)
PageLayout.propTypes = {
  children: PropTypes.node,
}

export default PageLayout
