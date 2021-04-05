/* eslint-disable no-alert */
import React from 'react';
import { MdModeEdit, MdDelete } from 'react-icons/md';
import { AxiosRequestConfig } from 'axios';

import api from '../../services/api';
import history from '../../services/history';
import { Card, Actions } from './styles';

interface StoreProductCardProps {
  code: string;
  name: string;
  price: string;
}

const ProductCard: React.FC<StoreProductCardProps> = ({
  code,
  name,
  price,
}) => {
  const data = {
    key: {
      '@assetType': 'product',
      code,
    },
  };
  function excludProduct() {
    api
      .delete('invoke/deleteAsset', { data })
      .then((res: AxiosRequestConfig) => {
        alert(`exclude product: ${res.data}`);
      });
  }
  function editProduct() {
    history.push('/editproduct');
  }

  return (
    <Card>
      <Actions>
        <MdModeEdit size={30} onClick={() => editProduct()} />
        <MdDelete size={30} onClick={() => excludProduct()} />
      </Actions>
      <h2>{`code:  ${code}`}</h2>
      <h2>{`name:  ${name}`}</h2>
      <h2>{`price:  ${price}`}</h2>
    </Card>
  );
};
export default ProductCard;
