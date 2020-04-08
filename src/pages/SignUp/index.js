import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import { useDispatch } from 'react-redux';
import logo from '../../assets/logo.png';
import { signUpRequest } from '../../store/modules/auth/actions';

export default function SignUp() {
  const dispatch = useDispatch();

  function hadndleSubmit({ name, email, password }) {
    dispatch(signUpRequest(name, email, password));
  }

  return (
    <>
      <img src={logo} alt="FastFeet" />
      <Form onSubmit={hadndleSubmit}>
        <label>Nome</label>
        <Input name="name" type="nome" placeholder="exemplo@gmail.com" />
        <label>SEU E-MAIL</label>
        <Input name="email" type="email" placeholder="exemplo@gmail.com" />
        <label>SUA SENHA</label>
        <Input name="password" type="password" placeholder="************" />
        <button type="submit">Enviar</button>
      </Form>
      <Link to="/">Já tenho cadastros!</Link>
    </>
  );
}
