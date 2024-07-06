import React from 'react';

const TodoItem = ({ todo, index, completeTodo, removeTodo }) => {
  return (
    <li
      className={`list-group-item d-flex justify-content-between align-items-center ${
        todo.isCompleted ? 'list-group-item-success' : ''
      }`}
    >
      <span
        style={{ textDecoration: todo.isCompleted ? 'line-through' : '' }}
        onClick={() => completeTodo(index)}
      >
        {todo.text}
      </span>
      <button
        className="btn btn-danger btn-sm"
        onClick={() => removeTodo(index)}
      >
        Delete
      </button>
    </li>
  );
};

export default TodoItem;
