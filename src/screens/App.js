import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

// Components
import PrivateRoute from '../components/PrivateRoute';
import PublicRoute from '../components/PublicRoute';

// screens
import HomePage from './HomePage';

import { FirebaseAuthProvider } from '../context/FirebaseAuthContext';
import LoaderComponent from '../components/LoaderComponent';

// // lazy components
const SignUp = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import('../components/SignUp'), 5000));
  });
});

const Login = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import('../components/Login'), 5000));
  });
});

export default function App() {
  return (
    <FirebaseAuthProvider>
      <Router>
        <Suspense fallback={<LoaderComponent />}>
          <Switch>
            <PrivateRoute component={HomePage} path="/" exact />
            <PublicRoute restricted={false} component={SignUp} path="/signup" />
            <PublicRoute restricted={false} component={Login} path="/login" />
          </Switch>
        </Suspense>
      </Router>
    </FirebaseAuthProvider>
  );
}
