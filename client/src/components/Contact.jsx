import React, { Component } from "react";
import {
  Form,
  FormGroup,
  ControlLabel,
  Button,
  FormControl,
  Grid,
  Row,
  Col
} from "react-bootstrap";

class Contact extends Component {
  render() {
    return (
      <div className="contact-page m-top-three">
        <Grid>
          <Row className="show-grid">
            <Col xs={12} md={6}>
              <div className="contact-form">
                <div className="contact-header">
                  <h3>Contact</h3>
                  <small>Do you have questions or concerns?</small>
                  <br />
                  <small>Please send us your thoughts!</small>
                  <br />
                </div>
                <Form horizontal>
                  <FormGroup controlId="formHorizontalEmail">
                    <ControlLabel>Email</ControlLabel>
                    <FormControl type="email" placeholder="Email" />
                  </FormGroup>

                  <FormGroup controlId="formControlsTextarea">
                    <ControlLabel>Message</ControlLabel>
                    <FormControl
                      componentClass="textarea"
                      placeholder="Type message here"
                      rows="10"
                    />
                  </FormGroup>

                  <FormGroup>
                    <Button type="submit" className="btn">
                      Submit
                    </Button>
                  </FormGroup>
                </Form>
              </div>
            </Col>
            <Col xs={12} md={6}>
              <Row>
                <h3 className="add-info">Additional Resources</h3>
                <Col sm={12} md={4}>
                  <div className="thumb-box">
                    <div className="thumb-header">
                      <h4>Food Stamps</h4>
                    </div>
                    <div className="thumb-body">
                      <small>HOTLINE</small>
                      <p>
                        <a
                          href="tel:855-692-4322"
                          title="Call Hunger Free Communities Consortium"
                        >
                          {" "}855-692-4322
                        </a>
                      </p>
                    </div>
                  </div>
                </Col>
                <Col sm={12} md={4}>
                  <div className="thumb-box">
                    <div className="thumb-header">
                      <h4>WIC</h4>
                    </div>
                    <div className="thumb-body">
                      <small>HOTLINE</small>
                      <p>
                        <a
                          href="tel:800-522-5006"
                          title="Call Women Infants Children Program"
                        >
                          800-522-5006
                        </a>
                      </p>
                    </div>
                  </div>
                </Col>
                <Col sm={12} md={4}>
                  <div className="thumb-box">
                    <div className="thumb-header">
                      <h4>Food Pantries</h4>
                    </div>
                    <div className="thumb-body">
                      <small>HOTLINE</small>
                      <p>
                        <a
                          href="tel:866-888-8777"
                          title="Call NYC Emergency Foodline"
                        >
                          866-888-8777
                        </a>
                      </p>
                    </div>
                  </div>
                </Col>
              </Row>
              <h3 className="add-info add-info-2">
                Homebound Delivered Senior Meals
              </h3>
              <Row>
                <Col xs={12} md={6}>
                  <p>Washington Heights, Harlem: </p>
                  <p>
                    <a href="tel:212-222-2552" title="Call Charles Walburg">
                      212-222-2552
                    </a>
                  </p>
                  <hr />
                </Col>
                <Col md={6}>
                  <p>East Harlem, Upper East Side: </p>
                  <p>
                    <a href="tel:212-338-4333" title="Call Stanley Issacs">
                      212-338-4333
                    </a>
                  </p>
                  <hr />
                </Col>
              </Row>
              <Row>
                <Col xs={12} md={6}>
                  <p>Upper West Side, Midtown West: </p>
                  <p>
                    <a href="tel:212-281-2910" title=" Call Encore">
                      212-281-2910
                    </a>
                  </p>
                  <p />
                  <hr />
                </Col>
                <Col md={6}>
                  <p>Midtown East, Chelsea, Village, Downtown:</p>
                  <p>
                    <a
                      href="tel:212-349-2770"
                      title="Call Henry Street Settlement"
                    >
                      212-349-2770
                    </a>
                  </p>
                  <hr />
                </Col>
              </Row>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Contact;
