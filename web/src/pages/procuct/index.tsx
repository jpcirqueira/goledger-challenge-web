import React from 'react';

import Header from '../../components/header';
import AddButton from '../../components/addButton';

const Product: React.FC = () => (
  <>
    <Header />
    <AddButton name="New Product" route="addproduct" />
  </>
);

export default Product;
