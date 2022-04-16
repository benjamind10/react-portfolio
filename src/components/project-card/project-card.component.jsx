import Projects from '../projects/projects.component';

const ProjectCard = ({ id, name, ...otherProps }) => {
  return (
    <div>Terst{id}</div>
    // <div className='project2'>
    //   <a
    //     href='https://benjamind10.github.io/local-coffee-finder/'
    //     target='_blank'
    //   >
    //     <img src={require(`${image}`)} alt={name} />
    //     <div className='project-text'>
    //       {techs.map(tech => (
    //         <p>{tech}</p>
    //       ))}
    //       <h3>{name}</h3>
    //     </div>
    //   </a>
    // </div>
  );
};

export default ProjectCard;
