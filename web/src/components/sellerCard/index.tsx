/* eslint-disable no-alert */
import React from 'react';
import { MdModeEdit, MdDelete } from 'react-icons/md';

import { useHistory } from 'react-router-dom';
import { Card, Actions } from './styles';

interface StoreSellerCardProps {
  name: string;
  adress: string;
  cnpj: string;
  date: string;
  exclude(): void;
}

const SellerCard: React.FC<StoreSellerCardProps> = ({
  name,
  adress,
  cnpj,
  date,
  exclude,
}) => {
  const history = useHistory();

  function editSeller() {
    history.push('/editseller');
  }

  return (
    <Card>
      <Actions>
        <MdModeEdit size={30} onClick={() => editSeller()} />
        <MdDelete size={30} onClick={() => exclude()} />
      </Actions>
      <h2>{`name:  ${name}`}</h2>
      <h2>{`cnpj:  ${cnpj}`}</h2>
      <h2>{`adress:  ${adress}`}</h2>
      <h2>{`date:  ${date}`}</h2>
    </Card>
  );
};
export default SellerCard;
