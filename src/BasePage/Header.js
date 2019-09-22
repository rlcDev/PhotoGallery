import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { HEADER_TITLE, CATEGORIES } from './DataModel';
import Category from './Category';
import Nav from 'react-bootstrap/Nav';
import { LinkContainer } from 'react-router-bootstrap';

function Header() {

  return (
    <Navbar bg="dark" variant="dark">
      <LinkContainer to = "/">
        <Navbar.Brand>
          {HEADER_TITLE}
        </Navbar.Brand>
      </LinkContainer>
      <Nav className="mr-auto">
        {
          CATEGORIES.map((data, index) => {
            let categoryTmp;
            if (data.name !== "") {
              categoryTmp = Category(data, index)
            }
            return categoryTmp
          })
        }
      </Nav>
    </Navbar>
  )
}

export default Header;