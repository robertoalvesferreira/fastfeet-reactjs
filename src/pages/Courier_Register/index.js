import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import { Container } from './styles';
import Img from './Img';

export default function Courier_Register() {
  function handleSubmit({ name, email, img }) {
    console.log(name, ' : ', email, ':', img);
  }
  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Img name="img" />
        <label>Nome</label>
        <Input name="name" />
        <label>E-mail</label>
        <Input name="email" />
        <button type="submit">Enviar</button>
      </Form>
    </Container>
  );
}
