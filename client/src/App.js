import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Comments from './components/Comments';
import Details from './components/Details';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Details />
        <Comments />
        <Footer />
      </div>
    );
  }
}

export default App;
