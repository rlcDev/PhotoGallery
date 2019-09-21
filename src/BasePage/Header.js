import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { HEADER_TITLE, CATEGORIES } from './DataModel';
import Category from './Category';
import Nav from 'react-bootstrap/Nav';

function Header() {
  
  return(
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="/">
      {HEADER_TITLE}
    </Navbar.Brand>
    <Nav className="mr-auto">
        { CATEGORIES.map( (data, index) => Category(data, index))}
    </Nav>
  </Navbar>
  )}

export default Header;