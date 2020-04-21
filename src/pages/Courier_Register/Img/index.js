import React from 'react';

import { useField } from '@rocketseat/unform';
import { Container } from './styles';
import api from '../../../services/api';

export default function Img() {
  async function handleChange(e) {}

  return (
    <Container>
      <label htmlFor="img">
        <img
          src="https://api.adorable.io/avatars/50/abott@adorable.png"
          alt=""
        />
        <input type="file" id="img" accepet="image/*" onChange={handleChange} />
      </label>
    </Container>
  );
}
