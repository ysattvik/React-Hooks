import React,{useState} from 'react'
import useCounter from '../CustomHook/useCounter'

function CounterByCustomHook() {
    const [count, increment, decrement, reset]= useCounter(0,10)
        return (
            <div>
                <div>Count={count}</div>
                <button onClick={increment}>Increment</button>
                <button onClick={decrement}>Decrement</button>
                <button onClick={reset}>Reset</button>
            </div>
        )
    
}

export default CounterByCustomHook
