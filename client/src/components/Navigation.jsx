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
              <NavItem eventKey={1}><Link to="/">Home</Link></NavItem>
              <NavItem eventKey={2}><Link to="/About">About</Link></NavItem>
              <NavItem eventKey={3}><Link to="/About">Contact Us</Link></NavItem>
            </Nav>
          </Navbar.Collapse>
      </Navbar>
      </div>
    );
  }
}

export default Navigation;
