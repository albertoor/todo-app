import React, { useState, useEffect } from 'react';
import { Link, Redirect, useHistory } from 'react-router-dom';
import useFirebaseAuth from '../hooks/useFirebaseAuth';
import { loginWithEmailAndPassword } from '../auth/authFunctions';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const user = useFirebaseAuth();
  const history = useHistory();

  const login = () => {
    loginWithEmailAndPassword(email, password);
  };

  useEffect(() => {
    if (user) history.replace('/');
  }, [user, history]);

  return (
    <>
      {user && <Redirect to="/" />}
      <div>
        <h1>Welcome to Login</h1>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="email"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={() => login()}>Log In</button>
        </div>

        <div>
          Don't have an account <Link to="/signup">Create one!</Link>
        </div>
      </div>
    </>
  );
}
