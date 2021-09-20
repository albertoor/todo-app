import React from 'react';
import Todo from './Todo';
import useTodos from '../hooks/useTodos';

export default function ListTodos() {
  const { todos } = useTodos();

  console.log(todos);

  return (
    <div>
      <h1>Todos List</h1>
      {todos.map((todo, index) => (
        <Todo
          key={index}
          id={todo.id}
          todo={todo.todo}
          timestamp={todo.timestamp}
          completed={todo.completed}
        />
      ))}
    </div>
  );
}
