//  put nav and name and checkout price here.

import React from 'react';
import { HashRouter as Router, Route, Link } from "react-router-dom";
import { useHistory } from 'react-router-dom';
import './Header.css'; 

function Header() {

    return (
        <div>
            <header className='App-header'>
                <h1 className='App-title'>Prime Pizza</h1>
                <nav>
                    <ul>
                        <li> <Link to="/">Home</Link></li>
                        <li><Link to="/checkout">Checkout</Link></li>
                        <li><Link to="/customerinfo">Customer Info</Link></li>
                    </ul>
                </nav>

            </header>
        </div>
    );
}

export default Header;
