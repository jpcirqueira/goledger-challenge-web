/* eslint-disable prettier/prettier */
/* eslint-disable no-alert */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react';
import { AxiosRequestConfig } from 'axios';
import AddButton from '../../components/addButton';
import CategoryCard from '../../components/categoryCard';
import api from '../../services/api';
import { Container } from './styles';

const Category: React.FC = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const body = {
      query: {
        selector: {
          '@assetType': 'category',
        },
      },
    };
    api.post('query/search', body).then((res: AxiosRequestConfig) => {
      setCategories(res.data.result);
    });
  }, []);

  function excludeCategory(name: string) {
    const data = {
      key: {
        '@assetType': 'category',
        name,
      },
    };
    api
      .delete('invoke/deleteAsset', { data })
      .then((res: AxiosRequestConfig) => {
        alert(`exclude category: ${res.data.code}`);
        setCategories((state) => state.filter((item: any) => item.name !== name));
      })
      .catch(() => {
        alert('error when delete category');
      });
  }
  return (
    <>
      <AddButton name="New Category" route="addcategory" />
      <Container>
        {categories.map((prod: any) => (
          <CategoryCard
            name={prod.name}
            exclude={() => excludeCategory(prod.name)}
          />
        ))}
      </Container>
    </>
  );
};
export default Category;
