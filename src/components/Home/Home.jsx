import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';
import PizzaItem from '../PizzaItem/PizzaItem'
import './Home.css'

function Home() {

    // initialize the history to hook into the browser API
    const history = useHistory();
    console.log(history);

    const cart = useSelector(store => store.pizzaReducer)

    const getTotal = () => {
        let total = 0;
        for (let product of cart) {
            total += Number(product.price)
        }
        return total;
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
    }, []);

    const handleNext = () => {
        history.push('/customerinfo');
    }

    return (
        <>
        <div>
            <h1>HOME</h1>
            <h2>Total Price is: ${getTotal()}</h2>
            <p>This is where the pizzas will be listed and order(s) can be created</p>
            {pizzaList.map(pizza => <PizzaItem pizza={pizza} />)}
        </div>
        <button id="nextButton" onClick={handleNext}>NEXT</button>
        </>
    );
}

export default Home;
