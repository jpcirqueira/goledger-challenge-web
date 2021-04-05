/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-alert */
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { useHistory, useLocation } from 'react-router-dom';
import api from '../../services/api';
// eslint-disable-next-line prettier/prettier
import {
  Container,
  Imput,
  ButtonContainer,
  Button,
  TextButton,
  Form,
} from './styles';

const EditSeller: React.FC = () => {
  const history = useHistory();
  const SCHEMA = Yup.object().shape({
    name: Yup.string().required(),
    cnpj: Yup.string().required(),
    address: Yup.string().required(),
  });
  const location = useLocation();
  // eslint-disable-next-line prettier/prettier
  const {
    name, address, cnpj, dateJoined,
  } = location.state.data;
  function handleSubmit(values: any) {
    const data = {
      update: {
        '@assetType': 'seller',
        cnpj,
        name: values.name,
        address: values.address,
        dateJoined,
      },
    };
    api.post('invoke/updateAsset', data).then(() => {
      alert('updated seller');
      history.push('/seller');
    });
  }

  const formik = useFormik({
    initialValues: {
      name,
      cnpj,
      address,
    },
    enableReinitialize: true,
    validationSchema: SCHEMA,
    onSubmit: (values: any) => {
      handleSubmit(values);
    },
  });
  return (
    <>
      <Container>
        <Form onSubmit={formik.handleSubmit}>
          <h2>Update Seller</h2>
          <Imput
            placeholder="Name"
            value={formik.values.name}
            onChange={formik.handleChange('name')}
          />

          <Imput
            placeholder="Cnpj"
            value={formik.values.cnpj}
            onChange={formik.handleChange}
          />

          <Imput
            placeholder="address"
            value={formik.values.address}
            onChange={formik.handleChange('address')}
          />

          <ButtonContainer>
            <Button type="submit">
              <TextButton>Save</TextButton>
            </Button>
          </ButtonContainer>
        </Form>
      </Container>
    </>
  );
};
export default EditSeller;
