import { ProjectContainer } from './project-card.styles.jsx';

const ProjectCard = ({ id, name, ...otherProps }) => {
  const { liveUrl, image, techs } = otherProps;
  return (
    <ProjectContainer>
      <a href={liveUrl} target='_blank' rel='noreferrer'>
        <img src={require(`../../assets/${image}`)} alt={name} />
        <div>
          {techs.map((tech, i) => (
            <p key={i}>{tech}</p>
          ))}
          <h3>{name}</h3>
        </div>
      </a>
      <a href={otherProps.gitHub} target='_blank' rel='noreferrer'>
        GitHub Link
      </a>
    </ProjectContainer>
  );
};

export default ProjectCard;
