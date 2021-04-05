/* eslint-disable no-alert */
import React from 'react';
import { MdModeEdit, MdDelete } from 'react-icons/md';

import { Card, Actions } from './styles';

interface StoreSellerCardProps {
  name: string;
  address: string;
  cnpj: string;
  date: string;
  exclude(): void;
  edit(): void;
}

const SellerCard: React.FC<StoreSellerCardProps> = ({
  name,
  address,
  cnpj,
  date,
  exclude,
  edit,
}) => (
  <Card>
    <Actions>
      <MdModeEdit size={30} onClick={() => edit()} />
      <MdDelete size={30} onClick={() => exclude()} />
    </Actions>
    <h2>{`name:  ${name}`}</h2>
    <h2>{`cnpj:  ${cnpj}`}</h2>
    <h2>{`address:  ${address}`}</h2>
    <h2>{`date:  ${date}`}</h2>
  </Card>
);
export default SellerCard;
