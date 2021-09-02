import React,{useState,useEffect} from 'react'

function UseEffectCounterOne() {
    const[count, setCount]=useState(0)
    const[name,setName]=useState(0)
    
    useEffect (()=>{
        console.log("useEffect - Updating document title")
        document.title=`You Clicked ${count} times`
    },[count])
    return (
        <div>
            <input type="text" value={name} onChange={e =>setName(e.target.value)}/>
            <button onClick={ () => setCount(count+1)}>Click{count} times
            </button>
        </div>
    )
}

export default UseEffectCounterOne
