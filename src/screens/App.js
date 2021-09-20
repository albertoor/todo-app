import React from 'react';

// Components
import AddTodo from '../components/AddTodo';
import ListTodos from '../components/ListTodos';

export default function App() {
  return (
    <div>
      <h1>Todo App</h1>
      <AddTodo />
      <ListTodos />
    </div>
  );
}
