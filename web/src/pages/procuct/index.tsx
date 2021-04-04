import React from 'react';

import AddButton from '../../components/addButton';
import ProductCard from '../../components/productCard';

import { Container } from './styles';

const Product: React.FC = () => (
  <>
    <AddButton name="New Product" route="addproduct" />
    <Container>
      <ProductCard code="401" name="notebook" price="1020.12" />
    </Container>
  </>
);

export default Product;
