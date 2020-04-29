import React from 'react';

import { BsPlus } from 'react-icons/bs';
import { Container } from './styles';
import history from '../../services/history';

export default function Button(props) {
  const { route } = props;
  const { id } = props;
  function hadndleClick() {
    if (id === undefined || id === null) {
      history.push(route);
    } else {
      history.push(`${route}/${id}`);
    }
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
