import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Box,
  Button,
} from '@mui/material';
interface ProductProps {
  title: string;
  image: string;
  category: string;
  price: number;
}
export const ProductTemplate = ({
  title,
  image,
  category,
  price,
}: ProductProps) => {
  return (
    <Card sx={{ maxWidth: '100%' }}>
      <CardMedia
        sx={{ objectFit: 'cover' }}
        component='img'
        height='145'
        image={image}
        alt={title}
      />
      <CardContent>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant='subtitle2' color='text.main'>
            {title}
          </Typography>
          <Typography variant='caption' color='text.secondary'>
            ${price}/-
          </Typography>
        </Box>
        <Typography textAlign='left' variant='subtitle1' color='text.secondary'>
          {category}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Button>Shop Now</Button>
      </CardActions>
    </Card>
  );
};
