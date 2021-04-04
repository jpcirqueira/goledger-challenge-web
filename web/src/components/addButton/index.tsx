import React from 'react';
import { MdAdd } from 'react-icons/md';

import history from '../../services/history';
// eslint-disable-next-line object-curly-newline
import { Button, TextButton, Container } from './styles';

interface StoreAddButtonProps {
  name: string;
  route: string;
}

const AddButton: React.FC<StoreAddButtonProps> = ({ name, route }) => (
  <>
    <Container>
      <Button onClick={() => history.push(`/${route}`)}>
        <MdAdd size={30} color="#ecf0f1" />
        <TextButton>{name}</TextButton>
      </Button>
    </Container>
  </>
);

export default AddButton;
