import React, { Component } from 'react';
import MapHolder from './MapHolder';
import Main from './Main'
import Footer from './Footer';
import Comments from './Comments';
import Details from './Details';
// import Header from './Header';


class Home extends Component {
  render() {
    return (
        <div className="Home">
            <MapHolder />
            <Main />
            <Details />
            <Comments />
            <Footer />
        </div>
    );
  }
}

export default Home;
