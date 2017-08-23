import React, { Component } from 'react';
import './App.css';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentLocation: null,
    }
    this.selectLocation = this.selectLocation.bind(this);
  }

  selectLocation(location) {
    this.setState({
      currentLocation: location,
    });
  }

  render() {
    return (
      <Router>
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
                  <NavItem className="navBar" eventKey={1}><Link to="/" className="navBar">Home</Link></NavItem>
                  <NavItem className="navBar" eventKey={2}><Link to="/About" className="navBar">About</Link></NavItem>
                  <NavItem className="navBar" eventKey={3}><Link to="/Contact" className="navBar">Contact Us</Link></NavItem>
                </Nav>
              </Navbar.Collapse>
              </Navbar>


            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact}/>
          </div>
      </Router>
    );
  }
}

export default App;
