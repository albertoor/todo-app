import { useState, useEffect } from 'react';
import { db } from '../db/firebase';

export default function useTodos() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const getTodos = async () => {
    db.collection('todos').onSnapshot(
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
        setError(err);
      }
    );
  };

  useEffect(() => {
    getTodos();
  }, []);

  return { todos, loading, error };
}
