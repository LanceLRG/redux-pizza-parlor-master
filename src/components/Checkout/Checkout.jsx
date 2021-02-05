import {useState} from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import Swal from 'sweetalert2'
import { useHistory } from 'react-router-dom';
import './Checkout.css'



function Checkout() {


    const history = useHistory();
    const pizzaStore = useSelector(store => store.pizzaReducer)
    const customerStore = useSelector(store => store.formReducer)
    console.log('customer store is:', customerStore);
    console.log('pizza store is:', pizzaStore);


    const getTotal = () => {
        let total = 0;
        for (let product of pizzaStore) {
            total += Number(product.price)
        }
        return total;
    }



    const submitCheckout = () => {
        axios.post('/api/order',
        {customer_name: customerStore[0].customer_name,
        street_address: customerStore[0].street_address, 
        city: customerStore[0].city,
        zip: customerStore[0].zip,
        type: customerStore[0].type,
        total: getTotal(),
        pizzas: pizzaStore})
        .then ((result) => {
    }).catch ((err) => {
        console.log(err);
    })

    Swal.fire({
        title: 'Thanks for submitting your order?',
        text: 'Our team of highly trained goats is preparing your order now',
        icon: 'success',
        showCancelButton: false,
        confirmButtonColor: 'rgb(118, 185, 101)',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes!'})
        .then((result) => history.push('/')
        )
    }
    

    return(
        <>
        <h2>Step 3: Checkout</h2>
        <div id="customerInfo">
            {customerStore[0].customer_name} <br />
            {customerStore[0].street_address} <br />
            {customerStore[0].city} <br />
            {customerStore[0].zip} <br />
        </div>
        <div id="orderType">
            For {customerStore[0].type}
        </div>
        <hr />
        <table id="pizzaTable">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Cost</th>
                </tr>
            </thead>
            <tbody>
                {pizzaStore.map(pizza => <tr><td>{pizza.name}</td><td>{pizza.price}</td></tr>)}
            </tbody>
        </table>
        <div>
            Total: {getTotal()}
        </div>
        <button onClick={submitCheckout}>Checkout</button>
        </>
    )
}

export default Checkout;