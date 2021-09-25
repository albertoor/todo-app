import React, { useState, useEffect } from 'react';
import { registerWithEmailAndPassword } from '../auth/authFunctions';
import { Link, useHistory } from 'react-router-dom';
import useFirebaseAuth from '../hooks/useFirebaseAuth';
import {
  Container,
  Card,
  FormGroup,
  Label,
  Input,
  Title,
  ButtonForm,
  FormFooter,
} from './styles';

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

  // This useEffect is listening when user is True it will
  // redirect to "/" path
  useEffect(() => {
    if (user) history.replace('/');
  }, [user, history]);

  // This useEffect is listening when user press Enter or
  // NumpadEnter to submit data
  useEffect(() => {
    const listener = (e) => {
      if (e.code === 'Enter' || e.code === 'NumpadEneter') {
        console.log('Enter was pressed. Run your function');
        register(name, email, passwordOne);
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
      <Container>
        <Card>
          <Title>
            <h1>Sign Up</h1>
          </Title>
          <FormGroup>
            <Label htmlFor="name">Enter your name: </Label>
            <Input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="email">Enter your email</Label>
            <Input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="passwordOne">Enter your passwrord: </Label>
            <Input
              type="password"
              name="passwordOne"
              value={passwordOne}
              onChange={(e) => setPasswordOne(e.target.value)}
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="passwordTwo">Confirm Password: </Label>
            <Input
              type="password"
              name="passwordTwo"
              value={passwordTwo}
              onChange={(e) => setPasswordTwo(e.target.value)}
            />
          </FormGroup>

          <FormGroup>
            <ButtonForm onClick={() => register(name, email, passwordOne)}>
              Sign Up
            </ButtonForm>
          </FormGroup>

          <FormFooter>
            Already have an account? ➡️ <Link to="/login">Login</Link>
          </FormFooter>
        </Card>
      </Container>
    </>
  );
}
