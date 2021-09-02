import React,{useState,useEffect,useRef} from 'react'

function FocusInput() {

    const inputref=useRef(null)

    useEffect (()=>{
        //focus on input element
        inputref.current.focus()
    },[])
    return (
        <div>
            <input type="text" ref={inputref}></input>
        </div>
    )
}

export default FocusInput
