import React from 'react'
import ToDoItem from '../../components/ToDoItem/ToDoItem'
import "../ToDoItemContainer/ToDoItemContainer.scss"

const ToDoItemContainer = ({inputValues, handleDelete}) => {

      const inputItemsJSX = inputValues.map((inputValue)=> {
        return <ToDoItem key={inputValue.id} item={inputValue.textInput} handleDelete={handleDelete}/>
      })
      return (
        <div className='item-container'>{inputItemsJSX} </div>
  )
}

export default ToDoItemContainer