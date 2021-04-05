/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-alert */
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

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

const AddCategory: React.FC = () => {
  const history = useHistory();
  const SCHEMA = Yup.object().shape({
    name: Yup.string().required(),
  });

  function handleSubmit(values: any) {
    const data = {
      asset: [
        {
          '@assetType': 'category',
          name: values.name,
        },
      ],
    };
    api.post('invoke/createAsset', data).then(() => {
      alert('create category');
      history.push('/category');
    });
  }

  const formik = useFormik({
    initialValues: {
      name: '',
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
          <h2>Create Category</h2>
          <Imput
            placeholder="Name Category"
            value={formik.values.name}
            onChange={formik.handleChange('name')}
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
export default AddCategory;
