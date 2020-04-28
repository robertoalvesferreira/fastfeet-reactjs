import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import { Container } from './styles';
import Img from '../../../components/Img';
import api from '../../../services/api';

export default function Courier_Register() {
  async function handleSubmit(data) {
    console.log(data);
    const response = await api.post('courier', data);
    console.log(response);
  }
  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Img name="avatar_id" />
        <label>Nome</label>
        <Input name="name" />
        <label>E-mail</label>
        <Input name="email" />
        <button type="submit">Enviar</button>
      </Form>
    </Container>
  );
}
