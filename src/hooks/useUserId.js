import { useState, useEffect } from 'react';
import { db } from '../db/firebase';

export default function useUserId(currentId) {
  const [userId, setUserId] = useState('');

  useEffect(() => {
    db.collection('users')
      .where('uid', '==', currentId)
      .onSnapshot((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          setUserId(doc.id);
        });
      });
  }, [currentId]);

  return userId;
}
