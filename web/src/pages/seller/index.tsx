import React from 'react';

import Header from '../../components/header';
import AddButton from '../../components/addButton';

const Seller: React.FC = () => (
  <>
    <Header />
    <AddButton name="New Seller" route="addseller" />
  </>
);

export default Seller;
