/* eslint-disable no-alert */
import React from 'react';
import { MdModeEdit, MdDelete } from 'react-icons/md';
import { AxiosRequestConfig } from 'axios';

import api from '../../services/api';
import history from '../../services/history';
import { Card, Actions } from './styles';

interface StoreCategoryCardProps {
  name: string;
}

const CategoryCard: React.FC<StoreCategoryCardProps> = ({ name }) => {
  const data = {
    key: {
      '@assetType': 'category',
      name,
    },
  };
  function excludCategory() {
    api
      .delete('invoke/deleteAsset', { data })
      .then((res: AxiosRequestConfig) => {
        alert(`exclude category: ${res.data.code}`);
      });
  }
  function aditCategory() {
    history.push('/editcategory');
  }

  return (
    <Card>
      <Actions>
        <MdModeEdit size={30} onClick={() => aditCategory()} />
        <MdDelete size={30} onClick={() => excludCategory()} />
      </Actions>
      <h2>{`name:  ${name}`}</h2>
    </Card>
  );
};
export default CategoryCard;
