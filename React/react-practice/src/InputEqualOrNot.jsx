import React, { useState } from 'react'

const InputEqualOrNot = () => {
    const [input1,setInput1] = useState('')
    const [input2,setInput2] = useState('')
    const [message,setMessage] = useState(""); 
    const matching = () =>{
        if(input1===input2){
            setMessage("Equal")
        }else{
            setMessage("Not Eqal")
        }
    }
     return (
    <div>
      <input type="text" onChange={(e)=> setInput1(e.target.value)} value={input1} placeholder='Enter first text' />
      <input type="text" onChange={(e)=> setInput2(e.target.value)} value={input2} placeholder='Enter Second text' />
      <p>Result : {message}</p>
      <button onClick={matching}>Check Equal or Not</button>
    </div>
  )
}

export default InputEqualOrNot