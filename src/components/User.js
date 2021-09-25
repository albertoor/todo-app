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
        <UserEmail>Hello, {user?.email}</UserEmail>
        <button onClick={() => signOut()}>Log Out</button>
      </UserContainer>
    </>
  );
}

const UserContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const UserEmail = styled.p`
  font-size: 18px;
`;
