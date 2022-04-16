import { Outlet } from 'react-router-dom';

import AboutMe from '../../components/about-me/about-me.component';

const Home = () => {
  return (
    <div>
      <AboutMe />
      <Outlet />
    </div>
  );
};

export default Home;
