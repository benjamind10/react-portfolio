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
          <p>
            {techs}
            <br />
            {description}
          </p>
          <a
            className='project-text-link'
            href={gitHub}
            target='_blank'
            rel='noreferrer'
          >
            Link to GitHub
          </a>
        </div>
      </a>
    </div>
  );
};

export default ProjectCard;
