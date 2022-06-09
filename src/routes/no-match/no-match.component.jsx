import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const NoMatch = () => {
  return (
    <>
      <div>
        <h1>404 Page Not Found</h1>
        <Link to='/'>Home</Link>
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
