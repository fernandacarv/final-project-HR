import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import { Form, FormControl, Button } from "react-bootstrap"; // Import React Bootstrap components
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

const NavbarComponent = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar
      variant="dark"
      bg="dark"
      sticky="top"
      expand="lg"
      style={{ display: "flex", justifyContent: "space-between" }}>
      <Navbar.Brand
        className="mx-3"
        href="#">
        Navbar
      </Navbar.Brand>
      <Navbar.Toggle
        aria-controls="navbarSupportedContent"
        onClick={() => setExpanded(!expanded)}
      />
      <Navbar.Collapse
        id="navbarSupportedContent"
        expanded={expanded}>
        <Nav className="me-auto">
          <Nav.Link
            href="#"
            active>
            Home
          </Nav.Link>
          <Nav.Link href="#">Link</Nav.Link>
          <NavDropdown
            title="Dropdown"
            id="navbarDropdown">
            <NavDropdown.Item href="#">Action</NavDropdown.Item>
            <NavDropdown.Item href="#">Another action</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#">Something else here</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link
            href="#"
            disabled>
            Disabled
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
      <Form className="d-flex mx-3">
        <FormControl
          type="search"
          placeholder="Search"
          className="mr-2 mx-3"
          aria-label="Search"
        />
        <Button variant="primary">Search</Button>
      </Form>
    </Navbar>
  );
};

export default NavbarComponent;
