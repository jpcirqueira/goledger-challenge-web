/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-alert */
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import moment from 'moment';

import { useHistory } from 'react-router-dom';
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
  const history = useHistory();
  const SCHEMA = Yup.object().shape({
    name: Yup.string().required(),
    cnpj: Yup.string().required(),
    adress: Yup.string().required(),
  });

  function handleSubmit(values: any) {
    const datatime = moment(new Date()).format();

    const data = {
      asset: [
        {
          '@assetType': 'seller',
          cnpj: values.cnpj,
          name: values.name,
          address: values.adress,
          dateJoined: datatime,
        },
      ],
    };
    api.post('invoke/createAsset', data).then(() => {
      alert('create seller');
      history.push('/seller');
    });
  }

  const formik = useFormik({
    initialValues: {
      name: '',
      cnpj: '',
      adress: '',
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
          <h2>Create Seller</h2>
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
