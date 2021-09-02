import React,{useState} from 'react'

function Hookscounterthree() {

    const[name,setName]=useState({firstName:'' , lastName:''})
    return (
        <div>
            <input 
            type="text" value={name.firstName}
            // onChange={e =>setName({firstName:e.target.value})}
            onChange={e => setName({...name,firstName:e.target.value})}
            />
            <input 
            type="text" value={name.lastName}
            // onChange={e =>setName({lastName:e.target.value})}
            onChange={e =>setName({...name,lastName:e.target.value})}
            />
            <h2>Your First Name is-{name.firstName}</h2>
            <h2>Your last Name is-{name.lastName}</h2>
            <h2>{JSON.stringify(name)}</h2>
        </div>
    )
}

export default Hookscounterthree
