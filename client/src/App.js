import React, { Component } from 'react';
import './App.css';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
<<<<<<< HEAD
import Map from './components/Map';
import Details from './components/Details';
import Comments from './components/Comments';
=======
>>>>>>> 863a6c3574b1f529bdca7430c79b663c8e9d2246
import MapHolder from './components/MapHolder';

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
                  <NavItem eventKey={1}><Link to="/">Home</Link></NavItem>
                  <NavItem eventKey={2}><Link to="/About">About</Link></NavItem>
                  <NavItem eventKey={3}><Link to="/About">Contact Us</Link></NavItem>
                </Nav>
              </Navbar.Collapse>
<<<<<<< HEAD
              <MapHolder selectLocation={this.selectLocation} />
              <Details />
              {this.state.currentLocation ?  <Comments currentLocation={this.state.currentLocation} /> : <div></div>}
            </Navbar>
=======
            </Navbar>
  
              <MapHolder selectLocation={this.selectLocation} />
            
>>>>>>> 863a6c3574b1f529bdca7430c79b663c8e9d2246
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact}/>
          </div>
      </Router>
    );
  }
}

export default App;
