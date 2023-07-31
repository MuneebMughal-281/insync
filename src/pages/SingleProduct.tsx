import React from 'react';
import { useParams } from 'react-router-dom';
import { fetchData } from '@src/pages/components/fetchData';
import { Typography, Grid, Box, Button, Stack } from '@mui/material';

export const SingleProduct = () => {
  const { productId } = useParams();
  const { data, error } = fetchData({ url: `products/${productId}` });
  const singleProduct = data;
  // const productImages = data.images || [];
  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!singleProduct) {
    return <div>Loading...</div>;
  }
  return (
    <React.Fragment>
      <Box sx={{ width: '100%', display: 'flex', px: 1, py: 5 }}>
        <Box sx={{ width: '50%', overflowX: 'hidden', px: 2 }}>
          <Grid
            sx={{
              display: 'flex',
              gap: '0.6rem',
              flexWrap: 'wrap',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Grid
              sx={{
                width: '49%',
                height: '400px',
                overflow: 'hidden',
              }}
            >
              <img
                style={{
                  width: '100%',
                  height: '400px',
                  objectFit: 'cover',
                  objectPosition: 'center',
                }}
                src={singleProduct.image}
                alt={singleProduct.title}
              />
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ width: '50%', overflowX: 'hidden', px: 2 }}>
          <Typography variant='h4' py='1rem'>
            {singleProduct.title}
          </Typography>
          <Typography variant='subtitle2'>
            {singleProduct.description}
          </Typography>
          <Typography variant='caption'>
            STYLE : {singleProduct.brand}
          </Typography>
          <Typography variant='h6' py='1rem'>
            Be the first one to review
          </Typography>
          <Typography variant='h4' py='1.2rem'>
            ${`${singleProduct.price} (${singleProduct.discountPercentage}%)`}
          </Typography>
          <Stack spacing={2} direction='row' py='1rem'>
            <Button variant='contained' size='large'>
              add to bag
            </Button>
            <Button variant='outlined' size='large'>
              Outlined
            </Button>
          </Stack>
          <Typography variant='h6' py='1rem'>
            Delivery Time:
          </Typography>
          <Typography variant='subtitle2'>
            Lahore, Rawalpindi, Islamabad: 1-2 days Other cities: 1-4 days
          </Typography>
          <Typography variant='h6' py='1rem'>
            PRODUCT DESCRIPTION:
          </Typography>
          <Typography variant='subtitle2'>
            {singleProduct.description}
          </Typography>
          <Stack spacing={2} direction='row' py='1.5rem'>
            <Button variant='outlined' size='large'>
              write a review
            </Button>
          </Stack>
        </Box>
      </Box>
    </React.Fragment>
  );
};
