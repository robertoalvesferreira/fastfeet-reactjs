import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Container = styled.div`
  ul {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 15px;
    margin-top: 30px;
    border: 1px;
  }
  th {
    padding: 10px;
    min-width: 100px;
  }
  td {
    padding: 10px;
    min-width: 100px;
  }
  tr {
    padding: 10px;
    min-width: 100px;
  }
`;
export const Input = styled.input`
  width: 150px;
  height: 25px;
`;
