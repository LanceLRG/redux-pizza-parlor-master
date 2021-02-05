import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';

// set up reducters
const pizzaReducer = (state = [], action) => {
    if (action.type === 'ADD_PIZZA') {
        let newState = action.payload;
        return [...state, newState]
    }
    if (action.type === 'DELETE_PIZZA') {
        return action.payload;
    }
    if (action.type === 'CHARGE_PIZZA') {
        totalPrice += action.payload.price
        return totalPrice;
    }
    return state;
};

const formReducer = (state = [], action) => {
    //Customer info here
    if (action.type === 'ADD_INFO') {
        console.log(action.payload);
        let newState = action.payload;
        return [...state, newState]
    }
    return state;
};

// set up store
const storeInstance = createStore(
    combineReducers(
        {
            pizzaReducer,
            formReducer
        }
    ),
    applyMiddleware(
        logger
    )
);




ReactDOM.render(
    <Provider
        store={storeInstance}
    >
        <App />
    </Provider >, document.getElementById('root'));
