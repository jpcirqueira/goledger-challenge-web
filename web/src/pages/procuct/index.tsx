/* eslint-disable no-alert */
/* eslint-disable arrow-parens */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react';
import { AxiosRequestConfig } from 'axios';
import { useHistory } from 'react-router-dom';

import AddButton from '../../components/addButton';
import ProductCard from '../../components/productCard';
import api from '../../services/api';
import { Container } from './styles';

const Product: React.FC = () => {
  const [products, setProducts] = useState([]);
  const history = useHistory();

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

  function editProduct(prod: any) {
    history.push('/editproduct', { date: prod });
  }

  function excludeProduct(code: string) {
    const data = {
      key: {
        '@assetType': 'product',
        code,
      },
    };

    api
      .delete('invoke/deleteAsset', { data })
      .then(() => {
        alert('exclude product');
        setProducts(state => state.filter((item: any) => item.code !== code));
      })
      .catch(() => {
        alert('error when delete product');
      });
  }
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
            exclude={() => excludeProduct(prod.code)}
            edit={() => editProduct(prod)}
          />
        ))}
      </Container>
    </>
  );
};
export default Product;
