import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  nav {
    display: flex;
    flex-direction: row;
    margin: 20px 0;
    text-align: center;

    text {
      margin-top: 20px;
      margin: 20px 20px;
      cursor: pointer;
    }
    img {
      margin: 0px 20px;
      width: 150px;
      height: 50px;
    }
  }
`;
export const Button = styled.text``;
export const Content = styled.div`
  height: 64px;
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;

  nav {
    display: flex;
    align-items: center;

    img {
      margin-right: 20px;
      padding-right: 20px;
      border-right: 1px solid #eee;
    }
    a {
      margin-right: 20px;
      font-weight: bold;
      color: #7159c1;
      text-decoration: none;
      cursor: pointer;
      &:hover {
        color: ${darken(0.1, '#7159c1')};
      }
    }
  }
  aside {
  }
`;
