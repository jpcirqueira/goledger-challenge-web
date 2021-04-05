/* eslint-disable no-alert */
import React from 'react';
import { MdModeEdit, MdDelete } from 'react-icons/md';

import { useHistory } from 'react-router-dom';
import { Card, Actions } from './styles';

interface StoreProductCardProps {
  code: string;
  name: string;
  price: string;
  exclude(): void;
}

const ProductCard: React.FC<StoreProductCardProps> = ({
  code,
  name,
  price,
  exclude,
}) => {
  const history = useHistory();

  function editProduct() {
    history.push('/editproduct');
  }

  return (
    <Card>
      <Actions>
        <MdModeEdit size={30} onClick={() => editProduct()} />
        <MdDelete size={30} onClick={() => exclude()} />
      </Actions>
      <h2>{`code:  ${code}`}</h2>
      <h2>{`name:  ${name}`}</h2>
      <h2>{`price:  ${price}`}</h2>
    </Card>
  );
};
export default ProductCard;
