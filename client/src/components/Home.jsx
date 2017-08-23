import React, { Component } from 'react';

// import Header from './Header';
import Footer from './Footer';
import Comments from './Comments';
import Details from './Details';
import Map from './Map';

class Home extends Component {
  render() {
    return (
        <div className="Home">
            {/* <Header /> */}
            <Map />
            <Details />
            <Comments />
            <Footer />
        </div>
    );
  }
}

export default Home;
