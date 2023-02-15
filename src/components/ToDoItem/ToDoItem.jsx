import React from 'react'
import "../ToDoItem/ToDoItem.scss"

const ToDoItem = ({item}) => {
  return (
    <div className='to-do-item'>
        <input type="checkbox" className='to-do-item__checkbox'/>
        <p className='to-do-item__user-input'>{item}</p>
        <button className='to-do-item__delete'>Del</button>
    </div>
  )
}

export default ToDoItem