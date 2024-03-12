import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import { Container, Row, Col } from "react-bootstrap"; // Import React Bootstrap components

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-2">
      <Container>
        <Row>
          <Col md={5}>
            <p>Logo Content maybe</p>
            <p>This is some footer content.</p>
          </Col>
          <Col md={3}>
            <ul className="list-unstyled">
              <li>
                <a href="#">Link 1</a>
              </li>
              <li>
                <a href="#">Link 2</a>
              </li>
            </ul>
          </Col>
          <Col md={3}>
            <p>Contact</p>
            <p>Email: example@example.com</p>
            <p>Phone: 123-456-7890</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
