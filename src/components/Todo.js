import './todo.css'
import { useState } from 'react'
import React from 'react'

const [todo,settodo]= useState('')

const typeFnctn = (event)=>{
    const input = event.target.value
    settodo(input)
    console.log(input);
}

function Todo() {
  return (
    <div className='container'>
      <h1>Todo App</h1>
      <form className='input-section'>
        <input  value ={input} type="text" placeholder='Enter Items ..' onChange={typeFnctn} />
        <i class="fa-solid fa-plus"></i>
      </form>
      <ul>
        <li>items <i class="fa-solid fa-trash"></i></li>
        
        <li>items</li>

      </ul>

    </div>
  )
}

export default Todo
