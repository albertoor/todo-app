import React from 'react';
import { Route, Redirect } from 'react-router';
import useFirebaseAuth from '../hooks/useFirebaseAuth';

export default function PublicRoute({
  component: Component,
  restricted,
  ...rest
}) {
  const user = useFirebaseAuth();

  return (
    <Route
      {...rest}
      render={(props) =>
        user && restricted ? (
          <Redirect to="/dashboard" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
}
