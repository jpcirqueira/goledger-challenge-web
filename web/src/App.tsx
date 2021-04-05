import React from 'react';

import Routes from './routes';
import GlobalStyle from './styles/global';
import Header from './components/header';

const App: React.FC = () => (
  <>
    <Header />
    <Routes />
    <GlobalStyle />
  </>
);
export default App;
