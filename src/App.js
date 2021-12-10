import React, { useState, useEffect } from 'react';
import './style.css';
import AddTodo from './AddTodo';
import TodoList from './TodoList';

export default function App() {
  const [todoList, updateTodoList] = useState([]);

  useEffect(() => {
    let localData = JSON.parse(localStorage.getItem('todoList'));
    if (localData != null) updateTodoList(localData);
  }, []);

  return (
    <div id="app">
      <h1>ToDo App</h1>
      <AddTodo todoList={todoList} updateTodoList={updateTodoList} />
      <TodoList todoList={todoList} updateTodoList={updateTodoList} />
    </div>
  );
}
