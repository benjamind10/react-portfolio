import ProjectCard from '../project-card/project-card.component';

const projects = [
  {
    id: 1,
    name: 'Broadway Suspension',
    image: 'grp_project3.png',
    techs: ['MERN Full Stack'],
    description:
      'This is a custom site made for Virginia local suspension shop. It is featuring the 10 year anniversary of the company.',
    gitHub: 'https://github.com/benjamind10/broadway-suspension',
    liveUrl: 'https://broadway-suspension.herokuapp.com/',
  },
  {
    id: 2,
    name: 'COD Connect',
    image: 'grp_project2.png',
    techs: ['Node', 'Express', 'Handlebars'],
    description:
      'Allows you to connect with COD players based on gaming interest and allows for a group chat to share gaming IDs.',
    gitHub: 'https://github.com/benjamind10/gaming-blog',
    liveUrl: 'https://rocky-sierra-14761.herokuapp.com/',
  },
  {
    id: 3,
    name: 'Local Coffee Finder',
    image: 'grp_project1.png',
    techs: ['HTML', 'CSS', 'JavaScript'],
    description:
      'A coffee finder app using the google API that allows you to display local coffee shops and respective information.',
    gitHub: 'https://benjamind10.github.io/local-coffee-finder/',
    liveUrl: 'https://rocky-sierra-14761.herokuapp.com/',
  },
  {
    id: 4,
    name: '777otto',
    image: 'img-2.png',
    techs: ['React', 'Node', 'ES6'],
    description:
      'A React app that uses Lottery Results API to display current information about drawings locally and in other states',
    gitHub: 'https://benjamind10.github.io/777otto/',
    liveUrl: 'https://determined-allen-00b7d2.netlify.app/',
  },
  {
    id: 5,
    name: 'Darkjs-Bot',
    image: 'img-3_new.png',
    techs: ['Node', 'JavaScript', 'DiscordJS'],
    description:
      'An all purpose Discord bot using the DiscordJS library. It has commands for moderation and entertainment.',
    gitHub: 'https://github.com/benjamind10/darkjs-bot',
    liveUrl: '',
  },
  {
    id: 6,
    name: 'CRWN-Clothing',
    image: 'img-5_new.png',
    techs: ['React', 'CSS', 'JavaScript'],
    description:
      ' E-commerce site built with React/Redux and with a Firebase backend. Handles payments through stripe and queries with GraphQL',
    gitHub: 'https://benjamind10.github.io/the-color-game',
    liveUrl: 'https://rocky-sierra-14761.herokuapp.com/',
  },
];

const Projects = () => {
  return (
    <section className='work' id='work'>
      <header class='work-text'>Current Projects:</header>
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
