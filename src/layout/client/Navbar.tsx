import React from 'react';
import { TopBar } from '@src/layout/client/Components/TopBar';
import { MainBar } from '@src/layout/client/Components/MainBar';
import { MiddelBar } from '@src/layout/client/Components/MiddelBar';

export const Navbar = () => {
  return (
    <React.Fragment>
      <TopBar />
      <MiddelBar />
      <MainBar />
    </React.Fragment>
  );
};
