import './App.scss';

import React from 'react'
import Nav from './containers/Nav/Nav';
import ToDoItemContainer from './containers/ToDoItemContainer/ToDoItemContainer';

const App = () => {
  return (
    <div className='app'>
        <Nav/>
        <ToDoItemContainer/>
    </div>
    
  )
}

export default App

