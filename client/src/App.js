import React, { Component } from 'react';
import './App.css';

import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <nav className="bg-info">
          <div className="nav col-sm-12 col-sm-3">
            <h3 className="pull-left blue">Open Arms NYC</h3>
            <Link to="/" className="btn btn-default col-sm-offset-7">Home</Link>
            <Link to="/About" className="btn btn-default col-sm-offset-8">About</Link>
            <Link to="/Contact" className="btn btn-default col-sm-offset-9">Contact</Link>
          </div>
          <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} /> 
            <Route exact path="/contact" component={Contact}/>     
          </div>
        </nav>
      </Router>
    );
  }
}

export default App;
