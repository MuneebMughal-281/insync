// import React from 'react';
import { Helmet } from 'react-helmet-async';
interface HomeProps {
  title: string;
}
export const Home = ({ title }: HomeProps) => {
  return (
    <Helmet>
      <title>{title} | Muneeb</title>;
    </Helmet>
  );
};
