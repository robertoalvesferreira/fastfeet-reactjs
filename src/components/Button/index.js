import React from 'react';

import { BsPlus } from 'react-icons/bs';
import { Container } from './styles';
import history from '../../services/history';

export default function Button(props) {
  const { route } = props;
  const { id } = props;
  function hadndleClick() {
    console.log(route, id);
    // console.log('Cadastrar');
    history.push(`${route}/${id}`);
  }
  return (
    <Container>
      <button onClick={hadndleClick}>
        <BsPlus size={26} color="#fff" />
        Cadastrar
      </button>
    </Container>
  );
}
