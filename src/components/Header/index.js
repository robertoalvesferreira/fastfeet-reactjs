import React from 'react';

import { Link } from 'react-router-dom';
import { Container, Content } from './styles';
import logo from '../../assets/logo.svg';

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="" />
          <Link to="/dashboard">ENCOMENDAS</Link>
          <Link to="/courier">ENTREGADORES</Link>
          <Link to="/recipient">DESTINATÁRIOS</Link>
          <a>PROBLEMAS</a>
        </nav>
        <anside>
          <p>Admim</p>
          <p>sair do sistema</p>
        </anside>
      </Content>
    </Container>
  );
}
