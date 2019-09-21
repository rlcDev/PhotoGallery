import React from 'react';
import Header from './Header'
import Footer from './Footer';

import { BrowserRouter as Router, Switch } from 'react-router-dom'
import Routes from './Routes';

function BasePage() {
    return (
        <Router basename = {process.env.PUBLIC_URL}>
                <Header/>
                <Switch>
                    {Routes()}
                </Switch>
                <Footer/>
        </Router>
    )
}

export default BasePage;
