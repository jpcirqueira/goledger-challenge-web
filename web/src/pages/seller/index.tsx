/* eslint-disable no-alert */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react';
import { AxiosRequestConfig } from 'axios';
import { useHistory } from 'react-router-dom';
import moment from 'moment';
import AddButton from '../../components/addButton';
import SellerCard from '../../components/sellerCard';
import api from '../../services/api';
import { Container } from './styles';

const Seller: React.FC = () => {
  const [sellers, setSellers] = useState([]);
  const history = useHistory();
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
  }, []);

  function editSeller(prod: any) {
    history.push('/editseller', { data: prod });
  }

  function excludeSeller(cnpj: string) {
    const data = {
      key: {
        '@assetType': 'seller',
        cnpj,
      },
    };
    api
      .delete('invoke/deleteAsset', { data })
      .then(() => {
        alert('exclude seller');
        setSellers((state) => state.filter((item: any) => item.cnpj !== cnpj));
      }).catch(() => {
        alert('error when delete seller');
      });
  }
  return (
    <>
      <AddButton name="New Seller" route="addseller" />
      <Container>
        {sellers.map((prod: any) => (
          <SellerCard
            key={prod.key}
            name={prod.name}
            cnpj={prod.cnpj}
            address={prod.address}
            date={moment(prod.dateJoined).format('MMMM Do YYYY, h:mm:ss a')}
            exclude={() => excludeSeller(prod.cnpj)}
            edit={() => editSeller(prod)}
          />
        ))}
      </Container>
    </>
  );
};

export default Seller;
