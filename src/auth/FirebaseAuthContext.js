import React, { useContext, useEffect, useState } from 'react';
import { auth } from '../db/firebase';

const FirebaseAuthContext = React.createContext();

function FirebaseAuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const value = { user };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(setUser);
    return unsubscribe;
  }, []);

  return (
    <FirebaseAuthContext.Provider value={value}>
      {children}
    </FirebaseAuthContext.Provider>
  );
}

function useFirebaseAuth() {
  const context = useContext(FirebaseAuthContext);
  if (context === undefined) {
    throw new Error(
      'useFirebaseAuth must be used within a FirebaseAuthProvider'
    );
  }
  return context.user;
}

export { FirebaseAuthProvider, useFirebaseAuth };
