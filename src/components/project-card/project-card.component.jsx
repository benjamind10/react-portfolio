const ProjectCard = ({ id, name, ...otherProps }) => {
  const { liveUrl, image, techs } = otherProps;
  return (
    <div className='project'>
      <a href={liveUrl} target='_blank' rel='noreferrer'>
        <img src={require(`../../assets/${image}`)} alt={name} />
        <div className='project-text'>
          {techs.map((tech, i) => (
            <p key={i}>{tech}</p>
          ))}
          <h3>{name}</h3>
        </div>
      </a>
    </div>
  );
};

export default ProjectCard;
