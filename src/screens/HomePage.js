import React from 'react';
import AddTodo from '../components/AddTodo';
import UserOptions from '../components/UserOptions';
import ListTodos from '../components/ListTodos';

export default function HomePage() {
  return (
    <div>
      <UserOptions />
      <AddTodo />
      <ListTodos />
    </div>
  );
}
