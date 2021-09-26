import { useState, useEffect } from 'react';
import { db } from '../db/firebase';

export default function useTodos(userId) {
  const [todos, setTodos] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (userId) {
      db.collection('users')
        .doc(userId)
        .collection('todos')
        .onSnapshot(
          (querySnapshot) => {
            const docs = [];
            querySnapshot.forEach((doc) => {
              docs.push({
                id: doc.id,
                todo: doc.data().todo,
                timestamp: doc.data().timestamp,
                completed: doc.data().completed,
              });
            });
            setTodos(docs);
            setLoading(false);
          },
          (err) => {
            setError('');
            console.log(err);
          }
        );
    }
  }, [userId]);

  return { todos, loading, error };
}

// db.collection('users')
//         .doc(userId)
//         .collection('todos')
//         .onSnapshot(
//           (querySnapshot) => {
//             const docs = [];
//             querySnapshot.forEach((doc) => {
//               docs.push({
//                 id: doc.id,
//                 todo: doc.data().todo,
//                 timestamp: doc.data().timestamp,
//                 completed: doc.data().completed,
//               });
//             });
//             setTodos(docs);
//             setLoading(false);
//           },
//           (err) => {
//             setError('');
//             console.log(err);
//           }
//         );
