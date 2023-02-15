import React from 'react'
import "../Input/Input.scss"
const Input = () => {
  return (
    <div className='input-container'>
        <input className='input-container__input'></input>
        <button className='input-container__add'>+</button>
    </div>
  )
}

export default Input