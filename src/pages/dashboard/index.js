import React from 'react';

import { Container, Input } from './styles';

export default function dashboard() {
  return (
    <Container>
      <Input placeholder="Email" />
      <Input placeholder="Senha" />
    </Container>
  );
}
