import { Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';

import { ReactComponent as MainLogo } from '../../assets/crown.svg';
import Header from '../../components/header/header.component';

import './navigation.styles.scss';

const Navigation = () => {
  return (
    <Fragment>
      <div className='nav-bar'>
        <Link to='/'>
          <MainLogo className='logo' />
          <span>Ben Duran</span>
        </Link>
        <div className='nav-links-container'>
          <Link className='nav-link' to='/'>
            About Me
          </Link>
          <Link className='nav-link' to='/projects'>
            Projects
          </Link>
          <Link className='nav-link' to='/resume'>
            Resume
          </Link>
          <Link className='nav-link' to='/contact'>
            Contact Me
          </Link>
        </div>
      </div>
      <Header />
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
