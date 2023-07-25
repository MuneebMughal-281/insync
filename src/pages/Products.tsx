import React from 'react';
// import { Helmet } from 'react-helmet-async';
import { ProductItem } from '@src/pages/components/ProductItem';
// interface ProductsProps {
//   title: string;
// }
export const Products = (props: any) => {
  return (
    <React.Fragment>
      {/* <Helmet>
        <title>{title} | Brand</title>;
      </Helmet> */}
      <ProductItem productCategory={props.Category} />
    </React.Fragment>
  );
};
