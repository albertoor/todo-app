import React from 'react';
import { auth } from '../db/firebase';
import { useHistory } from 'react-router-dom';
import useFirebaseAuth from '../hooks/useFirebaseAuth';
import styled from 'styled-components';

export default function User() {
  const history = useHistory();
  const user = useFirebaseAuth();

  const signOut = () => {
    auth.signOut();
    history.replace('/login');
  };

  return (
    <>
      <UserContainer>
        <p>Hello, {user?.email}</p>
        <button onClick={() => signOut()}>Log Out</button>
      </UserContainer>
    </>
  );
}

const UserContainer = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 30x;
  align-items: center;

  > button {
    font-size: 18px;
    padding: 0.5rem 0.5rem;
    cursor: pointer;
    background-color: #ff6961;
    color: #ffff;
    border: none;
  }
`;
