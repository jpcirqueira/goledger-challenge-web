/* eslint-disable no-alert */
import React from 'react';
import { MdModeEdit, MdDelete } from 'react-icons/md';
import { useHistory } from 'react-router-dom';

import { Card, Actions } from './styles';

interface StoreCategoryCardProps {
  name: string;
  exclude(): void;
}

const CategoryCard: React.FC<StoreCategoryCardProps> = ({ name, exclude }) => {
  const history = useHistory();
  function aditCategory() {
    history.push('/editcategory');
  }

  return (
    <Card>
      <Actions>
        <MdModeEdit size={30} onClick={() => aditCategory()} />
        <MdDelete size={30} onClick={() => exclude()} />
      </Actions>
      <h2>{`name:  ${name}`}</h2>
    </Card>
  );
};
export default CategoryCard;
