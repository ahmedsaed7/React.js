import { useState } from "react";
import "counter.css"
const Counter = ()=>{
    const [count , setCount] = useState(0)
    const increment =()=>{
        setCount(count+1)
    }
    const decrement =()=>{
        setCount(count-1)
    }
    return(
        <div className=" continer">
            <h1>Counter</h1>
            <div className="counter">
                <p>Count: {count}</p>
                <button className="btn" onClick={increment}>Increment</button>
                <button  className= "btn" onClick={decrement}>Decrement</button>
            </div>
            
        </div>
    )
}
export default Counter ; 