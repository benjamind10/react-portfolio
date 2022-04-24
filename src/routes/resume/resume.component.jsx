import { Outlet } from 'react-router-dom';
import Skills from '../../components/skills/skills.component';

const Resume = () => {
  return (
    <div>
      <Skills />
      <Outlet />
    </div>
  );
};

export default Resume;
