import React from 'react'

const Counter = (props) => {
    return (
        <div>
            <h1>User Details</h1>
            <h4>{props.name}</h4>
            <h4>{props.age}</h4>
        </div>

    )
}

export default Counter