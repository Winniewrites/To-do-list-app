import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, completeTodo, removeTodo }) => {
  return (
    <ul className="list-group">
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          index={index}
          todo={todo}
          completeTodo={completeTodo}
          removeTodo={removeTodo}
        />
      ))}
    </ul>
  );
};

export default TodoList;
