import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <main>
          <div>
            <Link to="/">Home</Link>
            <Link to="/About">About</Link>
          </div>
          <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />      
          </div>
        </main>
      </Router>
    );
  }
}

export default App;
