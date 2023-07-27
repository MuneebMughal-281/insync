import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Products } from '@src/pages/Products';
import { Category } from '@src/pages/components/Category';
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
      <Products />
    </React.Fragment>
  );
};
