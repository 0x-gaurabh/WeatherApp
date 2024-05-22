import React, { useState } from 'react'

const Todo = () => {
    const [todo ,setTodo]=useState([])
    const [text,setText] =useState('')

    const handleAdd =() =>{
        if(text.trim() !==''){
            setTodo([...todo , text])
            setText('')
        }
    }

    const handleDelete =(index) =>{
        const newTodo =[...todo]
        newTodo.splice(index,1)
        setTodo(newTodo)

    }
   

    
        
    
  return (
    <div>
      <input value={text} onChange={e => setText(e.target.value)} placeholder='New Todo '></input>
     <button onClick={handleAdd}>Add</button>
     <ul>
     {todo.map((todoItem, index) => (
                    <li key={index}>
                        {todoItem}
                        <button onClick={() => handleDelete(index)}>Delete</button>
                    </li>
                ))}
     </ul>
      
    </div>
  )
}

export default Todo
