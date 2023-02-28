import { useState } from "react";
import Count from '../components/counter/Count'
import CounterActions from "../components/counter/CounterActions";

const Counter = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };
    const decrement = () => {
        count > 0 && setCount(count - 1);
    };
    return (
        <div className="counter-wrapper">
            <div className="d-flex justify-content-center">
               <Count count={count} />
            </div>
            <div className="d-flex justify-content-center">
               <CounterActions increment={increment} decrement={decrement}/>
            </div>
        </div>
    )
}

export default Counter