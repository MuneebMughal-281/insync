import { Link } from 'react-router-dom';
import { fetchData } from '@src/pages/components/fetchData';
import { ProductTemplate } from '@src/pages/components/ProductTemplate';
import { styled, Grid, Paper, Box } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export const ProductItem = () => {
  const { data, error } = fetchData({ url: 'products' });
  const products = data.products;

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!products || !Array.isArray(products)) {
    return <div>Loading...</div>;
  }

  return (
    <Box sx={{ width: '100%' }} my={2}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {products.map((product: any) => (
          <Grid item xs={3}>
            <Link key={product.id} to={`/products/${product.id}`}>
              <Item>
                <ProductTemplate
                  productTitle={product.title}
                  productImage={product.thumbnail}
                  productPrice={product.price}
                  productCategory={product.category}
                />
              </Item>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
