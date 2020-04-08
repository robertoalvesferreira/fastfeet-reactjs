/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import { Container } from './styles';
import api from '../../services/api';

export default function dashboard() {
  const [couriers, setCouriers] = useState([]);

  useEffect(() => {
    async function loadCourier() {
      const response = await api.get('courier');
      const { data } = response;
      setCouriers(data);

      console.tron.log(couriers);
    }
    loadCourier();
  }, []);

  return (
    <Container>
      <Table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Foto</th>
            <th>E-mail</th>
          </tr>
        </thead>
        <tbody>
          {couriers.map(c => (
            <tr key={c.id}>
              <td>{c.id}</td>
              <td>
                <img
                  src="https://api.adorable.io/avatars/50/abott@adorable.png"
                  alt=""
                />
              </td>
              <td>{c.name}</td>
              <td>{c.email}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}
