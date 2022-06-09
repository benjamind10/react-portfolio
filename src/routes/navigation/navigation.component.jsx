import { Fragment } from 'react';
import { Outlet, NavLink } from 'react-router-dom';

import { ReactComponent as MainLogo } from '../../assets/crown.svg';
import Header from '../../components/header/header.component';

import './navigation.styles.css';

const Navigation = () => {
  return (
    <Fragment>
      <div className='nav-bar'>
        <NavLink
          className='link'
          activeStyle={{ color: 'red' }}
          to='/'
        >
          <MainLogo className='logo' />
          <span>Ben Duran</span>
        </NavLink>
        <div className='nav-links-container'>
          <NavLink
            activeStyle={{ color: 'red' }}
            className='nav-link'
            to='/'
          >
            About Me
          </NavLink>
          <NavLink className='nav-link' to='/projects'>
            Projects
          </NavLink>
          <NavLink className='nav-link' to='/resume'>
            Resume
          </NavLink>
          <NavLink className='nav-link' to='/contact'>
            Contact Me
          </NavLink>
        </div>
      </div>
      <Header />
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
