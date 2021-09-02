import React,{useState,useEffect} from 'react'

function HookMouse() {
    const[x,setX]=useState(0)
    const[y,setY]=useState(0)

   const logMousePosition = e =>{
        console.log("mouse Event")
        setX(e.clientX)
        setY(e.clientY)
    }
    useEffect(() =>{
        console.log("useEffect Called")
        window.addEventListener('mousemove',logMousePosition)
        return() =>{
            console.log("Component unmounting code")
            window.removeEventListener('mousemove',logMousePosition)
        } //above from return clean code is run

    },[])//[] empty array is passed as argument to run useEffect hook only once
    return (
        <div>
            Hooks X-{x} Y-{y}
        </div>
    )
}

export default HookMouse
