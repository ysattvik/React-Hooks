import React,{useState,useEffect} from 'react'
import axios from 'axios'

export default function DataFetchingOne() {
    const[loading,setLoading]=useState(true)
    const[error,setError]=useState('')
    const[post,setPost]=useState({})

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/1`)
        .then(response =>{
            setLoading(false)
            setPost(response.data)
            setError('')
        })
        .catch(error=>{
            setLoading(false)
            setPost({})
            setError('something went wrong')
        })
    },[])
    return (
        <div>
       
          { loading ? 'loading':post.title}
           {error ? error :null }
            
        </div>
    )
}
