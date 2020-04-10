import React from 'react';
import Table from 'react-bootstrap/Table';
// import { Container } from './styles';

export default function Grid(props) {
  const { list } = props;
  const { header } = props;

  if (header === undefined || list === undefined) {
    return <h1>Vazio</h1>;
  }

  function teste(item) {
    console.log(item);
    const aux = [{ name: item.id }, { name: item.name }];
    // return aux;
  }

  return (
    <>
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
                {newObj.map(function(m) {
                  const max = Math.floor(100);
                  return <td key={max}>{m}</td>;
                })}
                <td>
                  <button>Opcoes</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
}
