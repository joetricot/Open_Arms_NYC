import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <section className="props">
          <h3>Sharing is caring!</h3>
          <small>FOLLOW US</small>
          <br />
          <Row>
            <Col xs={12} md={2} mdOffset={4}>
          <div className="social">Facebook</div>
          </Col>
          <Col xs={12} md={1}>
          <div className="social">Twitter</div>
          </Col>
          </Row>
        </section>

        <section className="copyright">
          <div>&copy; 2017 Open Arms - NYC</div>
          <div>made with ❤️ by Julia, Rana, Joe & Mark</div>
        </section>
      </footer>
    );
  }
}

export default Footer;
