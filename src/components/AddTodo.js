import React, { useState } from 'react';
import db from '../db/firebase';
import Notification from './Notification';

export default function AddTodo() {
  const [inputTodo, setInputTodo] = useState('');
  const [show, setShow] = useState(false);

  const handleInput = (e) => {
    setInputTodo(e.target.value);
  };

  const addTodo = (e) => {
    e.preventDefault();
    db.collection('todos')
      .add({
        todo: inputTodo,
      })
      .then(() => {
        setShow(true);
      })
      .catch((error) => {
        console.log('Error adding document: ', error);
      });
    setInputTodo('');
  };

  return (
    <div>
      <form onSubmit={(e) => addTodo(e)}>
        <input type="text" value={inputTodo} onChange={(e) => handleInput(e)} />
        <input type="submit" value="Add" />
      </form>

      {show ? <Notification /> : <></>}
    </div>
  );
}
