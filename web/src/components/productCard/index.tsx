import React from 'react';
import { MdModeEdit, MdDelete } from 'react-icons/md';
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
}) => (
  <Card>
    <Actions>
      <MdModeEdit size={30} />
      <MdDelete size={30} />
    </Actions>
    <h2>{`code:  ${code}`}</h2>
    <h2>{`name:  ${name}`}</h2>
    <h2>{`price:  ${price}`}</h2>
  </Card>
);

export default ProductCard;
