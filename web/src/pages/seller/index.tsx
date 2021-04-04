/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react';
import { AxiosRequestConfig } from 'axios';
import AddButton from '../../components/addButton';
import SellerCard from '../../components/sellerCard';
import api from '../../services/api';
import { Container } from './styles';

const Seller: React.FC = () => {
  const [sellers, setSellers] = useState([]);

  useEffect(() => {
    const body = {
      query: {
        selector: {
          '@assetType': 'seller',
        },
      },
    };
    api.post('query/search', body).then((res: AxiosRequestConfig) => {
      setSellers(res.data.result);
    });
  }, [sellers]);

  return (
    <>
      <AddButton name="New Seller" route="addseller" />
      <Container>
        {sellers.map((prod: any) => (
          <SellerCard
            key={prod.key}
            name={prod.name}
            cnpj={prod.cnpj}
            adress={prod.adress}
            date={prod.date}
          />
        ))}
      </Container>
    </>
  );
};

export default Seller;
