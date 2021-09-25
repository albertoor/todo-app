import { useState, useEffect } from 'react';
import { db } from '../db/firebase';

export default function useUserInfo(userId) {
  const [userInfo, setUserInfo] = useState();

  useEffect(() => {
    db.collection('users')
      .where('uid', '==', userId)
      .onSnapshot((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          setUserInfo({
            uid: doc.data().uid,
            name: doc.data().name,
            email: doc.data().email,
          });
        });
      });
  }, [userId]);

  return userInfo;
}
