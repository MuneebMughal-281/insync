import React from 'react';
import { Link } from 'react-router-dom';
import { fetchData } from '@src/pages/components/fetchData';
import { Grid, Box, styled, Typography } from '@mui/material';
const CardWrap = styled(Grid)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.common.black,
  borderRadius: '10px',
  width: '25%',
  height: '100%',
  paddingBottom: '1rem',
}));
export const Category = () => {
  const { data, error } = fetchData({ url: 'products/categories' });
  const category = data;
  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!category || !Array.isArray(category)) {
    return <div>Loading...</div>;
  }
  const categories = category.slice(0, 5);
  return (
    <React.Fragment>
      <Typography sx={{ textAlign: 'center', mt: 3 }}>
        Top Categories
      </Typography>
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          msOverflow: 'hidden',
          maxHeight: 'auto',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '1rem',
          px: 5,
        }}
        my={2}
      >
        {categories.map((item: string) => (
          <CardWrap key={item}>
            <Link
              to={item}
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                textDecoration: 'none',
                color: 'black',
                textTransform: 'capitalize',
                fontFamily: 'poppins',
                fontSize: '1.2rem',
              }}
            >
              <img
                src={
                  item === 'smartphones'
                    ? 'https://www.hallroad.com.pk/wp-content/uploads/2020/07/MOBILETHUMB.png'
                    : item === 'laptops'
                    ? 'https://images.squarespace-cdn.com/content/v1/569706fb5dc6def15843549d/1598012438800-CJHZELMO6QWC0K4B7WZ3/Best+Laptops+Money+Can+Buy+in+2020+%28August+2020+Updated+List%29.JPG?format=1000w'
                    : item === 'fragrances'
                    ? 'https://www.codigonuevo.com/binrepository/sustancias-perfumes-codigo-nuevo-930x600_CN126536_MG11227352.jpg'
                    : item === 'skincare'
                    ? 'https://d3vlxf0ngetfml.cloudfront.net/uploads/2018/04/S0A1911-resized.jpeg'
                    : item === 'skincare'
                    ? 'https://home2grocery.files.wordpress.com/2016/12/grocery1.jpg'
                    : item === 'groceries'
                    ? 'https://i2-prod.mirror.co.uk/incoming/article9542573.ece/ALTERNATES/n615/Shopping.jpg'
                    : ''
                }
                alt={item}
                style={{
                  width: '100%',
                  height: '300px',
                  objectFit: 'cover',
                  marginBottom: '1rem',
                }}
                loading='lazy'
              />
              {item}
            </Link>
          </CardWrap>
        ))}
      </Box>
    </React.Fragment>
  );
};
