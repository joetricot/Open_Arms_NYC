import React, { Component } from 'react';
import './App.css';
import { Navbar, Nav, NavItem, Image } from 'react-bootstrap';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer.jsx'

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
          <div>
            <Navbar fixedTop>
              <Navbar.Header>
                <Navbar.Brand>
                  <Link to="/"><span><img src="/images/no-logo.png" className="logo" />Open Arms - <span className="logo-nyc">NYC</span></span></Link>
                </Navbar.Brand>
                <Navbar.Toggle />
              </Navbar.Header>
              <Navbar.Collapse>
                <Nav pullRight>
                  <NavItem eventKey={1}><Link to="/">Home</Link></NavItem>
                  <NavItem eventKey={2}><Link to="/About">About</Link></NavItem>
                  <NavItem eventKey={3}><Link to="/Contact">Contact Us</Link></NavItem>
                </Nav>
              </Navbar.Collapse>
              </Navbar>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact}/>
            <Footer />
          </div>
      </Router>
    );
  }
}

export default App;
