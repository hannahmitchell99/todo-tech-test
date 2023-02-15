import React from 'react'
import Input from '../../components/Input/Input'
import ToDoHeading from '../../components/ToDoHeading/ToDoHeading'
import "../Nav/Nav.scss"

const Nav = ({userInput, handleInput, handleClick, handleReset}) => {
  return (
    <nav className='nav-container'>
        <ToDoHeading handleReset={handleReset}/>
        <Input userInput={userInput} handleClick={handleClick} handleInput={handleInput}/>
    </nav>
  )
}

export default Nav