import React from 'react'
import ToDoItem from '../../components/ToDoItem/ToDoItem'
import "../ToDoItemContainer/ToDoItemContainer.scss"

const ToDoItemContainer = () => {
  return (
    <div className='item-container'>ToDoItemContainer
    <ToDoItem/>
    <ToDoItem/>
    </div>
  )
}

export default ToDoItemContainer