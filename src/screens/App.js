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
const SignUp = lazy(() => import('../components/SignUp'));
const Login = lazy(() => import('../components/Login'));

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
