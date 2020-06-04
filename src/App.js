import React, { useState } from 'react';
import './App.scss';
import ColorBox from './components/ColorBox';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, title: 'I Love Money!' },
    { id: 2, title: 'I Love Girl!' },
    { id: 3, title: 'I Love Parent!' },
  ]);

  function handleTodoClick(todo) {
    console.log(todo);
    const index = todoList.findIndex(x => x.id === todo.id);
    if (index < 0) return

    const newTodoList = [...todoList]; // clone truoc khi sua doi
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);

  }

  function handleTodoFormSubmit(formValues) {
    console.log('Form submit: ', formValues);

    const newTodo = {
      id: todoList.length + 1,
      ...formValues,
    }

    const newTodoList = [...todoList];
    newTodoList.push(newTodo);
    setTodoList(newTodoList);
  }

  return (
    <div className="app">
      <h1>React Hooks - TodoList</h1>
      <TodoForm onSubmit={handleTodoFormSubmit} />
      <TodoList todos={todoList} onTodoClick={handleTodoClick} />
    </div>
  );
}

export default App;
