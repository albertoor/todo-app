import React from 'react';
import Todo from './Todo';
import useTodos from '../hooks/useTodos';
import useFirebaseAuth from '../hooks/useFirebaseAuth';
import useUserId from '../hooks/useUserId';

export default function ListTodos() {
  const user = useFirebaseAuth();
  const userId = useUserId(user.uid);
  const todos = useTodos(userId);

  return (
    <>
      <h1>Todos List</h1>
      {todos.map((todo, index) => (
        <div key={index}>
          <Todo
            id={todo.id}
            todo={todo.todo}
            timestamp={todo.timestamp}
            completed={todo.completed}
            userId={userId}
          />
        </div>
      ))}
    </>
  );
}
