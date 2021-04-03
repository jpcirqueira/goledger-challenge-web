import React from 'react';
import { NavLink } from 'react-router-dom';
// eslint-disable-next-line object-curly-newline
import { Container, Content, Title, NavBar } from './styles';

const Header: React.FC = () => (
  <>
    <Container>
      <Content>
        <Title>Marketplace</Title>
        <nav>
          <NavBar>
            <NavLink style={{ textDecoration: 'none' }} to="/product">
              Product
            </NavLink>
            <NavLink to="/seller" style={{ textDecoration: 'none' }}>
              Seller
            </NavLink>
            <NavLink to="/categories" style={{ textDecoration: 'none' }}>
              Categories
            </NavLink>
          </NavBar>
        </nav>
      </Content>
    </Container>
  </>
);

export default Header;
