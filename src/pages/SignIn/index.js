import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import { Container } from './styles';
import logo from '../../assets/logo.png';
import { signInRequest } from '../../store/modules/auth/actions';

export default function SignIn() {
  const dispatch = useDispatch();

  function hadndleSubmit({ email, password }) {
    console.tron.log(email, password);
    dispatch(signInRequest(email, password));
  }

  return (
    <>
      <img src={logo} alt="FastFeet" />
      <Form onSubmit={hadndleSubmit}>
        <label>SEU E-MAIL</label>
        <Input name="email" type="email" placeholder="exemplo@gmail.com" />
        <label>SUA SENHA</label>
        <Input name="password" type="password" placeholder="************" />
        <button type="submit">Enviar</button>
      </Form>

      <Link to="/register">Criar usuario!</Link>
    </>
  );
}
