import React, { useState, useEffect } from 'react';
import { registerWithEmailAndPassword } from '../auth/authFunctions';
import { Link, useHistory } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../db/firebase';

export default function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [passwordOne, setPasswordOne] = useState('');
  const [passwordTwo, setPasswordTwo] = useState('');
  const [user, loading] = useAuthState(auth);
  const history = useHistory();

  const register = (name, email, passwordOne) => {
    console.log(name, email, passwordOne);
    if (!name) alert('Please enter name');
    registerWithEmailAndPassword(name, email, passwordOne);
  };

  useEffect(() => {
    if (loading) return;
    if (user) history.replace('/');
  }, [user, loading, history]);

  return (
    <>
      <div>
        <div className="form-group">
          <label htmlFor="name">Enter your name: </label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Enter your email</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="passwordOne">Enter your passwrord: </label>
          <input
            type="password"
            name="passwordOne"
            value={passwordOne}
            onChange={(e) => setPasswordOne(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="passwordTwo">Confirm Password: </label>
          <input
            type="password"
            name="passwordTwo"
            value={passwordTwo}
            onChange={(e) => setPasswordTwo(e.target.value)}
          />
        </div>

        <div className="form-group">
          <button onClick={() => register(name, email, passwordOne)}>
            SignUp
          </button>
        </div>

        <div className="form-group">
          Already have an account? <Link to="/">Login</Link>
        </div>
      </div>
    </>
  );
}
