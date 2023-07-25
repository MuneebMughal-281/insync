import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { styled, Grid, Paper, Box } from '@mui/material';
import { ProductTemplate } from '@src/pages/components/ProductTemplate';
import { API_SERVER } from '@src/config/env';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
export const ProductItem = (props: any) => {
  // const [loaer, setLoader] = useState(false);
  const [products, setProducts] = useState<any>([]);
  const [error, setError] = React.useState<any>(null);
  //Fetching data using axios
  useEffect(() => {
    axios
      .get(`${API_SERVER}/products/category/${props.productCategory}`)
      .then((res) => {
        setProducts(res.data.products);
        // console.log(res.data.products);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);
  if (error) return `Error: ${error.message}`;
  if (!products) return null;
  const openSingleProduct = (event) => {
    console.log(event.target.parentElement.id);
  };
  return (
    <Box sx={{ width: '100%' }} my={2}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {products.map((product: any) => (
          <Grid item xs={3} key={product.id}>
            <Item key={product.id} onClick={openSingleProduct}>
              <ProductTemplate
                productTitle={product.title}
                productImage={product.thumbnail}
                productPrice={product.price}
                productCategory={product.category}
              />
            </Item>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
