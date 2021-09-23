import React from 'react';
import { auth } from '../db/firebase';
import { useHistory } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';

export default function UserOptions() {
  const history = useHistory();
  const [user, loading, error] = useAuthState(auth);

  const signOut = () => {
    auth.signOut();
    history.replace('/');
  };

  return (
    <div>
      <h1>{user.email}</h1>
      <button onClick={() => signOut()}>Log Out</button>
    </div>
  );
}
