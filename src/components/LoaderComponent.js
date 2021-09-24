import React from 'react';
import Loader from 'react-loader-spinner';
import { Container } from './styles';

export default function LoaderComponent() {
  return (
    <>
      <Container>
        <Loader type="ThreeDots" color="#ffff" height={80} width={80} />
      </Container>
    </>
  );
}
