//  put nav and name and checkout price here.
import React from 'react';
import { HashRouter as Router, Route, Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import './Header.css'; 


function Header() {


    const checkTot = useSelector(store => store.pizzaReducer);

    const cart = useSelector(store => store.pizzaReducer)

    const getTotal = () => {
        let total = 0;
        for (let product of cart) {
            total += Number(product.price)
        }
        return total;
    }
 
    return (
        <div>
            <header className='App-header'>
                <h1 className='App-title'>Goat Pizza</h1>
              <p id="checkout">Total Price: ${getTotal()}</p>
                {/* <nav>
                    <ul>
                        <li> <Link to="/">Home</Link></li>
                        <li><Link to="/checkout">Checkout</Link></li>
                        <li><Link to="/customerinfo">Customer Info</Link></li>
                    </ul>
                </nav> */}
            </header>
        </div>
    );
}

export default Header;


