import React from 'react'
import { useState } from 'react'
const NewTask = ({onAdd}) => {
    const [enteredTask, setEnteredTask]=useState('');
    const handleChange=(e)=>{
        setEnteredTask(e.target.value);
    }
    const handleClick=()=>{
        if(enteredTask.trim()==='') {
            return;
        }
        onAdd(enteredTask)
        setEnteredTask('');
    }
  return (
    <div>
        <input type='text' className='w-64 px-2 py-1 rounded-sm bg-stone-200'
        onChange={handleChange}
        value={enteredTask}/>
        <button className='text-stone-700 hover:text-stone-950 ml-2'
        onClick={handleClick}>Add task</button>
    </div>
  )
}

export default NewTask