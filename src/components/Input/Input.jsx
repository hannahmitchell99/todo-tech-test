import React from 'react'
import "../Input/Input.scss"
const Input = ({userInput, handleInput, handleClick}) => {
  return (
    <div className='input-container'>
        <input className='input-container__input' value={userInput} onChange={handleInput}></input>
        <button className='input-container__add' onClick={handleClick}>+</button>
    </div>
  )
}

export default Input