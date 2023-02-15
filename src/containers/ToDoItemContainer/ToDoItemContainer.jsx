import React from 'react'
import ToDoItem from '../../components/ToDoItem/ToDoItem'
import "../ToDoItemContainer/ToDoItemContainer.scss"

const ToDoItemContainer = ({inputValues, handleDelete, handleCheck}) => {

      const inputItemsJSX = inputValues.map((inputValue)=> {
        return <ToDoItem key={inputValue.id} item={inputValue.textInput} handleDelete={handleDelete} handleCheck={handleCheck}/>
      })
      return (
        <div className='item-container'>{inputItemsJSX} </div>
  )
}

export default ToDoItemContainer