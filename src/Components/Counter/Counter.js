import React, { useState } from 'react';
import './Counter.css'
document.getElementsByTagName("body")[0].style.backgroundColor = "white";
function Counter()
{
    
    {   
        const [counter , setCounter] = useState(0);
        const incrementCounter = () => 
        {
            setCounter(counter +1);
        };

        const decrementCounter = () =>
        {
            setCounter(counter -1)
        };
        

        return (
            
        <div className="Counter">
        <h1>Counter App</h1>
        <div className="counter-circle">{counter}</div>
        <button className="increment-button" onClick={incrementCounter}>
        +
        </button>
        <button className="decrement-button" onClick={decrementCounter}>
        -
        </button>
        </div>
        );
    }

}
export default Counter;
