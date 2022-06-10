import ProjectCard from '../project-card/project-card.component';

import './projects.styles.css';

import projects from '../../data';

const Projects = () => {
  return (
    <section className='work' id='work'>
      <header className='work-text'>Current Projects:</header>
      <div className='row'>
        <ProjectCard id={projects[0].id} {...projects[0]} />
      </div>
      <div className='column'>
        {projects.slice(1).map(project => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
