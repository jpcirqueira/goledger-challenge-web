import React from 'react';
import { useLocation } from 'react-router-dom';

// eslint-disable-next-line object-curly-newline
import { Container, Content, Title, NavBar } from './styles';

const Header: React.FC = () => {
  const { pathname } = useLocation();

  return (
    <>
      <Container>
        <Content>
          <Title>Marketplace</Title>
          <nav>
            <NavBar>
              <a href="/" className={pathname === '/' ? 'active' : ''}>
                Product
              </a>
              <a
                href="/seller"
                className={pathname === '/seller' ? 'active' : ''}
              >
                Seller
              </a>
              <a
                href="/category"
                className={pathname === '/category' ? 'active' : ''}
              >
                Categories
              </a>
            </NavBar>
          </nav>
        </Content>
      </Container>
    </>
  );
};
export default Header;
