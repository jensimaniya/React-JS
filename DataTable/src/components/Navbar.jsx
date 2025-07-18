import React from "react";
import {
  Navbar,
  Nav,
  Container,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

function NavBar({ searchTerm, setSearchTerm }) {
  return (
    <Navbar
      expand="lg"
      variant="dark"
      style={{ background: "#1a73e8", padding: "0.75rem" }}
    >
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand style={{ fontWeight: "bold", fontSize: "1.5rem" }}>
            ✨ MyApp
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="nav" />
        <Navbar.Collapse id="nav">
          <Nav className="me-auto">
            <LinkContainer to="/">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/add-item">
              <Nav.Link>Add Item</Nav.Link>
            </LinkContainer>
          </Nav>
          <Form className="d-flex" onSubmit={(e) => e.preventDefault()}>
            <FormControl
              type="search"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{ width: "200px", marginRight: "0.5rem" }}
            />
            <Button variant="light">🔍</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
