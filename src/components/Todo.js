import React, { useState } from 'react';
import { db } from '../db/firebase';
import firebase from 'firebase/compat/app';
import swal from 'sweetalert';

export default function Todo({ id, todo, timestamp, completed, userId }) {
  const deleteTodo = async () => {
    swal({
      title: 'Are you sure?',
      text: 'Once deleted, you will not be able to recover this todo!',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    }).then(async (willDelete) => {
      if (willDelete) {
        await db
          .collection('users')
          .doc(userId)
          .collection('todos')
          .doc(id)
          .delete();
        swal('Your todo has been deleted!', {
          icon: 'success',
        });
      } else {
        swal('Your todo is safe!');
      }
    });
  };

  const checkedTodo = async () => {
    await db
      .collection('users')
      .doc(userId)
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
