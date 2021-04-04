/* eslint-disable no-alert */
import React from 'react';
import { MdModeEdit, MdDelete } from 'react-icons/md';
import { AxiosRequestConfig } from 'axios';

import api from '../../services/api';
import history from '../../services/history';
import { Card, Actions } from './styles';

interface StoreSellerCardProps {
  name: string;
  adress: string;
  cnpj: string;
  date: string;
}

const SellerCard: React.FC<StoreSellerCardProps> = ({
  name,
  adress,
  cnpj,
  date,
}) => {
  const data = {
    key: {
      '@assetType': 'product',
      cnpj,
    },
  };
  function excludSeller() {
    api
      .delete('invoke/deleteAsset', { data })
      .then((res: AxiosRequestConfig) => {
        alert(`exclude seller: ${res.data.code}`);
      });
  }
  function editSeller() {
    history.push('/editseller');
  }

  return (
    <Card>
      <Actions>
        <MdModeEdit size={30} onClick={() => editSeller()} />
        <MdDelete size={30} onClick={() => excludSeller()} />
      </Actions>
      <h2>{`name:  ${name}`}</h2>
      <h2>{`cnpj:  ${cnpj}`}</h2>
      <h2>{`adress:  ${adress}`}</h2>
      <h2>{`date:  ${date}`}</h2>
    </Card>
  );
};
export default SellerCard;
