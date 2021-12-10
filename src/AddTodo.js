import React, { useRef, useEffect } from 'react';
import './style.css';

export default function AddTodo({ todoList, updateTodoList }) {
  const todoInputRef = useRef('');

  useEffect(() => {
    if (todoList.length != 0)
      localStorage.setItem('todoList', JSON.stringify(todoList));
  });

  useEffect(() => focusOnAddTodoInputField(), []);

  function addNewTodo() {
    let value = todoInputRef.current.value;
    if (value === '') return;
    let newTodoObj = { todo: value, isChecked: false };
    updateTodoList((prevTodos) => {
      return [...prevTodos, newTodoObj];
    });
    clearInputField();
    focusOnAddTodoInputField();
  }

  function clearInputField() {
    todoInputRef.current.value = '';
  }

  function focusOnAddTodoInputField() {
    todoInputRef.current.focus();
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
