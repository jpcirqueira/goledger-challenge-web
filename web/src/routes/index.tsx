import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Seller from '../pages/seller';
import Product from '../pages/procuct';
import Category from '../pages/category';
import AddSeller from '../pages/addSeller';
import AddProduct from '../pages/addProduct';
import AddCategory from '../pages/addCategory';
import EditSeller from '../pages/editSeller';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Product} />
    <Route path="/seller" component={Seller} />
    <Route path="/category" component={Category} />
    <Route path="/addseller" component={AddSeller} />
    <Route path="/addproduct" component={AddProduct} />
    <Route path="/addcategory" component={AddCategory} />
    <Route path="/editseller" component={EditSeller} />
  </Switch>
);

export default Routes;
