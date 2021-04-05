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

const AddSeller: React.FC = () => {
  const SCHEMA = Yup.object().shape({
    name: Yup.string().required(),
    cnpj: Yup.string().required(),
    adress: Yup.string().required(),
    dateJoined: Yup.string(),
  });

  function handleSubmit(values: any) {
    const data = {
      asset: [
        {
          '@assetType': 'seller',
          cnpj: values.cnpj,
          name: values.name,
          address: values.adress,
          dateJoined: values.dateJoined,
        },
      ],
    };
    api.post('invoke/createAsset', data).then((res: AxiosRequestConfig) => {
      alert(`create product: ${res.data}`);
    });
  }

  const formik = useFormik({
    initialValues: {
      name: '',
      cnpj: '',
      adress: '',
      dateJoined: '',
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
            placeholder="Name"
            value={formik.values.name}
            onChange={formik.handleChange('name')}
          />

          <Imput
            placeholder="Cnpj"
            value={formik.values.cnpj}
            onChange={formik.handleChange('cnpj')}
          />

          <Imput
            placeholder="Adress"
            value={formik.values.adress}
            onChange={formik.handleChange('adress')}
          />

          <Imput
            placeholder="dateJoined"
            value={formik.values.dateJoined}
            onChange={formik.handleChange('dateJoined')}
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
export default AddSeller;
