import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  height: 100%;
  background: #fff;

  button {
    margin: 5px 0 0;
    height: 44px;
    background: #7159c1;
    font-weight: bold;
    color: #fff;
    border: 0;
    border-radius: 4 px;
    font-size: 16px;
    transition: background 0.2s;
    margin: 10px;

    &:hover {
      background: ${darken(0.05, '#7159c1')};
    }
  }
`;
