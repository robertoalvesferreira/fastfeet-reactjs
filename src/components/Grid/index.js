import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import { Container } from './styles';
import Button from '../Button';
import Filter from '../Filter';

export default function Grid(props) {
  const { list } = props;
  const { header } = props;

  if (header === undefined || list === undefined) {
    return <h1>Vazio</h1>;
  }
  console.log(header);

  return (
    <Container>
      <Button>Opcoes</Button>
      <Table>
        <thead>
          <tr>
            {header.map(function(e) {
              return <th key={e.name}>{e.name}</th>;
            })}
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {list.map(function(item) {
            const newObj = Object.values(item);
            return (
              <tr key={item.id}>
                {newObj.map(function(m, index) {
                  // eslint-disable-next-line react/prop-types
                  if (header[index].type === 'img') {
                    return (
                      <td key={m}>
                        <img
                          src="https://api.adorable.io/avatars/50/abott@adorable.png"
                          alt="Avatar"
                        />
                      </td>
                    );
                  }
                  return <td key={m}>{m}</td>;
                })}
                <td>
                  <Button>Opcoes</Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
}
