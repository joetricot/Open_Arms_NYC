import React, { Component } from 'react';
import MapHolder from './MapHolder';
import Main from './Main'
import Footer from './Footer';
import Comments from './Comments';
import Details from './Details';
import Navigation from './Navigation';


class Home extends Component {
  render() {
    return (
        <div className="Home">
            <MapHolder />
            <Main />
            <Details />
            <Comments />
        </div>
    );
  }
}

export default Home;
