import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import './CustomerInfo.css'

function CustomerInfo() {

    // "customer_name" VARCHAR (1000) NOT NULL,
    // "street_address" VARCHAR(1000) NOT NULL,
    // "city" VARCHAR(1000) NOT NULL,
    // "zip" VARCHAR(20) NOT NULL,

    const [inputName, setInputName] = useState('');
    const [inputAddress, setInputAddress] = useState('');
    const [inputCity, setInputCity] = useState('');
    const [inputZip, setInputZip] = useState('');


    const history = useHistory();
    console.log(history);

    // Called when the submit button is pressed
    const addCustomer = (event) => {
        event.preventDefault();

        const newCustomer = {
            customer_name: inputName,
            street_address: inputAddress,
            city: inputCity,
            zip: inputZip
        };

        console.log(`Adding ${newCustomer.customer_name} to customer db`);
        debugger;
        // dispatch
    };

    // // Called when the submit button is pressed
    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     addStudent(student);
    //     clearStudentFields();
    // }

    // // Clear fields of the form by reseting the user
    // const clearStudentFields = () => {
    //     setStudent('');
    // }


    return (
        <>
            <h1>Add Customer Info</h1>
            <form onSubmit={addCustomer}>
                <table id='cust-info-table'>
                    <tbody>
                        <tr>
                            <td>
                                <p>Name</p>
                            </td>
                            <td>
                                <input onChange={(event) => setInputName(event.target.value)}
                                    placeholder="Customer Name"
                                    value={inputName} />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>Address</p>
                            </td>
                            <td>
                                <input onChange={(event) => setInputAddress(event.target.value)}
                                    placeholder="Address"
                                    value={inputAddress} />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>City</p>
                            </td>
                            <td>
                                <input onChange={(event) => setInputCity(event.target.value)}
                                    placeholder="City"
                                    value={inputCity} />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>Zip</p>
                                </td>
                            <td>
                                <input onChange={(event) => setInputZip(event.target.value)}
                                    placeholder="Zip"
                                    value={inputZip} />
                            </td>
                        </tr>
                    </tbody>
                </table>
                <p><input type="submit" value="Submit" /></p>
            </form>
        </>
    );
}



export default CustomerInfo;
