import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--backgroundCard);
  padding: 2rem 2rem;
  border-radius: 10px;
  font-size: 30px;
  color: var(--text1);
  margin-bottom: 1rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  margin-bottom: 0.5rem;
  font-size: 25px;
`;

const Label = styled.div`
  margin-top: 0.5rem;
`;

const Title = styled.div`
  text-align: center;
`;

const ButtonForm = styled.button`
  padding: 1rem 1rem;
  background-color: var(--blue);
  border: none;
  font-size: 25px;
  color: var(--text1);
  cursor: pointer;
`;

const FormFooter = styled.div`
  display: flex;
  padding: 1rem 1rem;

  > a {
    text-decoration: none;
    color: var(--text1);
    margin-left: 1rem;
  }
`;

export {
  Container,
  Card,
  FormGroup,
  Input,
  Label,
  Title,
  ButtonForm,
  FormFooter,
};
