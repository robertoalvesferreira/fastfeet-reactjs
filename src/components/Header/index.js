import React from 'react';

import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Content } from './styles';
import logo from '../../assets/logo.svg';
import { signOut } from '../../store/modules/auth/actions';
import history from '../../services/history';

export default function Header() {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.auth.token);

  function handleSignOut() {
    dispatch(signOut());
    history.push('/');
  }

  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="" />
          <Link to="/dashboard">ENCOMENDAS</Link>
          <Link to="/courier">ENTREGADORES</Link>
          <Link to="/recipient">DESTINATÁRIOS</Link>
          <Link to="/recipient"> PROBLEMAS</Link>
        </nav>
        <anside>
          <p>Admim</p>
          <button type="button" onClick={handleSignOut}>
            Sair do sistema
          </button>
        </anside>
      </Content>
    </Container>
  );
}
