import { Link } from 'react-router-dom';
import { AppBar, Box, Toolbar, Typography, Container } from '@mui/material';

const pages = ['NEWSLETTER', 'CONTACT US', "FAQ's"];

export const TopBar = () => {
  return (
    <AppBar
      position='static'
      sx={{
        display: { xs: 'none', sm: 'none', md: 'none', lg: 'flex' },
        maxHeight: '35px',
        boxShadow: 'none',
        justifyContent: 'center',
      }}
    >
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          <Typography
            variant='h6'
            noWrap
            component='div'
            sx={{
              fontSize: '0.8rem',
              fontFamily: 'Poppins',
              fontWeight: 300,
              letterSpacing: '.1rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            FREE SHIPPING FOR ALL ORDERS OF $150
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              justifyContent: 'flex-end',
              display: { xs: 'none', md: 'flex' },
              gap: '0.6rem',
            }}
          >
            {pages.map((page) => (
              <Link
                to={`/${page}`}
                key={page}
                style={{
                  fontSize: '0.8rem',
                  fontFamily: 'Poppins',
                  fontWeight: 400,
                  letterSpacing: '.1rem',
                  color: 'inherit',
                  textDecoration: 'none',
                }}
              >
                {page}
              </Link>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
