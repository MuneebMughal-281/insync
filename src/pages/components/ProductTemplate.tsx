import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Box,
  Button,
} from '@mui/material';

export const ProductTemplate = (props: any) => {
  return (
    <Card sx={{ maxWidth: '100%' }}>
      <CardMedia
        sx={{ objectFit: 'cover' }}
        component='img'
        height='145'
        image={props.productImage}
        alt={props.productTitle}
      />
      <CardContent>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant='subtitle2' color='text.main'>
            {props.productTitle}
          </Typography>
          <Typography variant='caption' color='text.secondary'>
            ${props.productPrice}/-
          </Typography>
        </Box>
        <Typography textAlign='left' variant='subtitle1' color='text.secondary'>
          {props.productCategory}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Button>Shop Now</Button>
      </CardActions>
    </Card>
  );
};
