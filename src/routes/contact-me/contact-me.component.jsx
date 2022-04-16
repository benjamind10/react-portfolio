import { Outlet } from 'react-router-dom';

import Contact from '../../components/contact/contact.component';

const Home = () => {
  return (
    <div>
      <Contact />
      <Outlet />
    </div>
  );
};

export default Home;
