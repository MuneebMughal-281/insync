import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Category } from '@src/pages/Category';
import { ProductItem } from '@src/pages/components/ProductItem';
interface HomeProps {
  title: string;
}
export const Home = ({ title }: HomeProps) => {
  return (
    <React.Fragment>
      <Helmet>
        <title>{title} | Brand</title>;
      </Helmet>
      <Category />
      <ProductItem />
    </React.Fragment>
  );
};
