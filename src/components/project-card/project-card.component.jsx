import './project-card.styles.css';

const ProjectCard = ({ id, name, ...otherProps }) => {
  const { liveUrl, image, techs, description, gitHub } = otherProps;

  return (
    <div className={id === 1 ? 'project1' : 'project'}>
      <a href={liveUrl} target='_blank' rel='noreferrer'>
        <img
          className='project-image'
          src={require(`../../assets/${image}`)}
          alt={name}
        />
        <div className='project-text'>
          <h3>{name}</h3>
          {techs.map((tech, idx) => (
            <p key={idx} className='techs'>
              {tech}
            </p>
          ))}
          <p>{description}</p>
        </div>
      </a>
      <a
        className='project-text-link'
        href={gitHub}
        target='_blank'
        rel='noreferrer'
      >
        Link to GitHub
      </a>
    </div>
  );
};

export default ProjectCard;
