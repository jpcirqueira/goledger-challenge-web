/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-alert */
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { AxiosRequestConfig } from 'axios';
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

const AddProduct: React.FC = () => {
  const SCHEMA = Yup.object().shape({
    code: Yup.string().required(),
    name: Yup.string().required(),
    price: Yup.number().required(),
    seller: Yup.string().required(),
    category: Yup.string().required(),
  });

  function handleSubmit(values: any) {
    const data = {
      asset: [
        {
          '@assetType': 'product',
          code: values.code,
          name: values.name,
          price: values.price,
          soldBy: {
            cnpj: values.seller,
          },
          categories: [
            {
              name: values.category,
            },
          ],
        },
      ],
    };
    api.post('invoke/createAsset', data).then((res: AxiosRequestConfig) => {
      alert(`create product: ${res.data}`);
    });
  }

  const formik = useFormik({
    initialValues: {
      code: '',
      name: '',
      price: '',
      seller: '',
      category: '',
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
          <Imput
            placeholder="Code"
            value={formik.values.code}
            onChange={formik.handleChange('code')}
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

          <Imput
            placeholder="seller cnpj"
            value={formik.values.seller}
            onChange={formik.handleChange('seller')}
          />

          <Imput
            placeholder="Name Category"
            value={formik.values.category}
            onChange={formik.handleChange('category')}
          />

          <ButtonContainer>
            <Button type="submit">
              <TextButton>Register</TextButton>
            </Button>
          </ButtonContainer>
        </Form>
      </Container>
    </>
  );
};
export default AddProduct;
