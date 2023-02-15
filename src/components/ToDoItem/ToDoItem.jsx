import React from 'react'
import "../ToDoItem/ToDoItem.scss"

const ToDoItem = () => {
  return (
    <div className='to-do-item'>
        <input type="checkbox" className='to-do-item__checkbox'/>
        <p className='to-do-item__user-input'>Example</p>
        <button className='to-do-item__delete'>Del</button>
    </div>
  )
}

export default ToDoItem