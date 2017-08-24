import React, { Component } from 'react';
import Main from './Main'
// import Footer from './Footer';
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
      data: null,
      locationDataLoaded: null
    }
    this.selectLocation = this.selectLocation.bind(this);
    this.renderBody = this.renderBody.bind(this);
  }

  componentDidMount() {
    console.log('home did mount')
  }

  selectLocation(location) {
    this.setState({
      locationUrl: location,
      rating: null,
    });

    //get location data
    axios.get(location)
    .then(res => {
      console.log("**** GET LOCATION DATA ****",res.data)
      let category;
      /*set category
      if (location.includes('meals')) {
        category = 'meal';
      } else if (location.includes('dropins')) {
        category = 'dropin';
      } else {
        category = 'homebase';
      }*/
      this.setState({
        data: res.data.data,
        //category: category,
        locationDataLoaded: true,
      });
    })

    //get rating
    axios.get(`${location}/rating`)
    .then(res => {
      this.setState({
        rating: Math.round(res.data.data),
      });
    }).catch(err => console.log(err));
  }

  renderBody() {
    if (this.state.locationDataLoaded) {
      return (
        <div>
        <Details data={this.state.data} />
        <Comments data={this.state.data} rating={this.state.rating}
        locationUrl={this.state.locationUrl} />
        </div>
      );
    }
  }

  render() {
    return (
        <div className="Home">
            <Navigation />
            <MapHolder selectLocation={this.selectLocation} />
            {this.renderBody()}
        </div>
    );
  }
}

export default Home;
