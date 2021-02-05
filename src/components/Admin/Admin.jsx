import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import "./Admin.css"
import { useSelector } from 'react-redux';
import CustomerInfo from '../CustomerInfo/CustomerInfo';



// display customer name, time order placed, type (delivery or pickup) and total cost

function Admin(  ) {

    const [adminList, setAdminList] = useState([]);

    //GET request for admin info
    const getInfo = () => {
        axios.get('/api/order')
            .then((response) => {
                console.log(response.data);
                setAdminList(response.data)
            }).catch((err) => {
                console.log(err);
            })
    }

    useEffect(() => {
        getInfo();
    }, []);

   
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
                        <td>{adminList.name}</td><td>{adminList.time}</td><td>{adminList.type}</td><td>{adminList.total}</td>
                    </tr>
            </tbody>
        </table>
        </>

    );
    
}



export default Admin;
