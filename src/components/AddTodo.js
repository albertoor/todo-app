import React, { useState } from 'react';
import db from '../db/firebase';

export default function AddTodo() {
  const [input, setInput] = useState('');

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const addTodo = async (e) => {
    e.preventDefault();
    await db.collection('todos').add({
      todo: input,
    });
  };

  return (
    <div>
      <form onSubmit={(e) => addTodo(e)}>
        <input type="text" value={input} onChange={(e) => handleInput(e)} />
        <input type="submit" value="Add" />
      </form>
    </div>
  );
}
