import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Comments from './components/Comments';
import Details from './components/Details';
import Map from './components/Map';

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
      <div className="App">
        <Header />
        <Map selectLocation={this.selectLocation} />
        <h1>{this.state.currentLocation}</h1>
        <Details />
        {this.state.currentLocation ?  <Comments currentLocation={this.state.currentLocation} /> : <div></div>}
       
        <Footer />
      </div>
    );
  }
}

export default App;
