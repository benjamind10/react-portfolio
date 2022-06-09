import { useState } from 'react';
import { Outlet } from 'react-router-dom';

import { ReactComponent as MainLogo } from '../../assets/crown.svg';

import './navigation.styles.css';

const Navigation = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <header className='nav-bar menu'>
        <span>
          <a className='logo-heading' href='/'>
            <MainLogo className='logo' />
            BEN DURAN
          </a>
        </span>
        <nav className='navbar'>
          <ul
            onClick={toggle ? 'active' : ''}
            className={`nav-item nav-menu ${toggle ? 'active' : ''}`}
          >
            <li className='nav-item'>
              <a className='nav-link' href='#about-me'>
                About Me
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#work'>
                Projects
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#contact-me'>
                Contact Me
              </a>
            </li>
            <li className='nav-item'>
              <a
                className='nav-link'
                href='https://docs.google.com/document/d/1b_eIkjsfNS31_3ax977IkqNiJWDCbS3i7MwP5Q7GlMw/edit'
                target='_blank'
                rel='noreferrer'
              >
                Resume
              </a>
            </li>
          </ul>
          <div
            onClick={() => setToggle(!toggle)}
            className={toggle ? 'hamburger active' : 'hamburger'}
          >
            <span className='bar'></span>
            <span className='bar'></span>
            <span className='bar'></span>
          </div>
        </nav>
      </header>
      <Outlet />
    </>
  );
};

export default Navigation;
