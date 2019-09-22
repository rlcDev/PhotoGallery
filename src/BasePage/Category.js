import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import Nav from 'react-bootstrap/Nav';

function Category(props) {

  return (
    <LinkContainer to={props.path} key={props.index}>
      <Nav.Link>
        {props.name}
      </Nav.Link>
    </LinkContainer>
  )
}
export default Category;