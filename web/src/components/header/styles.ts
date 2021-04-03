import styled from 'styled-components';

export const Container = styled.div`
  background: #4267b2;
  width: 100%;
`;

export const Content = styled.div`
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.h1`
  font-size: 20px;
  font-weight: bold;
  margin-left: 2%;
`;

export const NavBar = styled.div`
  padding-left: 30px;
  height: 40px;
  margin-right: 2%;
  display: flex;
  align-items: center;
  a {
    margin-right: 20px;
    font-size: 16px;
    font-weight: bold;
    color: #000000;
    &.active {
      color: #ecf0f1;
    }
  }
`;
