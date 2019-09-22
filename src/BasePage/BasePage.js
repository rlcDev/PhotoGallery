import React from 'react';
import Header from './Header'
import Footer from './Footer';

import { HashRouter as Router } from 'react-router-dom'
import Routes from './Routes';

function BasePage() {
    return (
        <Router>
            <Header />
                {Routes()}
            <Footer />
        </Router>
    )
}

export default BasePage;
