import React from 'react';
import { CATEGORIES } from "./DataModel";
import { Route } from 'react-router-dom';

function Routes() {

    return (
        CATEGORIES.map((c, index) => {
            return <Route exact path={c.path} component={c.component} key={index} />
        })
    )
}

export default Routes;