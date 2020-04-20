import React, { useState, useEffect } from 'react';

import { Container } from './styles';
import api from '../../services/api';
import Grid from '../../components/Grid';

export default function Recipient() {
  const [recipents, setRecipients] = useState([]);
  const [header, setHeader] = useState([]);

  useEffect(() => {
    async function loadRecipient() {
      setHeader([
        { name: 'ID', type: 'text' },
        { name: 'Nome', type: 'text' },
        { name: 'Street', type: 'text' },
        { name: 'Number', type: 'text' },
        { name: 'Complement', type: 'text' },
        { name: 'City', type: 'text' },
        { name: 'Cep', type: 'text' },
        { name: 'Created', type: 'text' },
        { name: 'Updated', type: 'text' },
      ]);
      const response = await api.get('recipient');
      const { data } = response;

      setRecipients(data);
    }
    loadRecipient();
  }, []);

  return (
    <Container>
      <Grid list={recipents} header={header} />
    </Container>
  );
}
