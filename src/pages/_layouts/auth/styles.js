import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  height: 100%;
  background-color: #7159c1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 600px;
  text-align: center;
  background-color: white;
  padding: 20px;
  img {
    margin-top: 75px;
    margin-bottom: 25px;
    padding: 10px;
  }
  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    label {
      display: flex;
      padding: 0 15px;
      font-size: 18px;
    }
    input {
      /* background: rgba(0, 0, 0, 0.1); */
      border: 1px solid #e6e6e6;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: black;
      margin: 10px;

      /* &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      } */
    }

    span {
      color: #fb6f91;
      align-self: flex-start;
      margin: 0 0 10px;
      font-weight: bold;
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

  a {
    color: ${darken(0.05, '#7159c1')};
    margin-top: 15px;
    font-size: 16px;
    opacity: 0.8;

    &:hover {
      opacity: 1;
    }
  }
`;
