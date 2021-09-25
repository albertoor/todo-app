import React, { useState, useEffect } from 'react';
import { db } from '../db/firebase';
import firebase from 'firebase/compat/app';
import swal from 'sweetalert';
import styled from 'styled-components';
import { AiOutlinePlus } from 'react-icons/ai';
import useFirebaseAuth from '../hooks/useFirebaseAuth';
import useUserInfo from '../hooks/useUserInfo';

export default function AddTodo() {
  const [inputTodo, setInputTodo] = useState('');
  const user = useFirebaseAuth();

  const userInfo = useUserInfo(user.uid);
  console.log(userInfo);

  const handleInput = (e) => {
    setInputTodo(e.target.value);
  };

  // const addTodo = async (e) => {
  //   e.preventDefault();
  //   await db
  //     .collection('todos')
  //     .add({
  //       todo: inputTodo,
  //       timestamp: firebase.firestore.Timestamp.now(),
  //       completed: true,
  //     })
  //     .then(() => {
  //       swal({
  //         title: 'Task Deleted Successfully',
  //         icon: 'success',
  //       });
  //     })
  //     .catch((error) => {
  //       console.log('Error adding document: ', error);
  //     });

  //   setInputTodo('');
  // };

  const addTodo = async (e) => {
    e.preventDefault();
    await db.collection('users').doc(user.uid);
    setInputTodo('');
  };

  // This useEffect is listening when user press Enter or
  // NumpadEnter to submit data
  useEffect(() => {
    const listener = (e) => {
      if (e.code === 'Enter' || e.code === 'NumpadEneter') {
        console.log('Enter was pressed. Run your function');
        addTodo(e);
        e.preventDefault();
      }
    };

    document.addEventListener('keydown', listener);

    return () => {
      document.removeEventListener('keydown', listener);
    };
  });

  return (
    <>
      <ContainerTodo>
        <Input
          type="text"
          value={inputTodo}
          placeholder="Enter a todo"
          onChange={(e) => handleInput(e)}
        />
        <Plus onClick={(e) => addTodo(e)}>
          <AiOutlinePlus />
        </Plus>
      </ContainerTodo>
    </>
  );
}

const ContainerTodo = styled.form`
  display: flex;
  margin-top: 1rem;
`;

const Input = styled.input`
  display: flex;
  color: var(--text1);
  background-color: var(--black);
  padding: 0.5rem 0.5rem;
  font-size: 18px;
  border-radius: 10px 0px 0px 10px;
  border: none;
  width: 100%;

  ::placeholder {
    color: var(--text1);
  }

  &:focus {
    outline-width: 0;
  }
`;

const Plus = styled.button`
  border-radius: 0px 10px 10px 0px;
  border: none;
  background-color: var(--blue);
  color: var(--text1);
  cursor: pointer;
`;
