import React from 'react';
import { useHistory } from 'react-router-dom';

function Home() {

    // initialize the history to hook into the browser API
    const history = useHistory();
    console.log(history);

    return (
        <div>

            <h1>HOME</h1>
            <img src='images/pizza_photo.png' />
            <p>Pizza is great.</p>
            <p>This is where the pizzas will be listed and order(s) can be created</p>
           
        </div>
    );
}

export default Home;
