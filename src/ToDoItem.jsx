import React, { useState } from 'react';

const ToDoItem = ({ todo, index, toggleComplete, deleteTodo, editTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleEdit = () => {
    editTodo(index, editText);
    setIsEditing(false);
  };

  return (
    <li>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleComplete(index)}
      />
      {isEditing ? (
        <>
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
          />
          <button onClick={handleEdit}>Save</button>
        </>
      ) : (
        <>
          <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
            {todo.text}
          </span>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <br />
          <button onClick={() => deleteTodo(index)}>Delete</button>
        </>
      )}
    </li>
  );
};

export default ToDoItem;
