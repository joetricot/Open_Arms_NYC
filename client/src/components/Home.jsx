import React, { Component } from 'react';
import Main from './Main'
import Footer from './Footer';
import Comments from './Comments';
import Details from './Details';
import Navigation from './Navigation';
import MapHolder from './MapHolder';

class Home extends Component {
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
        <div className="Home">
            <Navigation />
            <MapHolder selectLocation={this.selectLocation} />
            <Main />
            <Details currentLocation={this.props.currentLocation} />
            <Comments currentLocation={this.props.currentLocation} />
            <Footer />
        </div>
    );
  }
}

export default Home;
