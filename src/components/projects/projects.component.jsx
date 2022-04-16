import ProjectCard from '../project-card/project-card.component';

import './projects.styles.scss';

const projects = [
  {
    id: 1,
    name: 'COD Connect',
    image: 'grp_project2.png',
    techs: ['Node', 'Express', 'Handlebars'],
    gitHub: 'https://github.com/benjamind10/gaming-blog',
    liveUrl: 'https://rocky-sierra-14761.herokuapp.com/',
  },
  {
    id: 2,
    name: 'Local Coffee Finder',
    image: 'grp_project1.png',
    techs: ['HTML', 'CSS', 'JavaScript'],
    gitHub: 'https://benjamind10.github.io/local-coffee-finder/',
    liveUrl: 'https://rocky-sierra-14761.herokuapp.com/',
  },
  {
    id: 3,
    name: '777otto',
    image: 'img-2.png',
    techs: ['React', 'Node', 'ES6'],
    gitHub: 'https://benjamind10.github.io/777otto/',
    liveUrl: 'https://determined-allen-00b7d2.netlify.app/',
  },
  {
    id: 4,
    name: 'Weather Station',
    image: 'img-3.png',
    techs: ['Vue', 'Rust', 'Node'],
    gitHub: 'https://benjamind10.github.io/local-coffee-finder/',
    liveUrl:
      'https://weather.codihacks.org/stations/cbcb99ef-f20e-4484-93dd-ebda4a259481',
  },
  {
    id: 5,
    name: 'RGB Color Game',
    image: 'img-5.png',
    techs: ['HTML', 'CSS', 'JavaScript'],
    gitHub: 'https://benjamind10.github.io/the-color-game',
    liveUrl: 'https://rocky-sierra-14761.herokuapp.com/',
  },
  {
    id: 6,
    name: 'Monster Rolodex',
    image: 'img-6.png',
    techs: ['React', 'SASS', 'Node'],
    gitHub: 'https://benjamind10.github.io/monsters-rolodex/',
    liveUrl: 'https://rocky-sierra-14761.herokuapp.com/',
  },
];

const Projects = () => {
  return (
    <section className='work' id='work'>
      <div className='column'>
        {projects.map(project => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
