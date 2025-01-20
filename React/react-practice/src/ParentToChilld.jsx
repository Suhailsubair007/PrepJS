import React from 'react'

const ParentToChilld = () => {
    const handleDataFromChild = (data) =>{
        console.log(data)
    }

    const Child = ({sendData}) =>{
        return <button onClick={()=> sendData('Hello from Parent')}>Send Data</button>
    }

  return (
    <div>
        <h2>PArent Component</h2>
        <Child sendData={handleDataFromChild} />
    </div>
  )
}

export default ParentToChilld