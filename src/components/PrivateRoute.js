import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import useFirebaseAuth from '../hooks/useFirebaseAuth';

export default function PrivateRoute({ component: Component, ...rest }) {
  const user = useFirebaseAuth();

  return (
    <div>
      <Route
        {...rest}
        render={(props) =>
          user ? <Component {...props} /> : <Redirect to="/signup" />
        }
      ></Route>
    </div>
  );
}
