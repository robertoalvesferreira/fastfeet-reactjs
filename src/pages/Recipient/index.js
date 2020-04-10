import React, { useState, useEffect } from 'react';

import { Container } from './styles';
import api from '../../services/api';
import Grid from '../../components/Grid';

export default function Recipient() {
  const [recipents, setRecipients] = useState([]);
  const [header, setHeader] = useState([]);

  useEffect(() => {
    async function loadRecipient() {
      const response = await api.get('recipient');
      const { data } = response;
      setRecipients(data);
      setHeader([
        { name: 'ID' },
        { name: 'Nome' },
        { name: 'Street' },
        { name: 'Number' },
        { name: 'Complement' },
        { name: 'City' },
        { name: 'Cep' },
        { name: 'Created' },
        { name: 'Updated' },
      ]);
    }
    loadRecipient();
  }, []);

  return (
    <Container>
      <Grid list={recipents} header={header} />
    </Container>
  );
}
