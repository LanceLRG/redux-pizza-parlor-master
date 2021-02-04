import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
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
    const [type, setType] = useState('')

    const dispatch = useDispatch();

    // Called when the submit button is pressed
    const onSubmit = (event) => {

        event.preventDefault();

        const newCustomer = {
            customer_name: inputName,
            street_address: inputAddress,
            city: inputCity,
            zip: inputZip,
            type: type,
        };

        console.log(`Adding ${newCustomer.customer_name} to customer db`);
        dispatch({ type: 'ADD_CUSTOMER', payload: newCustomer });

        setInputName('');
        setInputAddress('');
        setInputCity('');
        setInputZip('');

    };

    const reduxStore = useSelector(store => store);

    return (
        <>
            <h1>Add Customer Info</h1>
            <form onSubmit={onSubmit}>
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
                        <tr>
                            <td>
                                <input type="radio" name="type" id="delivery" value='delivery' checked/>
                                <label for='delivery'>Delivery</label>
                            </td>
                            <td>
                                <input type="radio" name="type" id="pick-up" value='pick-ip'/>
                                <label for='pick-up'>Pick-up</label>
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
