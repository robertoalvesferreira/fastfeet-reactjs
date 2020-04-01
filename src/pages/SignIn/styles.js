import styled from 'styled-components';
import { darken } from 'polished';

export const Body = styled.body`
  height: 100%;
  background: linear-gradient(-90deg, #7159c1, #ab59c1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    label {
      margin: 10px;
    }

    input {
      background: rgba(0, 0, 0, 0.1);
      border: 0;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: black;
      margin: 10px;
      &::placeholder {
        color: #999;
      }
    }

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
  }
`;
export const Container = styled.div`
  min-width: 600px;
  border-radius: 6px;
  margin: auto;
  background: white;
`;
