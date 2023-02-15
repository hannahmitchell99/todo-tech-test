import React from 'react'
import "../ToDoHeading/ToDoHeading.scss"

const ToDoHeading = ({handleReset}) => {
  return (
    <div className='to-do-heading'>
      <h1 className='to-do-heading__header'>My ToDos</h1>
      <button className='to-do-heading__reset' onClick= {handleReset}>Reset</button>
    </div>
  )
}

export default ToDoHeading