import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import "./Admin.css"
import { useSelector } from 'react-redux';


// display customer name, time order placed, type (delivery or pickup) and total cost

function Admin() {

    const [adminList, setAdminList] = useState([]);

    //GET request for admin info
    const getInfo = () => {
        axios.get('/')
            .then((response) => {
                console.log(response.data);
                setAdminList(response.data)
            }).catch((err) => {
                console.log(err);
                pizzaList
            })
    }

    const cart = useSelector(store => store.pizzaReducer)


    const getTotal = () => {
    let total = 0;
    for (let product of cart) {
        total += Number(product.price)
    }
    return total;
}



    return (

        <>
        <h1>ADMIN_PAGE</h1>
        <table>
            <thead>
                <tr>
                        <td> Name</td><td>Time Order Place</td><td>Type</td><td>Cost</td>
                </tr>

            </thead>
            <tbody>
                    <tr>
                        <td>{adminList.name}</td><td>{adminList.time}</td><td>{adminList.type}</td><td>${getTotal()}</td>
                    </tr>
            </tbody>
        </table>
        </>

    );
    
}



export default Admin;
