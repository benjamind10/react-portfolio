import React from 'react';
import { Outlet } from 'react-router-dom';

import Header from '../../components/header/header.component';
import Navigation from '../../components/navigation/navigation.component';

const NoMatch = () => {
  return (
    <>
      <Navigation />
      <Header />
      <div>
        <h1>404 Page Not Found</h1>
        <h1>
          <span role='img' aria-label='Face With Rolling Eyes Emoji'>
            🙄
          </span>
        </h1>
      </div>
      <Outlet />
    </>
  );
};

export default NoMatch;
