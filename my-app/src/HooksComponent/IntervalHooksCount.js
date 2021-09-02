import React,{useState,useEffect} from 'react'

function IntervalHooksCount() {
    const[count, setCount]=useState(0)

    const tick= () =>{
        // setCount(count+1)
        setCount(prevCount=>prevCount+1)
    }
    
    useEffect(()=>{
        // function doSomething(){
        //     console.log(someProp)
        // }
        // doSomething()
        const interval = setInterval(tick,1000)
        return ()=>{
            clearInterval(interval)
        }
    // })
    },[])
    // },[someProp])

    return (
        <div>
            {count}
        </div>
    )
}
export default IntervalHooksCount
