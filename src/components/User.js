import React from 'react';
import { auth } from '../db/firebase';
import { useHistory } from 'react-router-dom';
import useFirebaseAuth from '../hooks/useFirebaseAuth';

export default function User() {
  const history = useHistory();
  const user = useFirebaseAuth();

  const signOut = () => {
    auth.signOut();
    history.replace('/login');
  };

  return (
    <>
      <div>
        <h1>{user?.email}</h1>
        <button onClick={() => signOut()}>Log Out</button>
      </div>
    </>
  );
}
