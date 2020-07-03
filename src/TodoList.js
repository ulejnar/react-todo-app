import React, { useState } from "react";
import NewToDoForm from "./NewToDoForm";
import ToDo from "./ToDo";
import uuid from "uuid/v4";

function ToDoList() {
  const [todos, setTodos] = useState([]);

  const renderTodos = () => {
    return (
      <ul>
        {todos.map(todo => (
          <ToDo id={todo.id} task={todo.task} removeTodo={removeTodo}/>
        ))}
      </ul>
    )
  }

  const removeTodo = (id) => {
    return (setTodos(todos => todos.filter(originalTodo => (originalTodo.id!==id))
    ))
  }

  /** Add new Todos to the list **/
  const addTodo = todo => {
    let newTodo = { ...todo, id: uuid()};
    setTodos(todos => [...todos, newTodo]);
  }

  return (
    <div className="ToDoList">
      <NewToDoForm addTodo={addTodo}/>
      {
        renderTodos()}
      }
    </div>
  )
}

export default ToDoList;