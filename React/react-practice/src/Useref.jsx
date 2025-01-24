import React, { useEffect, useRef, useState } from 'react'

const Useref = () => {
    const [name,setName] = useState('')
    const renderCount = useRef(1); 
    useEffect(()=>{
        renderCount.current = renderCount.current +1
    })
  return (
    <div>
        <input onChange={(e)=> setName(e.target.value)} type="text" placeholder='Enter the name' />
        <p>My name is : {name}</p>
        <p>REndered : {renderCount.current}</p>
    </div>
  )
}

export default Useref