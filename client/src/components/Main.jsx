import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import axios from 'axios';

class Main extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    console.log('main did mount')
  }

  render() {
    return (
      <div>
        <Grid>
          <Row className="show-grid">
            <Col className="mainLeft" xs={12} md={8}>
              <Row>
                <Col xs={9}>
                  <h4>{this.props.data.name}</h4>
                </Col>
                <Col xs={3}>
                  <h2></h2>
                </Col>
              </Row>
            </Col>
            <Col className="mainRight" xs={6} md={4}>
                    <h1>This is RIGHT</h1>
                    </Col>
                </Row>
            </Grid>
        </div>
      );
    }
}

export default Main;
