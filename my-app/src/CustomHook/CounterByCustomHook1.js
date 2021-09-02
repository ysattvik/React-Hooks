import React,{useState} from 'react'
import useCounter from '../CustomHook/useCounter'

function CounterByCustomHook1() {
    const [count,increment,decrement,reset]= useCounter(10,5)
        return (
            <div>
                <div>Count={count}</div>
                <button onClick={increment}>Increment</button>
                <button onClick={decrement}>Decrement</button>
                <button onClick={reset}>Reset</button>
            </div>
        )
    
}

export default CounterByCustomHook1
