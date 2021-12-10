import React, { useEffect } from 'react';
import './style.css';

export default function TodoList({ todoList, updateTodoList }) {
  let list = [];

  const deleteTodo = function (todo, index) {
    let filteredList = todoList.filter((item, i) => {
      if (item.todo !== todo) return item;
      else if (item.todo === todo && index !== i) return item;
    });
    updateTodoList(filteredList);
  };

  function deleteAllTodos() {
    updateTodoList([]);
    localStorage.removeItem('todoList');
  }

  function checkboxMark(e, todo, index) {
    let checkedList = todoList.map((item, i) => {
      if (item.todo === todo && i === index) {
        if (e.target.checked) item.isChecked = true;
        else item.isChecked = false;
      } else if (!item.isChecked) item.isChecked = false;
      return item;
    });
    updateTodoList(checkedList);
  }

  if (todoList.length !== 0) {
    list = todoList.map((item, index) => {
      return (
        <li key={index} id={index} className="list-item">
          <label style={{ cursor: 'pointer' }}>
            <input
              checked={item.isChecked}
              type="checkbox"
              onChange={(e) => checkboxMark(e, item.todo, index)}
            />
            {item.isChecked ? <del>{item.todo}</del> : item.todo}
          </label>
          <button
            disabled={item.isChecked}
            style={{ opacity: item.isChecked ? '0.5' : 1 }}
            className="delete-btn"
            onClick={() => deleteTodo(item.todo, index)}
          >
            Delete
          </button>
        </li>
      );
    });
  }
  return todoList.length ? (
    <div id="list-container">
      <ol>{list}</ol>
      {todoList.length > 1 ? (
        <button
          style={{ marginTop: '30px' }}
          className="delete-btn"
          onClick={deleteAllTodos}
        >
          Delete All
        </button>
      ) : (
        <></>
      )}
    </div>
  ) : (
    <p>Todo list is empty.</p>
  );
}
