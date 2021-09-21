import React from 'react';
import db from '../db/firebase';
import firebase from 'firebase/compat/app';
import swal from 'sweetalert';

export default function Todo({ id, todo, timestamp, completed }) {
  const deleteTodo = async () => {
    if (
      swal('Are you sure?', {
        dangerMode: true,
        buttons: true,
      })
    ) {
      setTimeout(async () => {
        await db.collection('todos').doc(id).delete();
        swal({
          title: 'Task Deleted Successfully',
          icon: 'error',
        });
      }, 2000);
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
      <input
        type="checkbox"
        onClick={() => checkedTodo()}
        defaultChecked={completed ? false : true}
      />
      <p>{todo}</p>
      <span>{new Date(timestamp.toDate()).toUTCString()}</span>
      <button onClick={deleteTodo}>X</button>
    </>
  );
}
