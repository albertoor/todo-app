import React, { useState } from 'react';
import { db } from '../db/firebase';
import firebase from 'firebase/compat/app';
import swal from 'sweetalert';
import styled from 'styled-components';

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
    <>
      <FormSection>
        <Form onSubmit={(e) => addTodo(e)}>
          <input
            type="text"
            value={inputTodo}
            onChange={(e) => handleInput(e)}
          />
          <input type="submit" value="Add" />
        </Form>
      </FormSection>
    </>
  );
}

const FormSection = styled.div`
  margin-top: 1rem;
  display: flex;
  background-color: green;
  padding: 1rem 1rem;
`;

const Form = styled.form`
  display: flex;
  padding: 1rem 1rem;
  background-color: red;
  justify-content: center;
  align-items: center;
  width: 300px;
`;

const FormGroup = styled.div`
  display: flex;
`;
