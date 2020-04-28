import React, { useState, useEffect } from 'react';
import { Form, Input } from '@rocketseat/unform';
import { Container } from './styles';
import Img from '../../../components/Img';
import api from '../../../services/api';

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
      console.log(url);
    }
    loadCourier();
  }, []);

  async function handleSubmit(data) {
    const response = await api.put(`courier/${id}`, data);
    console.log(response);
  }
  function handleInputChangeName(event) {
    console.log(url);
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
        <Img name="avatar_id" url={url} />
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
