import React from 'react';
import Nav from 'react-bootstrap/Nav';

function Category(props) {

  return (
    <Nav.Link href={props.path} key = {props.index}>
      {props.name}
    </Nav.Link>
  )
}
export default Category;