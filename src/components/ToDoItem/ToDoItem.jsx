import React from 'react'
import "../ToDoItem/ToDoItem.scss"

const ToDoItem = ({item, handleDelete, handleCheck}) => {
  return (
    <div className='to-do-item'>
        <input type="checkbox" className='to-do-item__checkbox' onClick={handleCheck}/>
        <p className='to-do-item__user-input'>{item}</p>
        <button className='to-do-item__delete' onClick={handleDelete}>Del</button>
    </div>
  )
}

export default ToDoItem