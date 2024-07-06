import React, { useState } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([ ...todos, todo ]);
  };

  const completeTodo = (index) => {
    const newTodos = [ ...todos ];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    const newTodos = [ ...todos ];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center">Todo List</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} />
    </div>
  );
}

export default App;
