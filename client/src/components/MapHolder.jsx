import React, { Component } from 'react';
import MyMap from './Map'
import { Grid, Row, Col } from 'react-bootstrap';

class MapHolder extends Component {
    render() {
        return (
            <div> 
                <Grid className="m-top-three" fluid bsClass>
                <Row className="show-grid">
                    <Col xs={12}>
                       <MyMap selectLocation={this.props.selectLocation} />
                    </Col>
                </Row>
                </Grid>
            </div>
        )
    }
}

export default MapHolder;