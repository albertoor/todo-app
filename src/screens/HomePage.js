import React, { useState, useEffect } from 'react';
import AddTodo from '../components/AddTodo';
import User from '../components/User';
import ListTodos from '../components/ListTodos';
import useFirebaseAuth from '../hooks/useFirebaseAuth';
import LoaderComponent from '../components/LoaderComponent';
import styled from 'styled-components';

export default function HomePage() {
  const user = useFirebaseAuth();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        setLoading(false);
      }, 1500);
    }
  }, [user, loading]);

  return (
    <div>
      {!loading ? (
        <Container>
          <User />
          <AddTodo />
          <ListTodos />
        </Container>
      ) : (
        <LoaderComponent />
      )}
    </div>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
`;
