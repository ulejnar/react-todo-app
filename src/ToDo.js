import React from "react";
import ToDoList from "./TodoList";

  function ToDo({id, task, removeTodo}){

    const handleSubmit = () => {
      removeTodo(id)
    }
    return(
      <li key={id}>
        {task}
        <button onClick={handleSubmit}>X</button>)
      </li>
    )  
  }
export default ToDo;

