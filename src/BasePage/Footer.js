import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { COPYRIGHT } from './DataModel';

function Footer() {

    return (
        <Navbar bg="dark" fixed="bottom" style= {customFooter}>
            <div style = {customCopyright}>
               {COPYRIGHT}
            </div>
        </Navbar>
    )
}

export default Footer;

const customFooter = {
    height: '4%'
}

const customCopyright = {
    color:'white', 
    fontSize: '80%'
}