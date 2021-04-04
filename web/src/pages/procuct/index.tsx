/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react';
import { AxiosRequestConfig } from 'axios';
import AddButton from '../../components/addButton';
import ProductCard from '../../components/productCard';
import api from '../../services/api';
import { Container } from './styles';

const Product: React.FC = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const body = {
      query: {
        selector: {
          '@assetType': 'product',
        },
      },
    };
    api.post('query/search', body).then((res: AxiosRequestConfig) => {
      setProducts(res.data.result);
    });
  }, []);

  return (
    <>
      <AddButton name="New Product" route="addproduct" />
      <Container>
        {products.map((prod: any) => (
          <ProductCard
            key={prod.key}
            code={prod.code}
            name={prod.name}
            price={prod.price}
          />
        ))}
      </Container>
    </>
  );
};
export default Product;
