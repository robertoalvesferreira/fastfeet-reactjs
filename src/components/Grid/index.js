import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import { BsFillTrashFill } from 'react-icons/bs';
import { Container, Delete } from './styles';
import Button from '../Button';
import Filter from '../Filter';

export default function Grid(props) {
  const { list } = props;
  const { header } = props;

  if (header === undefined || list === undefined) {
    return <h1>Vazio</h1>;
  }
  console.log(header);

  function handleDelete(data) {
    console.log(data);
  }

  return (
    <Container>
      <Button route="courier_register">Opcoes</Button>
      <Table>
        <thead>
          <tr>
            {header.map(function(e) {
              return <th key={e.name}>{e.name}</th>;
            })}
            <th>Ações</th>
            <th>Delete</th>
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
                  <Button route="courier_edit" id={item.id}>
                    Opcoes
                  </Button>
                </td>
                <td>
                  <Delete>
                    <BsFillTrashFill
                      size={22}
                      color="#7159c1"
                      onClick={() => handleDelete(item.id)}
                    />
                  </Delete>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
}
