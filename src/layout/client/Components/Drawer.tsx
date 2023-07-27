import * as React from 'react';
import { Box, SwipeableDrawer, Button, List, Divider } from '@mui/material';
import { Link } from 'react-router-dom';
import { pages } from '@src/layout/client/Components/pages';

export const Drawer = () => {
  const [state, setState] = React.useState({ left: false });

  const toggleDrawer =
    (anchor: 'left', open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: 'left') => (
    <Box
      sx={{
        width: { xs: '100vw', sm: '50vw', md: '30vw' },
        height: '100vh',
      }}
      role='presentation'
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.6rem',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {pages.map((page) => (
          <React.Fragment key={page.name}>
            <Link
              to={page.path}
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
            <Divider />
          </React.Fragment>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <React.Fragment>
        <Button
          onClick={toggleDrawer('left', true)}
          sx={{ color: 'black', display: { lg: 'none', md: 'block' } }}
        >
          |||
        </Button>
        <SwipeableDrawer
          anchor={'left'}
          open={state['left']}
          onClose={toggleDrawer('left', false)}
          onOpen={toggleDrawer('left', true)}
        >
          {list('left')}
        </SwipeableDrawer>
      </React.Fragment>
    </div>
  );
};
