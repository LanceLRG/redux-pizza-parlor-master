import './PizzaItem.css'
import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

function PizzaItem({pizza}) {

    const pizzaStore = useSelector(store => store.pizzaReducer)
    const dispatch = useDispatch();

    console.log('store is', pizzaStore);

    const [addButton, setAddbutton] = useState(true);
    const [removeButton, setRemoveButton] = useState(false);
    
    const toggleButton = () => {
        console.log('switching!');
        setAddbutton(!addButton);
        setRemoveButton(!removeButton);
    }
    
    const addThis = (myPizza) => {
        dispatch({
            type: 'ADD_PIZZA',
            payload: myPizza,
        })
        console.log('hi');
        toggleButton();
    }
    const deletePizza = (pizzaToDelete) => {
        
        const matchPizza = pizza => pizza.id !== pizzaToDelete.id;
        
        dispatch({type: 'DELETE_PIZZA', payload: pizzaStore.filter(matchPizza)})
        toggleButton();  
    }

    console.log(pizza);
    return (
<div className="menuItem" key={pizza.id}>
    <img src={pizza.image_path} height="200px" width="200px"/>
    <h3>{pizza.name}</h3>
    <p>{pizza.description}</p>
    <p>${pizza.price}</p>
    {addButton && <button onClick={() => addThis(pizza)}>Add</button>}
    {removeButton && <button onClick={() => deletePizza(pizza)}>Remove</button>}

</div>   
 )
}

export default PizzaItem;