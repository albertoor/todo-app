import React, { useState, useEffect } from 'react';
import { auth } from '../db/firebase';

export default function CurrentUser() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(setUser);
    return unsubscribe;
  }, []);

  return <div>{user?.displayName || 'unauthenticated'}</div>;
}
