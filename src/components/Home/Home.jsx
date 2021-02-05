import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import PizzaItem from '../PizzaItem/PizzaItem'
import './Home.css'

function Home() {

    

    // initialize the history to hook into the browser API
    const history = useHistory();
    const dispatch = useDispatch();
    console.log(history);

    const cart = useSelector(store => store.pizzaReducer)

    const clearAll = () => {
        dispatch({
            type: 'DELETE_ALL'
        });
    }

    const [pizzaList, setPizzaList] = useState([]);

    //GET request for pizza menu
    const getPizza = () => {
        axios.get('/api/pizza')
            .then((response) => {
                //console.log(response.data);
                setPizzaList(response.data)
            }).catch((err) => {
                console.log(err);
                pizzaList
            })
    }

    useEffect(() => {
        getPizza();
        clearAll();
    }, []);

    const handleNext = () => {
        history.push('/customerinfo');
    }

    return (
        <>
        <div>
            <h1>Step 1: Select what you'd like to order</h1>
            {pizzaList.map(pizza => <PizzaItem pizza={pizza} />)}
        </div>
        <button id="nextButton" onClick={handleNext}>NEXT</button>
        </>
    );
}

export default Home;
