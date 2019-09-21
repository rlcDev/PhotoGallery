import React from 'react';
import { CATEGORIES } from "./DataModel";
import { Route } from 'react-router-dom';

function Routes() {
  
    let route;
  return(
      CATEGORIES.map( (c, index) => {
          if(c.name === "") {
              route = <Route exact path = {c.path} component = {c.component} key = {index}/>
          } else {
              route = <Route  path = {c.path} component = {c.component} key = {index}/>
          }
          return route
      })
  )
}

export default Routes;