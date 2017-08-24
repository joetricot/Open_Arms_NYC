import React, { Component } from 'react';
import Main from './Main'
import Footer from './Footer';
import Comments from './Comments';
import Details from './Details';
import Navigation from './Navigation';
import MapHolder from './MapHolder';
import axios from 'axios';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      locationUrl: null,
      rating: null,
    }
    this.selectLocation = this.selectLocation.bind(this);
  }

  selectLocation(location) {
    this.setState({
      locationUrl: location,
      rating: null,
    });
    axios.get(`${location}/rating`)
    .then(res => {
      this.setState({
        rating: Math.round(res.data.data),
      });
    }).catch(err => console.log(err));
  }

  render() {
    return (
        <div className="Home">
            <Navigation />
            <MapHolder selectLocation={this.selectLocation} />
            <Main />
            <Details locationUrl={this.state.locationUrl} />
            <Comments locationUrl={this.state.locationUrl} rating={this.state.rating}/>
        </div>
    );
  }
}

export default Home;
