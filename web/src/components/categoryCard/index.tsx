/* eslint-disable no-alert */
import React from 'react';
import { MdDelete } from 'react-icons/md';
import { Card, Actions } from './styles';

interface StoreCategoryCardProps {
  name: string;
  exclude(): void;
}

const CategoryCard: React.FC<StoreCategoryCardProps> = ({ name, exclude }) => (
  <Card>
    <Actions>
      <MdDelete size={30} onClick={() => exclude()} />
    </Actions>
    <h2>{`name:  ${name}`}</h2>
  </Card>
);
export default CategoryCard;
