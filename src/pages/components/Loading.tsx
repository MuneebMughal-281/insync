import React from 'react';
import { Grid, Skeleton, Box, styled } from '@mui/material';
const CardWrap = styled(Grid)(() => ({
  width: '25%',
  height: '100%',
  paddingBottom: '1rem',
}));
export const Loading = () => {
  return (
    <React.Fragment>
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
        <CardWrap>
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton animation='wave' />
          <Skeleton animation={false} />
        </CardWrap>
        <CardWrap>
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton animation='wave' />
          <Skeleton animation={false} />
        </CardWrap>
        <CardWrap>
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton animation='wave' />
          <Skeleton animation={false} />
        </CardWrap>
        <CardWrap>
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton animation='wave' />
          <Skeleton animation={false} />
        </CardWrap>
      </Box>
    </React.Fragment>
    // <Box sx={{ width: '100vw' }}>
    // </Box>
  );
};
