import React,{useState} from 'react'
import useDocumentTitle from './useDocumentTitle'

function DocTitleTwo() {
    const[count,setCount]=useState(0)
    useDocumentTitle(count)
    return (
        <div>
            <button onClick={()=>setCount(count+1)}>count {count} times
            </button>
        </div>
    )
}

export default DocTitleTwo
