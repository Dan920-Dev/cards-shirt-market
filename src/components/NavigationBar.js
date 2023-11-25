// NavigationBar.js

import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

function NavigationBar({ onSelectEndpoint }) {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">Market Sport</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link onClick={() => onSelectEndpoint('all')}>All Products</Nav.Link>
        <Nav.Link onClick={() => onSelectEndpoint('products/category/2')}>Basketball</Nav.Link>
        <Nav.Link onClick={() => onSelectEndpoint('products/category/1')}>Soccer</Nav.Link>
        {/* Agrega más enlaces según sea necesario */}
      </Nav>
    </Navbar>
  );
}

export default NavigationBar;
