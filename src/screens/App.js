import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

// Components
import SignUp from '../components/SignUp';
import Login from '../components/Login';
import PrivateRoute from '../components/PrivateRoute';
import PublicRoute from '../components/PublicRoute';

// screens
import HomePage from './HomePage';

import { FirebaseAuthProvider } from '../context/FirebaseAuthContext';

export default function App() {
  return (
    <FirebaseAuthProvider>
      <Router>
        <h1>Todo App</h1>
        <Switch>
          <PrivateRoute component={HomePage} path="/" exact />
          <PublicRoute restricted={false} component={SignUp} path="/signup" />
          <PublicRoute restricted={false} component={Login} path="/login" />
        </Switch>
      </Router>
    </FirebaseAuthProvider>
  );
}
