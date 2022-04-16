import { Outlet } from 'react-router-dom';

import Projects from '../../components/projects/projects.component';

const Work = () => {
  return (
    <div>
      <Projects />
      <Outlet />
    </div>
  );
};

export default Work;
