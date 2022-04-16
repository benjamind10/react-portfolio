import ProjectCard from '../project-card/project-card.component';

const projects = [
  {
    id: 1,
    name: 'COD Connect',
    image: '../../assets/grp_project2.png',
    techs: ['Node', 'Express', 'Handlebars'],
    gitHub: 'https://benjamind10.github.io/local-coffee-finder/',
    liveUrl: 'https://rocky-sierra-14761.herokuapp.com/',
  },
];

const Projects = () => {
  return (
    <div>
      {projects.map(project => (
        <ProjectCard {...project} />
      ))}
    </div>
  );
};

export default Projects;
