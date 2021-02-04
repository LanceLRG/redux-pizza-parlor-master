//  put nav and name and checkout price here.

import React, { useState }from 'react';
import { HashRouter as Router, Route, Link } from "react-router-dom";
import { useSelector, useHistory } from 'react-router-dom';
import './Header.css'; 
import axios from 'axios';

function Header(props) {

    // const [priceTot, setPriceTot] = useState(0);

    // const checkTot = cuseSelector(store => store.pizzaReducer);

    // const pricer () =

    return (
        <div>
            <header className='App-header'>
                <h1 className='App-title'>Prime Pizza</h1>
                <p id="checkout">Checkout Total:{checkTot}</p>

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
