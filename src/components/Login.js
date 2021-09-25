import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import useFirebaseAuth from '../hooks/useFirebaseAuth';
import { loginWithEmailAndPassword } from '../auth/authFunctions';
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

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const user = useFirebaseAuth();
  const history = useHistory();

  const login = () => {
    loginWithEmailAndPassword(email, password);
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
        login();
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
            <h1>Login</h1>
          </Title>
          <FormGroup>
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="password">Password</Label>
            <Input
              type="password"
              id="email"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <ButtonForm onClick={() => login()}>Log In</ButtonForm>
          </FormGroup>
          <FormFooter>
            Don't have an account ➡️<Link to="/signup">Create one!</Link>
          </FormFooter>
        </Card>
      </Container>
    </>
  );
}
