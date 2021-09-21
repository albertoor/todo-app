import React, { useState } from 'react';
import db from '../db/firebase';
import firebase from 'firebase/compat/app';
import swal from 'sweetalert';

export default function AddTodo() {
  const [inputTodo, setInputTodo] = useState('');

  const handleInput = (e) => {
    setInputTodo(e.target.value);
  };

  const addTodo = async (e) => {
    e.preventDefault();
    await db
      .collection('todos')
      .add({
        todo: inputTodo,
        timestamp: firebase.firestore.Timestamp.now(),
        completed: true,
      })
      .then(() => {
        swal({
          title: 'Task Deleted Successfully',
          icon: 'success',
        });
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
    </div>
  );
}
