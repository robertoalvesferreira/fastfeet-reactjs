import React, { useState, useEffect } from 'react';
import { Form, Input } from '@rocketseat/unform';
import { toast } from 'react-toastify';
import { Container } from './styles';
import Img from '../../../components/Img';
import api from '../../../services/api';
import history from '../../../services/history';

export default function Courier_Edit(props) {
  const { id } = props.match.params;
  const [courier, setCourier] = useState([]);
  const [url, setUrl] = useState(
    'https://api.adorable.io/avatars/50/abott@adorable.png'
  );

  useEffect(() => {
    async function loadCourier() {
      const response = await api.get(`courier/${id}`);
      const { data } = response;
      setCourier(data);
      if (data.file !== null) {
        setUrl(data.file.url);
      }
    }
    loadCourier();
  }, []);

  async function handleSubmit(data) {
    try {
      const response = await api.put(`courier/${id}`, data);
      if (response.status >= 200 && response.status < 300) {
        toast.success('Editado com sucesso!');
        history.push('/');
      }
    } catch {
      toast.error('Erro!');
    }
  }

  function handleInputChangeName(event) {
    const aux = event.target.value;
    setCourier(prevstate => ({ ...prevstate, name: aux }));
  }
  function handleInputChangeEmail(event) {
    const aux = event.target.value;
    setCourier(prevstate => ({ ...prevstate, email: aux }));
  }
  function handleInputChangeAvatar(event) {
    const aux = event.target.value;
    setCourier(prevstate => ({ ...prevstate, avatar_id: aux }));
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Img name="avatar_id" urls={url} />
        <label htmlFor="name">Nome</label>
        <Input
          name="name"
          onChange={handleInputChangeName}
          value={courier.name}
        />
        <label htmlFor="email">E-mail</label>
        <Input
          name="email"
          value={courier.email}
          onChange={handleInputChangeEmail}
        />
        <button type="submit">Enviar</button>
      </Form>
    </Container>
  );
}
