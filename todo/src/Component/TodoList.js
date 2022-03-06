import React, { useState } from 'react';
import TodoForm from './TodoForm';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const addTodo = (todo) => {
    const newTodos = [todo, ...todos];
    setTodos(newTodos);
    console.log(todo, ...todos);
  };

  return (
    <>
      <h1>What The Plan tody</h1>
      <TodoForm onSubmit={addTodo} />
    </>
  );
}

export default TodoList;
