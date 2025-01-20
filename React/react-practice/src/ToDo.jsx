import React, { useState } from 'react'

const ToDo = () => {
    const [task, setTask] = useState('');
    const [tasks, setTasks] = useState([]);
    const handleAddTask = () => {
        if (task.trim()) {
            setTasks([task,...tasks])
            setTask('')
        }
    }
    const handleDeleteTask = (index) =>{
        const updateTask = tasks.filter((_,i) => i !== index)
        setTasks(updateTask)
    }
    return (
        <div>
            <h1>To-Do App</h1>
            <h3>Tasks</h3>
            <input type="text" value={task} onChange={(e) => setTask(e.target.value)} placeholder='Enter task to add' />
            <button onClick={handleAddTask}>Add Task</button>
            <ul>
                {
                    tasks.map((tsk, i) => (
                        <li key={i}>{tsk}
                        <button onClick={() => handleDeleteTask(i)}>Delete</button>
                        </li> 
                        
                    ))
                }
            </ul>
        </div>
    )
}

export default ToDo