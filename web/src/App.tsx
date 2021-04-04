import React from 'react';
import { Router } from 'react-router-dom';

import Routes from './routes';
import history from './services/history';
import GlobalStyle from './styles/global';
import Header from './components/header';

const App: React.FC = () => (
  <Router history={history}>
    <GlobalStyle />
    <Header />
    <Routes />
  </Router>
);
export default App;
