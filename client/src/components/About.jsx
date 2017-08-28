import React, { Component } from "react";
import { Grid, Row, Col, Carousel, Image } from "react-bootstrap";

class About extends Component {
  render() {
    return (
      <div className="m-top-three">
        <Grid>
          <Row>
            <Col xs={12} md={7}>
              <br />
              <div className="about-content">
                <img src="/images/logo.svg" className="center about-logo" />
                <h1 className="title">OPEN ARMS</h1>
                <h2 className="title-base">NEW YORK CITY</h2>
                <br />
                <div class="about-p">
                  <p>
                    Is a resource for people struggling with homelessness or
                    poverty in New York City.
                  </p>
                  <p>
                    Our clean & simple application provides the information of
                    all food pantries and shelters in NYC,<br />
                    as well as other resources, such as public bathrooms, job
                    opportunities and more.
                  </p>
                  <p>
                    Open Arms NYC is a project started by students at General
                    Assembly's Web Development Immersive course in NYC.
                  </p>
                  <p>
                    This application is an educational and not-for-profit
                    service.
                  </p>
                </div>
              </div>
            </Col>
            <Col xs={12} md={5}>
              <Row>
                <Col xs={12}>
                  <Carousel className="quotes m-top-three">
                    <Carousel.Item>
                      <blockquote className="blockquote blockquotes">
                        <p>
                          <br />I alone cannot change the world. But I can cast
                          a stone across the waters to create many ripples.
                        </p>
                        <footer class="blockquote-footer">
                          <cite title="Source Title">Mother Teresa</cite>
                        </footer>
                      </blockquote>
                    </Carousel.Item>
                    <Carousel.Item>
                      <div>
                        <blockquote className="blockquote blockquotes">
                          <p>
                            <br />You may not control all the events that happen
                            to you, but you can decide not to be reduced by
                            them.
                          </p>
                          <footer class="blockquote-footer">
                            <cite title="Source Title">Maya Angelou</cite>
                          </footer>
                        </blockquote>
                      </div>
                    </Carousel.Item>
                    <Carousel.Item>
                      <div className="sliderItem">
                        <blockquote className="blockquote blockquotes">
                          <p>
                            <br />We must accept finite disappointment, but we
                            must never lose infinite hope.
                          </p>
                          <footer class="blockquote-footer">
                            <cite title="Source Title">Martin Luther King</cite>
                          </footer>
                        </blockquote>
                      </div>
                    </Carousel.Item>
                  </Carousel>
                </Col>
              </Row>

              <Row>
                <Col xs={12}>
                  <br />
                  <h2 className="title">MEET THE TEAM</h2>
                  <Image src="/images/group-cat.jpg" responsive />
                </Col>
              </Row>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
export default About;
