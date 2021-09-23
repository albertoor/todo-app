import React, { useState, useEffect } from 'react';
import { registerWithEmailAndPassword } from '../auth/authFunctions';
import { Link, useHistory } from 'react-router-dom';
import useFirebaseAuth from '../hooks/useFirebaseAuth';

export default function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [passwordOne, setPasswordOne] = useState('');
  const [passwordTwo, setPasswordTwo] = useState('');
  const history = useHistory();
  const user = useFirebaseAuth();

  const register = (name, email, passwordOne) => {
    if (!name) alert('Please enter name');
    registerWithEmailAndPassword(name, email, passwordOne);
  };

  useEffect(() => {
    // if (loading) return;
    if (user) history.replace('/');
  }, [user, history]);

  return (
    <>
      <div>
        <div>
          <label htmlFor="name">Enter your name: </label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="email">Enter your email</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="passwordOne">Enter your passwrord: </label>
          <input
            type="password"
            name="passwordOne"
            value={passwordOne}
            onChange={(e) => setPasswordOne(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="passwordTwo">Confirm Password: </label>
          <input
            type="password"
            name="passwordTwo"
            value={passwordTwo}
            onChange={(e) => setPasswordTwo(e.target.value)}
          />
        </div>

        <div>
          <button onClick={() => register(name, email, passwordOne)}>
            SignUp
          </button>
        </div>

        <div>
          Already have an account? <Link to="/login">Login</Link>
        </div>
      </div>
    </>
  );
}
