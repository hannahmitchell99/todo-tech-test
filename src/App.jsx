import { useState } from "react";
import "./App.scss";
import React from "react";
import Nav from "./containers/Nav/Nav";
import ToDoItemContainer from "./containers/ToDoItemContainer/ToDoItemContainer";

let index = 0;
const App = () => {
  const [userInput, setUserInput] = useState("");
  const [toDo, setToDo] = useState([]);

  const handleInput = (event) => {
    setUserInput(event.target.value);
  };
  const handleClick = () => {
    setUserInput("");
    setToDo([...toDo, { id: index++, textInput: userInput }]);
    console.log(toDo);
  };

  return (
    <div className="app">
      <Nav
        userInput={userInput}
        handleInput={handleInput}
        handleClick={handleClick}
      />
      <ToDoItemContainer inputValues={toDo}/>
    </div>
  );
};

export default App;
