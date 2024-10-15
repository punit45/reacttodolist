import React from 'react';
import ToDoItem from './ToDoItem';

const ToDoList = ({ todos, toggleComplete, deleteTodo, editTodo }) => {
  return (
    <ul>
      {todos.map((todo, index) => (
        <ToDoItem
          key={index}
          todo={todo}
          index={index}
          toggleComplete={toggleComplete}
          deleteTodo={deleteTodo}
          editTodo={editTodo}
        />
      ))}
    </ul>
  );
};

export default ToDoList;
