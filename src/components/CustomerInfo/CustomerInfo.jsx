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
    const [type, setType] = useState('');

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
        dispatch({ type: 'ADD_INFO', payload: newCustomer });

        setInputName('');
        setInputAddress('');
        setInputCity('');
        setInputZip('');
        setType('');

    };

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
                                    value={inputName} />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>Address</p>
                            </td>
                            <td>
                                <input onChange={(event) => setInputAddress(event.target.value)}
                                    value={inputAddress} />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>City</p>
                            </td>
                            <td>
                                <input onChange={(event) => setInputCity(event.target.value)}
                                    value={inputCity} />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>Zip</p>
                            </td>
                            <td>
                                <input onChange={(event) => setInputZip(event.target.value)}
                                    value={inputZip} />
                            </td>
                        </tr>
                        <tr id='radio-btns'>
                            <td>
                                <input type="radio" name="acquisitionType" value="0" id="delivery" onClick={() => setType('Delivery')} />
                                <label for='delivery'>Delivery</label>
                                <input type="radio" name="acquisitionType" vaule="0" id="pick-up" onClick={() => setType('Pick-up')} />
                                <label for='pick-up'>Pick-up</label>
                            </td>
                        </tr>
                        <tr>
                            <p><input id='submit-btn' type="submit" value="Submit" /></p>
                        </tr>
                    </tbody>
                </table>
            </form>
        </>
    );
}



export default CustomerInfo;
