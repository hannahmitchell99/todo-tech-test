import React from 'react'
import Input from '../../components/Input/Input'
import ToDoHeading from '../../components/ToDoHeading/ToDoHeading'
import "../Nav/Nav.scss"

const Nav = () => {
  return (
    <nav className='nav-container'>
        <ToDoHeading/>
        <Input/>
    </nav>
  )
}

export default Nav