import { Link, useParams } from 'react-router-dom';
import { fetchData } from '@src/pages/components/fetchData';
import { ProductTemplate } from '@src/pages/components/ProductTemplate';
import { styled, Grid, Paper, Box } from '@mui/material';
import { Loading } from '@src/pages/components/Loading';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export const SingleCategory = () => {
  const { category } = useParams();
  const { data, error } = fetchData({ url: `products/category/${category}` });
  const products = data.products;
  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!products || !Array.isArray(products)) {
    return <Loading />;
  }

  return (
    <Box sx={{ width: '100%' }} my={2}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {products.map((product: any) => (
          <Grid item xs={3} key={product.id}>
            <Link
              style={{ textDecoration: 'none' }}
              to={`/products/${product.id}`}
            >
              <Item>
                <ProductTemplate {...product} />
              </Item>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
