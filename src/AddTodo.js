import React, { useRef, useEffect } from 'react';
import './style.css';

export default function AddTodo({ todoList, updateTodoList }) {
  const todoInputRef = useRef('');

  useEffect(() => {
    todoInputRef.current.focus();
    if (todoList.length != 0)
      localStorage.setItem('todoList', JSON.stringify(todoList));
  });

  function addNewTodo() {
    let value = todoInputRef.current.value;
    if (value === '') return;
    let newTodoObj = { todo: value, isChecked: false };
    updateTodoList((prevTodos) => {
      return [...prevTodos, newTodoObj];
    });
    clearInputField();
  }

  function clearInputField() {
    todoInputRef.current.value = '';
  }

  return (
    <>
      <input type="text" ref={todoInputRef} />
      <button id="add-btn" onClick={addNewTodo}>
        Add ToDo
      </button>
    </>
  );
}
