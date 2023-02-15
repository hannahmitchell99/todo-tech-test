import { useEffect, useState } from "react";
import "./App.scss";
import React from "react";
import Nav from "./containers/Nav/Nav";
import ToDoItemContainer from "./containers/ToDoItemContainer/ToDoItemContainer";

let index = 0; // had to place it here or the index didn't increment
const App = () => {
  const [userInput, setUserInput] = useState("");
  const [toDo, setToDo] = useState([]);
  const [handleReset, setHandleReset] = useState(false);
  const [checked, setChecked] = useState(false);

  const handleInput = (event) => {
    setUserInput(event.target.value);
  };

  const handleAddClick = () => {
    setUserInput("");
    setToDo([...toDo, { id: index++, textInput: userInput, checkedItem: checked }]);
    console.log(toDo);
  };

  const handleResetClick = () => {
    setHandleReset(true);
    setToDo((toDo) => toDo.filter((item) => item.id === handleReset));
  };

  const handleDelClick = () => {
    setToDo((toDo) => toDo.filter((item) => item.id !== toDo.id));
  }; // currently not functioning

  const handleCheck = () => {
    console.log("working");
    setChecked(!checked);
    if (toDo.checkedItem){
        console.log("checked")
    }else{
        console.log("not checked")
    }
  };
  return (
    <div className="app">
      <Nav
        userInput={userInput}
        handleInput={handleInput}
        handleClick={handleAddClick}
        handleReset={handleResetClick}
      />
      <ToDoItemContainer
        inputValues={toDo}
        handleDelete={handleDelClick}
        handleCheck={handleCheck}
      />
    </div>
  );
};

export default App;
