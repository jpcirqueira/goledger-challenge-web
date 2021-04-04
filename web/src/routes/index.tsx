import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Seller from '../pages/seller';
import Product from '../pages/procuct';
import Category from '../pages/category';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Product} />
    <Route path="/seller" exact component={Seller} />
    <Route path="/category" exact component={Category} />
  </Switch>
);

export default Routes;
