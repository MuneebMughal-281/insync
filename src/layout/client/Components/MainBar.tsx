import { Link } from 'react-router-dom';
import { AppBar, Box, Toolbar, Container } from '@mui/material';
import { pages } from '@src/layout/client/Components/pages';
import { Drawer } from '@src/layout/client/Components/Drawer';

export const MainBar = () => {
  return (
    <AppBar position='relative'>
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          <Drawer />
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'none', sm: 'none', md: 'none', lg: 'flex' },
              justifyContent: 'center',
              gap: '1rem',
            }}
          >
            {pages.map((page) => (
              <Link
                to={page.path}
                key={page.name}
                style={{
                  color: 'inherit',
                  display: 'block',
                  fontFamily: 'Poppins',
                  fontWeight: '400',
                  textDecoration: 'none',
                  textTransform: 'capitalize',
                }}
              >
                {page.name}
              </Link>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
