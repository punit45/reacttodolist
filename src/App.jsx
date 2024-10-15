import React, { useState } from 'react';
import Header from './Header';
import ToDoList from './ToDoList';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const addTodo = () => {
    if (inputValue) {
      setTodos([...todos, { text: inputValue, completed: false }]);
      setInputValue('');
    }
  };

  const toggleComplete = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  const editTodo = (index, newText) => {
    const newTodos = [...todos];
    newTodos[index].text = newText;
    setTodos(newTodos);
  };

  return (
    <div>
      <Header inputValue={inputValue} setInputValue={setInputValue} addTodo={addTodo} />
      <ToDoList todos={todos} toggleComplete={toggleComplete} deleteTodo={deleteTodo} editTodo={editTodo} />
    </div>
  );
};

export default App;
