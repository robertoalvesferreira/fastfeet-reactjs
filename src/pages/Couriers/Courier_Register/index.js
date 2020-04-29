import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import { toast } from 'react-toastify';
import { Container } from './styles';
import Img from '../../../components/Img';
import api from '../../../services/api';
import history from '../../../services/history';

export default function Courier_Register() {
  async function handleSubmit(data) {
    try {
      const response = await api.post('courier', data);
      console.log(response);
      if (response.status >= 200 && response.status < 300) {
        toast.success('Entregador criado com sucesso!');
        history.push('/');
      }
    } catch {
      toast.error('Erro ao cadastro');
    }
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
