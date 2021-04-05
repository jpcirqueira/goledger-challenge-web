/* eslint-disable no-alert */
import React from 'react';
import { MdModeEdit, MdDelete } from 'react-icons/md';
import { Card, Actions } from './styles';

interface StoreCategoryCardProps {
  name: string;
  exclude(): void;
  edit(): void;
}

const CategoryCard: React.FC<StoreCategoryCardProps> = ({
  name,
  exclude,
  edit,
}) => (
  <Card>
    <Actions>
      <MdModeEdit size={30} onClick={() => edit()} />
      <MdDelete size={30} onClick={() => exclude()} />
    </Actions>
    <h2>{`name:  ${name}`}</h2>
  </Card>
);
export default CategoryCard;
