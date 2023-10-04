import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function NavbarComponent() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand as={Link} to="/">Clearmind</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/">Inicio</Nav.Link>
          <NavDropdown title="Categorías" id="basic-nav-dropdown">
            <NavDropdown.Item as={Link} to="/categoria/1">Chocolates</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/categoria/2">Caramelos</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/categoria/3">Alfajores</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavbarComponent;

