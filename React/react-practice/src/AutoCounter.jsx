import React, { useState } from 'react'

const AutoCounter = () => {
    const [count,setCount] = useState(0);
    const [isRunning,setIsrunning] = useState(false);

    const handleIncrement = () =>{
        if(isRunning) return;
        setIsrunning(true)

        let target = count +10;
        let intervel = setInterval(()=>{
            setCount((prev)=>{
                if(prev < target){
                    return prev + 1
                }else{
                    clearInterval(intervel);
                    setIsrunning(false)
                    return prev
                }
            })
        },200)
    }

    const handleDecrement = () =>{
        if(isRunning) return;
        setIsrunning(true)

        let target = count - 10;
        let intervel = setInterval(()=>{
            setCount((prev)=>{
                if(prev > target){
                    return prev - 1
                }else{
                    clearInterval(intervel);
                    setIsrunning(false)
                    return prev
                }
            })
        },200)
    }

  return (
    <div>
        <h1>Counter</h1>
        <p>Count : {count}</p>
        <button onClick={handleIncrement}>Increment by 10</button>
        <button onClick={handleDecrement}>Decrement by 10</button>
        <button onClick={()=>setCount(0)}>Reset</button>
    </div>
  )
}

export default AutoCounter