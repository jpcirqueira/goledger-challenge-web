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

const EditProduct: React.FC = () => {
  const history = useHistory();
  const SCHEMA = Yup.object().shape({
    code: Yup.string().required(),
    name: Yup.string().required(),
    price: Yup.number().required(),
  });
  const location = useLocation();
  // eslint-disable-next-line prettier/prettier
  const {
    code, name, price,
  } = location.state.date;
  function handleSubmit(values: any) {
    const data = {
      update: {
        '@assetType': 'product',
        code,
        name: values.name,
        price: values.price,
      },
    };
    api.put('invoke/updateAsset', data).then(() => {
      alert('updated product');
      history.push('/');
    });
  }

  const formik = useFormik({
    initialValues: {
      code,
      name,
      price,
    },
    enableReinitialize: true,
    validationSchema: SCHEMA,
    onSubmit: (values: any) => {
      handleSubmit(values);
    },
  });
  return (
    <Container>
      <Form onSubmit={formik.handleSubmit}>
        <h2>Update Product</h2>
        <Imput
          placeholder="Code"
          value={formik.values.code}
          onChange={formik.handleChange}
        />
        <Imput
          placeholder="Name"
          value={formik.values.name}
          onChange={formik.handleChange('name')}
        />

        <Imput
          placeholder="Price"
          value={formik.values.price}
          onChange={formik.handleChange('price')}
        />

        <ButtonContainer>
          <Button type="submit">
            <TextButton>Save</TextButton>
          </Button>
        </ButtonContainer>
      </Form>
    </Container>
  );
};
export default EditProduct;
