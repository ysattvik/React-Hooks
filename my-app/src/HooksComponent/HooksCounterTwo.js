import React , {useState} from 'react'

function HooksCounterTwo() {
    const initialState=0
    const[count, setCount]=useState(initialState)
    const incrementFive = () =>{
        for(let i=0;i<5;i++)
        {
            setCount(prevCount =>prevCount +1)//increment by 5
        }
    }
    return (
        <div>
            count:{count}
            {/* <button onClick={() =>setCount(initialState)} type="submit">Reset</button>
            <button onClick={() =>setCount(count+1)} type="submit">Increment</button>
            <button onClick={() =>setCount(count-1)} type="submit">Decrement</button> */}

            <button onClick={() =>setCount(initialState)} type="submit">Reset</button>
            <button onClick={() =>setCount(prevState=> prevState+1)} type="submit">Increment</button>
            <button onClick={() =>setCount(prevState=> prevState+1)} type="submit">Decrement</button>
            <button onClick={incrementFive} type="submit">Increment5</button>
        </div>
    )
}

export default HooksCounterTwo
