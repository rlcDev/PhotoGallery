import React from 'react';
import './home.css';
import { WELCOME_MESSAGE } from './DataModel';

function Home() {

    return (
        <div className="fade-in">
            <h1 className="welcomeStyle">
                {WELCOME_MESSAGE}
            </h1>
        </div>
    )
}
export default Home;