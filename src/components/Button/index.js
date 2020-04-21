import React from 'react';

import { BsPlus } from 'react-icons/bs';
import { Container } from './styles';
import history from '../../services/history';

export default function Button() {
  function hadndleClick() {
    console.log('Cadastrar');
    history.push('/courier_register');
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
