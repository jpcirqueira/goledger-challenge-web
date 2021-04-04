import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Seller from '../pages/seller';
import Product from '../pages/procuct';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Product} />
    <Route path="/seller" exact component={Seller} />
  </Switch>
);

export default Routes;
