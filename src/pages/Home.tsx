import axios from 'axios';
import { API_SERVER } from '@src/config/env';
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
// import { SingleProduct } from '@src/pages/components/SingleProduct';
import { Box, Typography } from '@mui/material';
import { Products } from '@src/pages/Products';
interface HomeProps {
  title: string;
}
export const Home = ({ title }: HomeProps) => {
  const [categorys, setCategorys] = useState<any>([]);
  // const [error, setError] = React.useState<any>(null);
  useEffect(() => {
    axios.get(`${API_SERVER}/products/categories`).then((res) => {
      // console.log(res.data);
      setCategorys(res.data);
    });
    // .catch((error) => {
    //   setError(error);
    // });
  }, []);
  return (
    <React.Fragment>
      <Helmet>
        <title>{title} | Brand</title>;
      </Helmet>
      {categorys.map((category: any) => (
        <Box my={4} px={5} key={category}>
          <Typography variant='button' fontSize={22} fontWeight={700}>
            {category}
          </Typography>
          <Products Category={category} />
        </Box>
      ))}
      {/* <SingleProduct /> */}
    </React.Fragment>
  );
};
