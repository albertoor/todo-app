import React from 'react';
import { db } from '../db/firebase';
import firebase from 'firebase/compat/app';
import swal from 'sweetalert';
import styled from 'styled-components';
import { AiFillDelete } from 'react-icons/ai';

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
      <TodoContainer>
        <Input
          type="checkbox"
          onClick={() => checkedTodo()}
          defaultChecked={completed ? false : true}
        />
        {completed ? (
          <Text>{todo}</Text>
        ) : (
          <TextLineTrough>{todo}</TextLineTrough>
        )}
        {completed ? (
          <Text>{new Date(timestamp.toDate()).toUTCString()}</Text>
        ) : (
          <TextLineTrough>
            {new Date(timestamp.toDate()).toUTCString()}
          </TextLineTrough>
        )}
        <DeleteBtn onClick={deleteTodo}>
          <AiFillDelete color="#ffff" />
        </DeleteBtn>
      </TodoContainer>
    </>
  );
}

const TodoContainer = styled.div`
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
`;

const Text = styled.p`
  margin-left: 0.5rem;
`;

const TextLineTrough = styled.p`
  margin-left: 0.5rem;
  text-decoration: line-through;
`;

const Input = styled.input`
  display: flex;
  align-items: center;
`;

const DeleteBtn = styled.button`
  margin-left: 0.5rem;
  display: flex;
  padding: 0.5rem 0.5rem;
  border-radius: 5px;
  background-color: #ff6961;
  cursor: pointer;
  border: none;
  align-self: center;
`;
