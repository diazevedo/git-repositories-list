import React from 'react';
import { FaPlus } from 'react-icons/fa';
import Header from '../../components/Header';

import { Container, Form, SubmitButton } from './styles';

const Main = () => (
  <Container>
    <Header />
    <Form>
      <input type="text" placeholder="Add a repository" />
      <SubmitButton>
        <FaPlus color="#FFF" size={22} />
      </SubmitButton>
    </Form>
  </Container>
);
export default Main;
