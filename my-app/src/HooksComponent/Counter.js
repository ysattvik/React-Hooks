import React,{useState,useMemo} from 'react'
import CounterOne from './CounterOne'

function Counter() {
    const[counterOne,setCounterOne]=useState(0)
    const[counterTwo,setCounterTwo]=useState(0)


    const incrementone = ()=>{
        setCounterOne(counterOne +1)

    }
     const incrementtwo = () =>{
         setCounterTwo(counterTwo +1)
     }

// const isEven = useMemo(() =>{
//     let i=0
//     while(  i<200000000) i++
//     return counterOne % 2 === 0
// },[CounterOne])

    return (
        <div>
        <div>
            <button onClick={incrementone}>count one-{counterOne}</button>
            <span>{isEven() ? 'Even' :'odd'}</span>
        </div>
        <div>
            <button onClick={incrementtwo}> count two-{counterTwo}</button>
        </div>
    
     </div>
    )
}

export default Counter
