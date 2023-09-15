import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'; // Importa los componentes de Bootstrap

function NavBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#">Nombre de la Tienda</Navbar.Brand> {/* Título de la tienda */}
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#">Inicio</Nav.Link> {/* Puedes reemplazar "#" con la URL real */}
          <NavDropdown title="Categorías" id="basic-nav-dropdown">
            <NavDropdown.Item href="#">Categoría 1</NavDropdown.Item>
            <NavDropdown.Item href="#">Categoría 2</NavDropdown.Item>
            <NavDropdown.Item href="#">Categoría 3</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
