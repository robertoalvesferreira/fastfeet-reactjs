/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from 'react';
import { Container } from './styles';
import api from '../../services/api';
import Grid from '../../components/Grid';

export default function courier() {
  const [couriers, setCouriers] = useState([]);
  const [header, setHeader] = useState();

  useEffect(() => {
    async function loadCourier() {
      const response = await api.get('courier');
      const { data } = response;

      data.forEach(function(name) {
        delete name.createdAt;
        delete name.updatedAt;
      });

      console.log(data);

      setCouriers(data);
      setHeader([
        { name: 'Id' },
        { name: 'Name' },
        { name: 'Email' },
        { name: 'Avatar' },
      ]);
      console.tron.log(couriers);
    }

    loadCourier();
  }, []);

  return (
    <Container>
      <Grid list={couriers} header={header} />
    </Container>
  );
}
