import React, { Component } from "react";
import { Row } from "react-bootstrap";
import Comments from "./Comments";
import Details from "./Details";
import MapHolder from "./MapHolder";
import axios from "axios";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      locationUrl: null,
      rating: null,
      data: null,
      locationDataLoaded: null
    };
    this.selectLocation = this.selectLocation.bind(this);
    this.renderBody = this.renderBody.bind(this);
  }

  componentDidMount() {
    console.log("home did mount");
  }

  selectLocation(location) {
    this.setState({
      locationUrl: location,
      rating: null
    });

    //get location data
    axios.get(location).then(res => {
      this.setState({
        data: res.data.data,
        locationDataLoaded: true
      });
    });

    //get rating
    axios
      .get(`${location}/rating`)
      .then(res => {
        this.setState({
          rating: Math.round(res.data.data)
        });
      })
      .catch(err => console.log(err));
  }

  renderBody() {
    if (this.state.locationDataLoaded) {
      return (
        <Row className="info-wrapper">
          <Details data={this.state.data} />
          <Comments
            data={this.state.data}
            rating={this.state.rating}
            locationUrl={this.state.locationUrl}
          />
        </Row>
      );
    }
  }

  render() {
    return (
      <div>
        <MapHolder selectLocation={this.selectLocation} />
        {this.renderBody()}
        <section className="center-tagline">
          <div className="center-tagline">
            <h1>CLICK PIN TO FIND MORE INFORMATION</h1>
          </div>
        </section>
      </div>
    );
  }
}

export default Home;
