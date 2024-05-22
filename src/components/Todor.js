import React from 'react'
import { useState } from 'react'

const Todor = () => {
    const [text,setText] =useState('')
    const [todo,setTodo] =useState([])

    const handleAdd =() =>{
        if(text.trim() !==""){
        setTodo([...todo ,text])
        setText('')
        }
        else{
            alert("Enter a value")
        }
    }

    const handleremove =(index)=>{
        const newTodo =[...todo]
        newTodo.splice(index,1)
        setTodo(newTodo )
    }
  return (
    <div>
      <input type="text"  onChange={(e) => setText(e.target.value)} value={text}  placeholder='Add Your item' />
      <button onClick={handleAdd}>Add item</button>
       <ul>
       {todo.map((item,index) =>(<li key={index}>{item} 
        <button onClick={handleremove} >Remove</button>
               </li>)
           
           )}
       </ul>
    </div>
  )
}

export default Todor
