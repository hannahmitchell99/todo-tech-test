import { useEffect, useState } from "react";
import "./App.scss";
import React from "react";
import Nav from "./containers/Nav/Nav";
import ToDoItemContainer from "./containers/ToDoItemContainer/ToDoItemContainer";

let index = 0; // had to place it here or the index didn't increment
const App = () => {
  const [userInput, setUserInput] = useState("");
  const [toDo, setToDo] = useState([]);
  const [handleDelete, setHandleDelete] = useState(false)
  

  const handleInput = (event) => {
    setUserInput(event.target.value);
  };

  const handleAddClick = () => {
    setUserInput("");
    setToDo([...toDo, { id: index++, 
        textInput: userInput }]);
    console.log(toDo);
  };

  const handleDelClick = () => {
    setHandleDelete(true)
  }

  useEffect(()=> {
    if (handleDelete){
        setToDo(toDo => toDo.filter((item => item.id === handleDelete)))
    }
  }, [handleDelete])
  return (
    <div className="app">
      <Nav
        userInput={userInput}
        handleInput={handleInput}
        handleClick={handleAddClick}
      />
      <ToDoItemContainer inputValues={toDo} handleDelete={handleDelClick}/>
    </div>
  );
};

export default App;
