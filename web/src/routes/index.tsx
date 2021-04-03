import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Seller from '../pages/seller';
import Product from '../pages/procuct';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/product" component={Product} />
    <Route path="/seller" component={Seller} />
  </Switch>
);

export default Routes;
