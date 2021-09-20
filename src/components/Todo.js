import React from 'react';
import db from '../db/firebase';
import { toast } from 'react-toastify';
import firebase from 'firebase/compat/app';

export default function Todo({ key, id, todo, timestamp, completed }) {
  console.log(id);

  const deleteTodo = async () => {
    if (window.confirm('Are you sure you want to delete this todo?')) {
      await db.collection('todos').doc(id).delete();
      toast('Todo Removed Successfully', {
        type: 'error',
        autoClose: 2000,
      });
    }
  };

  const checkedTodo = async () => {
    await db
      .collection('todos')
      .doc(id)
      .update({
        todo: todo,
        timestamp: firebase.firestore.Timestamp.now(),
        completed: completed ? false : true,
      });
  };

  return (
    <>
      <div key={key}>
        <input
          type="checkbox"
          onClick={() => checkedTodo()}
          checked={completed ? false : true}
        />
        <p>{todo}</p>
        <span>{new Date(timestamp.toDate()).toUTCString()}</span>
        <button onClick={deleteTodo}>X</button>
      </div>
    </>
  );
}
