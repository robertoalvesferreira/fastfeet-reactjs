import styled from 'styled-components';

export const Container = styled.div`
  max-width: 900px;
  margin: 20px auto;
  display: block;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    width: 100%;

    label {
      display: flex;
      padding: 0 15px;
      font-size: 18px;
    }
    input {
      /* background: rgba(0, 0, 0, 0.1); */
      width: 100%;
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
`;
