import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

class Main extends Component {
    render() {
      return (
        <div>
            <Grid>
                <Row className="show-grid">
                    <Col className="mainLeft" xs={12} md={8}>
                        <Row>
                            <Col xs={9}>
                                <h4>Grand Central Food Program</h4>
                            </Col>
                            <Col xs={3}>
                                <h2>Col 2</h2>
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
