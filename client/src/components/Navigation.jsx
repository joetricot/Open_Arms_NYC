import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import {Link} from 'react-router-dom';

class Navigation extends Component {
  render() {
    return (
      <div>
        <Navbar fixedTop>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/">Open Arms - NYC</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>

          <Navbar.Collapse>
            <Nav pullRight>
              <NavItem eventKey={1} className="navBar"><Link to="/" className="navBar">Home</Link></NavItem>
              <NavItem eventKey={2} className="navBar"><Link to="/About" className="navBar">About</Link></NavItem>
              <NavItem eventKey={3} className="navBar"><Link to="/Contact" className="navBar">Contact Us</Link></NavItem>
              <NavItem eventKey={4} className="navBar"><Link to="/Jobs" className="navBar">Job Opportunites</Link></NavItem>
            </Nav>
          </Navbar.Collapse>
      </Navbar>
      </div>
    );
  }
}

export default Navigation;
