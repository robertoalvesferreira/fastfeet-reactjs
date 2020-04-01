import React from 'react';
import { useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import { Container, Body } from './styles';

import { signInRequest } from '../../store/modules/auth/actions';

export default function SignIn() {
  const dispatch = useDispatch();

  function hadndleSubmit({ email, password }) {
    console.tron.log(email, password);
    dispatch(signInRequest(email, password));
  }

  return (
    <Body>
      <Container>
        <Form onSubmit={hadndleSubmit}>
          <label>SEU E-MAIL</label>
          <Input name="email" type="email" placeholder="exemplo@gmail.com" />
          <label>SUA SENHA</label>
          <Input name="password" type="password" placeholder="************" />
          <button type="submit">Enviar</button>
        </Form>
      </Container>
    </Body>
  );
}
